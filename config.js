/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import iqModalModule from './styles/iq-modal/module';
import iqFormLayoutModule from './styles/iq-form-layout/module';

export default angular.module('config', [iqFormLayoutModule.name, iqModalModule.name])
    .constant('layoutConfig', {
      'page layout': 'styles/page-layout.html',
      'iq-tile': 'styles/iq-tile.html',
      'iq-pull-right': 'styles/iq-pull-right.html',
      'iq-scrollable': 'styles/iq-scrollable.html',
      'iq-grid': 'styles/iq-grid.html',
      'iq-theme-dark': 'styles/iq-theme-dark.html'
    })

    .constant('widgetsConfig', {
      'iq-button': 'styles/iq-btn.html',
      'iq-nav-pills': 'styles/iq-nav-pills.html',
      'iq-dropdown': 'styles/iq-dropdown.html',
      'iq-alerts': 'styles/iq-alerts.html',
      'iq-modal': 'styles/iq-modal/iq-modal.html',
      'iq-read-only': 'styles/iq-read-only.html',
      'iq-tree-view': 'styles/iq-tree-view.html',
      'iq-list': 'styles/iq-list.html',
      'iq-list--clickable': 'styles/iq-list--clickable.html',
      'iq-threat-indicators': 'styles/iq-threat-indicators.html',
      'iq-counter': 'styles/iq-counter.html',
      'iq-text-indicators': 'styles/iq-text-indicators.html',
      'iq-threat-bar': 'styles/iq-threat-bar.html'
    })

    .constant('htmlConfig', {
      'iq-table': 'styles/iq-table.html',
      'iq-text-input': 'styles/iq-form-text-input.html',
      'iq-textarea': 'styles/iq-form-textarea.html',
      'iq-form-layout': 'styles/iq-form-layout/iq-form-layout.html'
    });
