/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
function itemExampleHtmlDirective() {
  return {
    restrict: 'E',
    compile: function(element) {

      var staticHTML = element[0].innerHTML;

      element.html('<div class="iq-tile"><div class="iq-tile-header"><div class="iq-tile-header__title"><h2>Example</h2></div></div>' + staticHTML + '</div>');
      element.append('<div class="iq-tile"><div class="iq-tile-header"><div class="iq-tile-header__title"><h2>Code</h2></div></div><div hljs hljs-source="code"></div></div>');

      return function postLink(scope) {
        scope.code = staticHTML.replace(/^(\r\n|\r|\n)|=""|\s+$/g, '');
      };
    }
  };
}

itemExampleHtmlDirective.selector = 'itemExampleHtml';

export default itemExampleHtmlDirective;
