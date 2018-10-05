/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import template from './itemTitle.html';

var itemTitleComponent = {
  selector: 'itemTitle',
  template: template,
  controller: function($state) {
    this.name = $state.current.name;
  },
  controllerAs: 'vm'
};

export default itemTitleComponent;
