/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import template from './pageWrapper.html';

var pageWrapperComponent =  {
  selector: 'pageWrapper',
  template: template,
  controllerAs: 'vm',
  bindings: {
    pageUrl: '@'
  }
};

export default pageWrapperComponent;
