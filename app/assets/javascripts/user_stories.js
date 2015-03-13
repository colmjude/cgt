(function($) {
  "use strict";

  var $user_needs_list = $('.user-stories');
  var colour_modifiers = [
    "user-story--pink",
    "user-story--blue",
    "user-story--red",
    "user-story--yellow",
    "user-story--green",
    "user-story--orange"
  ];

  // need to include here not in html because app engine strips out {{}}
  // when rendering
  var tmpl = ['<li class="user-story" data-scroll-index="{{index}}">',
    '<div class="user-story__content">',
      '<p><span class="user-story__entity">as a</span><span class="user-story__content--highlight">{{user}}<span></p>',
      '<p><span class="user-story__entity">i need</span><span class="user-story__content--highlight">{{need}}</span></p>',
      '<p><span class="user-story__entity">so that</span><span class="user-story__content--highlight">{{sothat}}</span></p>',
    '</div>',
    '<aside class="slide-footer">',
      '<div class="slide-footer__name"><p>cross-government-tools</p></div>',
      '<div class="slide-footer__org">',
        '<h2 class="organisation-logo">',
              '<p><a href="/government/organisations/cabinet-office">Cabinet Office</a></p>',
              '<p>Government digital service</p>',
        '</h2>',
      '</div>',
    '</aside>',
  '</li>'].join('\n');

  var def = [];
  $.getJSON("https://spreadsheets.google.com/feeds/list/1JWfWWk-M3BrOcnGpDw_yk3j4c6RSMxoDv1cGyfJO-zI/od6/public/values?alt=json", function(data) {

    $.each(data.feed.entry, function(ind, item) {
      def.push(renderNeed(ind, item));
    });

  });

  $.when.apply($, def).done(function() { bindScroll() });

  function bindScroll() {
    $.scrollIt({
            upKey: 38,             // key code to navigate to the next section
            downKey: 40,           // key code to navigate to the previous section
            easing: 'linear',      // the easing function for animation
            scrollTime: 600,       // how long (in ms) the animation takes
            activeClass: 'active', // class given to the active nav element
            onPageChange: null,    // function(pageIndex) that is called when page is changed
            topOffset: 0           // offste (in px) for fixed top navigation
          });
  }

  function renderNeed(ind, item) {
    var needdata = {
      index: ind,
      user: item['gsx$asa']['$t'],
      need: item['gsx$ineedto']['$t'],
      sothat: item['gsx$sothat']['$t']
    };

    $(Mustache.to_html(tmpl, needdata))
      .addClass( colour_modifiers[Math.floor(Math.random()*colour_modifiers.length)] )
      .appendTo( $user_needs_list );
  }

}(jQuery));