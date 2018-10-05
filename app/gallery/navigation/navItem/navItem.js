/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import template from './navItem.html';

var navItemComponent = {
  selector: 'navItem',
  template: template,
  controllerAs: 'vm',
  bindings: {
    state: '@'
  }
};

export default navItemComponent;
