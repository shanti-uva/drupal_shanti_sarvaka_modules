(function ($) {
  Drupal.behaviors.exploreMenu = {
    attach: function (context, settings) {
     if(context == document) {
	       $(".explore>a").toggle(function(){
				    $(".collections").animate({height:125},200);
				  },function(){
				    $(".collections").animate({height:0},200);
				  });
			}
    }
  };
})(jQuery);