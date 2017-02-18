$(document).ready(function(e) {
	
		$('.logo_mobile_menu').on('click', function(){
			var hamIcon = $(this).find('i');
			
			if (hamIcon.hasClass('fa fa-bars') ){
				hamIcon.removeClass('fa fa-bars').addClass('fa fa-times');
				} else {
					hamIcon.removeClass('fa fa-times').addClass('fa fa-bars');
				}
				
			$('.header_level2 ul').toggleClass("open");
		});
	  
});