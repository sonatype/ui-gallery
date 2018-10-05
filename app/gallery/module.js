/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import navigationModule from './navigation/module';

import gallery from './gallery';
import pageWrapper from './pageWrapper/pageWrapper';
import itemTitle from './itemTitle/itemTitle';
import itemDescription from './itemDescription/itemDescription';
import itemExampleHtmlDirective from './itemExampleHtmlDirective/itemExampleHtmlDirective';

export default angular.module('gallery', [navigationModule.name])
    .component(gallery.selector, gallery)
    .component(pageWrapper.selector, pageWrapper)
    .component(itemTitle.selector, itemTitle)
    .component(itemDescription.selector, itemDescription)
    .directive(itemExampleHtmlDirective.selector, itemExampleHtmlDirective);
