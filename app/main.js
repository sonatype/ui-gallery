/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */

import 'components-font-awesome/css/font-awesome.min.css';
import '../../frontend/lib/glyphicon/glyphicons.css';
import '../../frontend/lib/glyphicon/halflings.css';
import '../../frontend/lib/bootstrap.scss';
import '../../frontend/scss/scss.scss';
import 'highlight.js/styles/github.css';
import './scss/gallery.scss';

import 'es6-collections';
import '../../frontend/lib/jquery-loader';
import 'angular';
import '@uirouter/angularjs';
import '@uirouter/angularjs/release/stateEvents';
import 'angular-sanitize';
import 'angular-vs-repeat';
import 'angular-highlightjs';
import 'angular-marked';
import 'angular-aria';
import '../../frontend/utility/Polyfills';
import '../../frontend/lib/bootstrap-loader';
import Plottable from 'plottable';
import hljs from 'highlight.js';
import 'jquery-ui/ui/effect';

import galleryModule from './gallery/module';
import configModule from '../config';
import legacyConfigurationModule from '../../frontend/LegacyConfigurationModule';

var module = angular.module('galleryApp',
    [
      'ui.router', 'ui.router.state.events', 'hljs', 'hc.marked', galleryModule.name, configModule.name,
      legacyConfigurationModule.name
    ]);

module.config(function($stateProvider, $urlRouterProvider, markedProvider, hljsServiceProvider, componentsConfig,
                       directivesConfig, layoutConfig, widgetsConfig, htmlConfig)
{
  hljsServiceProvider.setOptions({
    languages: ['html', 'js']
  });

  markedProvider.setOptions({
    gfm: true,
    breaks: true,
    tables: true,
    highlight: function (code, lang) {
      if (lang) {
        return hljs.highlight(lang, code, true).value;
      } else {
        return hljs.highlightAuto(code).value;
      }
    }
  });

  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'app/home.html',
    data: {
      title: 'Gallery Home'
    }
  });

  // add configured states
  angular.forEach(componentsConfig, configureState);
  angular.forEach(directivesConfig, configureState);
  angular.forEach(layoutConfig, configureState);
  angular.forEach(widgetsConfig, configureState);
  angular.forEach(htmlConfig, configureState);

  function configureState(templateUrl, state) {
    $stateProvider.state(state, {
      url: '/' + state,
      template: '<page-wrapper page-url="' + templateUrl + '"></page-wrapper>'
    })
  }
});
