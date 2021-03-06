$(document).ready(function () {
	// social icon top config
	$('.social-top li').hover(
	function(){		
		$('.social-top li.active').removeClass('active');
		$(this).addClass('active');
	},function(){				
	});
	$('#searchForm').hover(function(){
		$('.input-search').css({'display':'inline-block'});		
	},
	function(){
		$('.input-search').hide();	
	});
	// Sequence slider show config
	var $sequence = $("#sequence"); 
	if($sequence.length) {
		var options = {
			autoPlayDelay: 5000,
			pauseOnHover: true,
			nextButton: true,
			prevButton: true,
			preloader: true,
			animateStartingFrameIn: true,    
			navigationSkipThreshold: 750
		};    
		$sequence.sequence(options).data("sequence");   
		$sequence.afterLoaded = function() {
			$(".prev, .next").fadeIn(500);
		}
	}
	// end sequence slider config
	
	// begin iview slider
	if($('#iview').length){
		$('#iview').iView({
			pauseTime: 7000,
			pauseOnHover: true,
			directionNavHoverOpacity: 0,
			timer: "none",
			timerDiameter: "50%",
			timerPadding: 0,
			timerStroke: 7,
			timerBarStroke: 0,
			timerColor: "#FFF",
			timerPosition: "bottom-right",
			controlNav: true,
			controlNavThumbs: true
		});
	}
	// end iview slider
	// main-slider
	if($('.main-slider').length){
		$('.main-slider').flexslider({
			animation: "slide"
		});
	}
	/**
	 * Quick sand plugin
	 */
	if($('#clients-flexslider').length){
		$('#clients-flexslider').flexslider({
				animation: "slide",
				easing: "swing",
				animationLoop: true,
				itemWidth: 1,
				itemMargin: 1,
				minItems: 2,
				maxItems: 9,
				controlNav: false,
				directionNav: false,
				move: 1
		});
	}
    if (jQuery().quicksand) {

		//Portfolio page
        var $data = $(".portfolio-area").clone();
        $('.nav-order li').click(function (e) {
            $(".nav-order li").removeClass("active");
            var filterClass = $(this).attr('class').split(' ').slice(-1)[0];

            if (filterClass == 'all') {
                var $filteredData = $data.find('.portfolio-item');
            } else {
                var $filteredData = $data.find('.portfolio-item[data-type=' + filterClass + ']');
            }
            $(".portfolio-area").quicksand($filteredData, {
                duration: 600,
                adjustHeight: 'auto'
            });
            $(this).addClass("active");
            return false;
        });		
    }//if quicksand		
	
	/**
	 * Google Maps	
	 */	
	(function() {
		var $map = $('#gmap');
		if( $map.length ) {
			$map.gMap({
				address: '677 Tan Son Street, Go Vap District, Ho Chi Minh City, VN',
				zoom: 16,
				markers: [
					{ 'address' : '677 Tan Son Street, Go Vap District, Ho Chi Minh City, VN' }
				]
			});
		}
	})();
	
	var $serviceList=$('#service-list');
	if($serviceList.length){
		var itemCount=3;
		if($(window).width()<854 && $(window).width()>603){
			itemCount=2;
		}
		if($(window).width()<481){
			itemCount=2;
		}
		if($(window).width()<361){
			itemCount=1;
		}
		$serviceList.carouFredSel({
			auto: false,			
			items: itemCount,
			prev    : {	
				button  : "#service_prev",
				key     : "left"
			},
			next    : {
				button  : "#service_next",
				key     : "right"
			}
		});
	}
	/**
	 * masonry for testimonial page
	 */
	if($('.testimonials').length){
		$('.testimonials').masonry({
			itemSelector: '.testimonial-item'
		});
	}
		
    $('.sort li').click(function (e) {
        $(".sort li").removeClass("active");
        $(this).addClass("active");
        return false;
    });	
	
	$('.accordion-group a').click(function(){
		$('.accordion-group a').each(function(){
			$(this).removeClass('active');			
		});
		$(this).addClass('active');
		
		if($(this).find('i').is(".icon-minus")) {
			 $(this).find('i').removeClass('icon-minus').addClass('icon-plus');
		}else{
			$(this).parents(".accordion").find('i').removeClass('icon-minus').addClass('icon-plus');
			$(this).find('i').removeClass('icon-plus').addClass('icon-minus');
		}
	 });
	 
	if (navigator.userAgent.indexOf('iPad', 'iPhone', 'iPod', 'Android', 'BlackBerry') == -1) {

		$(".backToTop").hide();

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.backToTop').fadeIn();
			} else {
				$('.backToTop').fadeOut();
			}
		});

		$('.backToTop').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});

	}

	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad|Android|BlackBerry)/);
	if (agentID) {
		$('.backToTop').css({
			"position": "relative",
			"clear": "both",
			"margin": "0 auto",
			"width": "100%",
			"right": "auto",
			"bottom": "auto"
		});
		$('.backToTop a').css({
			"width": "100%",
			"-border-radius": "0px",
			"-webkit-border-radius": "0px"
		});

	}
	 
	/**
	  * Flexslider
	*/
	
		
	// Slider for portfolio detail page
	if($('.portfolio-slider').length){
		$('.portfolio-slider').flexslider();
	}
	// Flex Slider for blog page
	if($('.blog-slider').length){
		$('.blog-slider').flexslider();
	}	
	$('input, textarea').placeholder();
});