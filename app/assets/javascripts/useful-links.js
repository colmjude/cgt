(function($) {
  "use strict";

  var $nav_links = $(".useful-links-nav");

  $nav_links.on("click", "li", function() {
    var index = $( this ).data("links-ref");
    $(window).scrollTop( $( $("h2", ".rendered_markdown")[index] ).position().top );
    return false;
  });

}(jQuery));
