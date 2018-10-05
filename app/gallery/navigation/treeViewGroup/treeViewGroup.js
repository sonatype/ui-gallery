/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import template from './treeViewGroup.html';

var treeViewGroupComponent = {
  selector: 'treeViewGroup',
  template: template,
  transclude: true,
  controllerAs: 'vm',
  bindings: {
    name: '@'
  }
};

export default treeViewGroupComponent;
