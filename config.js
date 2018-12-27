/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import iqModalModule from './styles/iq-modal/module';
import iqFormLayoutModule from './styles/nx-form-layout/module';

export default angular.module('config', [iqFormLayoutModule.name, iqModalModule.name])
    .constant('userGuideConfig', {
      'How to add a page': 'user-guide/how-to-add-a-page.html',
      'BEM': 'user-guide/bem.html',
      'NX Namespace': 'user-guide/nx-namespace.html',
      'Code Styles': 'user-guide/code-style.html'
    })
    
    .constant('layoutConfig', {
      'page layout': 'styles/page-layout.html',
      'tiles': 'styles/nx-tile.html',
      'pull-right': 'styles/nx-pull-right.html',
      'scrolling block': 'styles/nx-scrollable.html',
      'grid': 'styles/nx-grid.html',
      'nx-theme-dark': 'styles/nx-theme-dark.html'
    })

    .constant('widgetsConfig', {
      'alerts': 'styles/nx-alerts.html',
      'buttons': 'styles/nx-btn.html',
      'counters': 'styles/nx-counter.html',
      'lists': 'styles/nx-list.html',
      'clickable lists': 'styles/nx-list--clickable.html',
      'nav pills': 'styles/nx-nav-pills.html',
      //'iq-dropdown': 'styles/iq-dropdown.html',
      // 'iq-modal': 'styles/iq-modal/iq-modal.html',
      'pagination': 'styles/nx-pagination.html',
      'read-only': 'styles/nx-read-only.html',
      'tabs': 'styles/nx-tabs.html',
      'text indicators': 'styles/nx-text-indicators.html',
      'threat bars': 'styles/nx-threat-bar.html',
      'threat indicators': 'styles/nx-threat-indicators.html',
      'tree-views': 'styles/nx-tree-view.html'
    })

    .constant('htmlConfig', {
      'tables': 'styles/nx-table.html',
      'input - text': 'styles/nx-form-text-input.html',
      'textarea': 'styles/nx-form-textarea.html',
      'form layout': 'styles/nx-form-layout/nx-form-layout.html'
    })
    
    .constant('presentationConfig', {
      'What': 'presentation/what.html',
      'Why': 'presentation/why.html',
      'Who': 'presentation/who.html',
      'When': 'presentation/when.html',
      'Where': 'presentation/where.html'
    });
