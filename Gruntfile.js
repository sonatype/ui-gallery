/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved. Includes
 * the third-party code listed at
 * http://links.sonatype.com/products/clm/attributions. "Sonatype" is a
 * trademark of Sonatype, Inc.
 */
(function() {
  'use strict';

  module.exports = function(grunt) {
    var path = require('path');
    var webpackCmd = path.join('node_modules', '.bin', 'webpack');
    var webpackDevServerCmd = path.join('node_modules', '.bin', 'webpack-dev-server');
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var lintSrc = ['<%= config.test %>/**/*.js'];

    grunt.initConfig({
      config: {
        angularDebug: false,
        buildTimestamp: new Date().getTime(),
        frontend: 'src/main/frontend',
        test: 'src/test/frontend',
        generated: 'target/classes/assets',
        temp: '.tmp'
      },
      configure_override: {
        build: {
          config: {
            angularDebug: false
          }
        },
        develop: {
          config: {
            angularDebug: true
          }
        }
      },
      clean: {
        build: [
          '<%= config.generated %>'
        ],
        temp: [
          '<%= config.temp %>'
        ]
      },
      copy: {
        build: {
          expand: true,
          cwd: '<%= config.frontend %>',
          src: [
            '**/*.{html,ttf,woff,woff2,png,gif,jpg,ico}',
            '!lib/**',
            'brain.client.js'
          ],
          dest: '<%= config.generated %>'
        },
        develop: {
          expand: true,
          cwd: '<%= config.frontend %>',
          src: [
            '**/*.{html,css,ttf,woff,woff2,png,gif,jpg,ico}',
            '!lib/*',
            'lib/**/*.{js,css,ttf,woff,woff2}',
            '!lib/**/test/*',
            'brain.client.js'
          ],
          dest: '<%= config.generated %>'
        }
      },
      eslint: {
        target: lintSrc
      },
      template: {
        options: {
          data: function() {
            return grunt.config.get();
          }
        },
        build: {
          expand: true,
          cwd: '<%= config.generated %>',
          src: ['**/index.html', 'css/style-scss.*.css', 'brain.client.js'],
          dest: '<%= config.generated %>'
        },
        dev: {
          expand: true,
          cwd: '<%= config.generated %>',
          src: ['**/index.html', 'scss/scss.css', 'brain.client.js'],
          dest: '<%= config.generated %>'
        }
      },
      watch: {
        options: {
          cwd: '<%= config.frontend %>'
        },
        assets: {
          files: [
            '**/*.{html,css,eot,svg,ttf,woff,png,gif,jpg}'
          ],
          tasks: [
            'configure_override:develop',
            'copy:develop',
            'template:dev'
          ]
        }
      },
      focus: {
        dev: {
          include: ['assets']
        }
      },
      exec: {
        'webpack': webpackCmd,
        'webpack-prod': {
          // -p for production - adds uglify and sets NODE_ENV in application sources (not in webpack config itself)
          cmd: webpackCmd + ' -p --env.production',
          options: {
            env: Object.assign({
              // set NODE_ENV in the webpack and eslint configs
              NODE_ENV: 'production'
            }, process.env)
          }
        },
        'webpack-watch': webpackDevServerCmd,
        'webpack-watch-brain': webpackDevServerCmd + ' --env.brainOnly',
        'webpack-watch-gallery': webpackDevServerCmd + ' --config webpack.config.gallery.js',
        'webpack-brain-test': webpackCmd + ' --config webpack.config.brain-test.js',
        'webpack-watch-brain-test': webpackDevServerCmd + ' --config webpack.config.brain-test.js'
      },
      concurrent: {
        options: {
          logConcurrentOutput: true
        },
        watch: {
          tasks: ['focus:dev', 'exec:webpack-watch']
        },
        watchBrain: {
          tasks: ['focus:dev', 'exec:webpack-watch-brain']
        },
        watchGallery: {
          tasks: ['focus:dev', 'exec:webpack-watch-gallery']
        }
      },
      jasmine: {
        brain: {
          options: {
            specs: '<%= config.generated %>/test-bundle.js',
            junit: {
              path: 'target/jasmine-reports'
            }
          }
        }
      }
    });

    grunt.task.registerMultiTask('configure_override', 'Set configuration for Grunt task', function() {
      grunt.config.merge(this.data);
    });

    grunt.registerTask('build', [
      'configure_override:build',

      'eslint',
      'clean',
      'exec:webpack',
      'copy:build',
      'template:build',
      'clean:temp'
    ]);

    grunt.registerTask('build-prod', [
      'configure_override:build',

      'eslint',
      'clean',
      'exec:webpack-prod',
      'copy:build',
      'template:build',
      'clean:temp'
    ]);

    grunt.registerTask('deploy', [
      'build',

      'clean:temp'
    ]);

    grunt.registerTask('m2e', [
      'configure_override:develop',

      'clean:temp',
      'exec:webpack',
      'copy:develop',
      'template:dev',
      'clean:temp'
    ]);

    grunt.registerTask('m2e-ui-dev', [
      'configure_override:develop',

      'clean:temp',
      'copy:develop',
      'template:dev',
      'clean:temp'
    ]);

    grunt.registerTask('develop-all', [
      'configure_override:develop',

      'eslint',
      'clean:temp',
      'copy:develop',
      'template:dev',
      'concurrent:watch',
      'clean:temp'
    ]);

    grunt.registerTask('develop-brain', [
      'configure_override:develop',

      'eslint',
      'clean:temp',
      'copy:develop',
      'template:dev',
      'concurrent:watchBrain',
      'clean:temp'
    ]);

    grunt.registerTask('gallery', [
      'concurrent:watchGallery'
    ]);

    grunt.registerTask('default', ['develop-brain']);

    grunt.registerTask('test', ['exec:webpack-brain-test', 'jasmine']);
    grunt.registerTask('bdd', ['exec:webpack-watch-brain-test']);
  };
}());
