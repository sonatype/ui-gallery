/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */

import 'components-font-awesome/css/font-awesome.min.css';
import 'highlight.js/styles/github.css';
import './scss/gallery.scss';

import 'angular';
import '@uirouter/angularjs';
import '@uirouter/angularjs/release/stateEvents';
import 'angular-sanitize';
import 'angular-vs-repeat';
import 'angular-highlightjs';
import 'angular-marked';
import 'angular-aria';
import hljs from 'highlight.js';

import galleryModule from './gallery/module';
import configModule from '../config';

var module = angular.module('galleryApp',
    [
      'ui.router', 'ui.router.state.events', 'hljs', 'hc.marked', galleryModule.name, configModule.name
    ]);

module.config(function($stateProvider, $urlRouterProvider, markedProvider, hljsServiceProvider, layoutConfig, widgetsConfig, htmlConfig)
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
