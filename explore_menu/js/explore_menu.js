(function ($) {
  Drupal.behaviors.exploreMenu = {
    attach: function (context, settings) {
     if(context == document) {
	     $(".explore>a").on("click", function(e){
					$(".collections").animate( { height:110px }, 'fast');
				});
			}
    }
  };
})(jQuery);