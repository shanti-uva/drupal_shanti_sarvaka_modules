(function ($) {
  Drupal.behaviors.exploreMenu = {
    attach: function (context, settings) {
     if(context == document) {
				$('.explore>a').on('click', function(){
						$(".collections").slideToggle(200);
				});
			}
    }
  };
})(jQuery);