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
      'tiles': 'styles/nx-tile.html',
      'pull-right': 'styles/nx-pull-right.html',
      'scrolling block': 'styles/nx-scrollable.html',
      'iq-grid': 'styles/iq-grid.html'
    })

    .constant('widgetsConfig', {
      'buttons': 'styles/nx-btn.html',
      'nav pills': 'styles/iq-nav-pills.html',
      //'iq-dropdown': 'styles/iq-dropdown.html',
      'alerts': 'styles/nx-alerts.html',
      // 'iq-modal': 'styles/iq-modal/iq-modal.html',
      'read-only': 'styles/iq-read-only.html',
      'tree-views': 'styles/iq-tree-view.html',
      'lists': 'styles/nx-list.html',
      'clickable lists': 'styles/iq-list--clickable.html',
      'threat indicators': 'styles/iq-threat-indicators.html',
      'counters': 'styles/iq-counter.html',
      'text indicators': 'styles/iq-text-indicators.html',
      'threat bars': 'styles/iq-threat-bar.html',
      'pagination': 'styles/nx-pagination.html'
    })
    
    .constant('presentationConfig', {
      'What': 'presentation/what.html',
      'Why': 'presentation/why.html',
      'Who': 'presentation/who.html',
      'When': 'presentation/when.html',
      'Where': 'presentation/where.html'
    })
    
    .constant('userGuideConfig', {
      'BEM': 'user-guide/bem.html',
      'Code Styles': 'user-guide/code-style.html'
    })

    .constant('htmlConfig', {
      'tables': 'styles/nx-table.html',
      'input - text': 'styles/iq-form-text-input.html',
      'textarea': 'styles/iq-form-textarea.html',
      'form layout': 'styles/iq-form-layout/iq-form-layout.html'
    });
