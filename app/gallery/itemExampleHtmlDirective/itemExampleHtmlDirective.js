/*
 * Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
 * Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
function itemExampleHtmlDirective() {
  return {
    restrict: 'E',
    scope: true,
    compile: function(element) {

      var staticHTML = element[0].innerHTML;

      element.html(`
        <div class="nx-tile">
          <div class="nx-tile-header">
            <div class="nx-tile-header__title">
              <h2>{{title}}</h2>
            </div>
          </div>
          <div class="nx-tile-content">
            ${staticHTML}
            <div hljs hljs-source="code"></div>
          </div>
        </div>`);

      return function postLink(scope, elm, attrs) {
        scope.code = staticHTML.replace(/^(\r\n|\r|\n)|=""|\s+$/g, '');
        scope.title = attrs.title || 'Example';
      };
    }
  };
}

itemExampleHtmlDirective.selector = 'itemExampleHtml';

export default itemExampleHtmlDirective;
