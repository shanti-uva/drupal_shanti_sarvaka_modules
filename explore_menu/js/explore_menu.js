(function ($) {
  Drupal.behaviors.exploreMenu = {
    attach: function (context, settings) {
     if(context == document) {
	     $('body').on('click', '.explore>a, .collections .close', function(e){
					$(".collections").slideToggle(200);
				});
			}
    }
  };
})(jQuery);