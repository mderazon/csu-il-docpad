
if (window.location.pathname === '/search-results') {
  var Swiftype = window.Swiftype || {};
  (function() {
   Swiftype.key = 'FbKv4mDi54Z5vEeYzz8i';
   Swiftype.inputElement = '#st-search-input';
   Swiftype.resultContainingElement = '#st-results-container';
   Swiftype.attachElement = '#st-search-input';
   Swiftype.renderStyle = "inline";

   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.async = true;
   script.src = "//swiftype.com/embed.js";
   var entry = document.getElementsByTagName('script')[0];
   entry.parentNode.insertBefore(script, entry);
}());
} else {
  var Swiftype = window.Swiftype || {};
  (function() {
    Swiftype.key = 'FbKv4mDi54Z5vEeYzz8i';
    Swiftype.inputElement = '#st-search-input';
    Swiftype.resultContainingElement = '#st-results-container';
    Swiftype.attachElement = '#st-search-input';
    Swiftype.renderStyle = "new_page";

    Swiftype.resultPageURL = '/search-results';
    
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = "//swiftype.com/embed.js";
    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);
  }());
   
}


