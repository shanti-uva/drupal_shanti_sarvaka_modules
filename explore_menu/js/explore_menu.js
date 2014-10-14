(function ($) {
  Drupal.behaviors.exploreMenu = {
    attach: function (context, settings) {
     $('body').on('click', '.explore>a, .collections .close', function(){
				$(".collections").slideToggle(200);
			});
    }
  };
})(jQuery);