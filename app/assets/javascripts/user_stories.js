(function($) {
  "use strict";

  $.getJSON("https://spreadsheets.google.com/feeds/list/1JWfWWk-M3BrOcnGpDw_yk3j4c6RSMxoDv1cGyfJO-zI/od6/public/values?alt=json", function(data) {

    console.log(data.feed.entry);
    $.each(data.feed.entry, function(ind, item) {
      console.log("as a " + item['gsx$asa']['$t'], " i need to " + item['gsx$ineedto']['$t'], "so that " + item['gsx$sothat']['$t'], "\n");
    });
  });

}(jQuery));