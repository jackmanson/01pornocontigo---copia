(function($){
	$(document).ready(function(){
		$( ".st-sc-collapse" ).each(function(){
			$(this).accordion({
				animated: 'linear',
				heightStyle: 'content'
			});
		})
	});
})(jQuery);
