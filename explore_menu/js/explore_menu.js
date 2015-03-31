(function ($) {
  Drupal.behaviors.exploreMenu = {
    attach: function (context, settings) {
     if(context == document) {
	     $('.explore>a').bind('click', function(e){
					$('.collections').slideToggle(150);
				});
			}
    }
  };
})(jQuery);