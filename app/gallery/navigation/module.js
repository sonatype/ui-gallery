/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */

import navigation from './navigation';
import treeViewGroup from './treeViewGroup/treeViewGroup';
import navItem from './navItem/navItem';

export default angular.module('galleryNavigation', [])
    .component(navigation.selector, navigation)
    .component(treeViewGroup.selector, treeViewGroup)
    .component(navItem.selector, navItem);
