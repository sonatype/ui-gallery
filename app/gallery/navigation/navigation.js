/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import template from './navigation.html';

var navigationComponent = {
  selector: 'navigation',
  template: template,
  controller: navigationController,
  controllerAs: 'vm'
};

function navigationController(componentsConfig, directivesConfig, layoutConfig, widgetsConfig, htmlConfig) {
  var vm = this;

  vm.components = Object.keys(componentsConfig);
  vm.directives = Object.keys(directivesConfig);
  vm.layout = Object.keys(layoutConfig);
  vm.widgets = Object.keys(widgetsConfig);
  vm.forms = Object.keys(htmlConfig);
}

export default navigationComponent;
