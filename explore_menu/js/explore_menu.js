(function ($) {
  Drupal.behaviors.exploreMenu = {
    attach: function (context, settings) {
     if(context == document) {
				$(".explore>a").click(function(e){
						$(".collections").slideToggle(400);
				});
			}
    }
  };
})(jQuery);