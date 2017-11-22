jQuery(function ($) {

    'use strict';
	
	// ----------------------------------------------
    // Table of index
    // ----------------------------------------------

    /*-----------------------------------------------
    # Mobile Toggle Control
    # Menu Scrolling
    # Slider images Source
    # Parallax Scrolling
    # Portfolio Filter
    # Style Chooser
    # Google Map Customization
    -------------------------------------------------*/
		
	/*==============================================================*/
	//Mobile Toggle Control
	/*==============================================================*/
	 $(function(){ 
		 var navMain = $("#main-menu");

		 navMain.on("click", "a", null, function () {
			 navMain.collapse('hide');
		 });
	 });
	 	
	// ----------------------------------------------
    // Menu add class
    // ----------------------------------------------
	function menuToggle()
	{
		var windowWidth = $(window).width();

		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>730 ){
					$('.navbar').addClass('navbar-fixed-top');
				} else {
					$('.navbar').removeClass('navbar-fixed-top');
				}
			});
		}				
	}

	menuToggle();
	
	// ----------------------------------------------
    // Slider images Source
    // ----------------------------------------------	
	(function () {
		$('#main-slider-wrapper #slider-section').vegas({
			slides: [
				{ src: 'images/slider/1.jpg' },
				{ src: 'images/slider/2.jpg' },
				{ src: 'images/slider/3.jpg' },
			]
		});
	}());
	
	
	// ----------------------------------------------
    // Overview tooltip
    // ----------------------------------------------
	$(function () {
	  $('.overview-pointer li div').tooltip()
	})
	
	// ----------------------------------------------
    // owlCarousel
    // ----------------------------------------------
	
	
	$("#screenshot-slider").owlCarousel({ 
		autoPlay: 4000, //Set AutoPlay to 4 seconds	 
		items : 4,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3],
		itemsTablet : [768,2],
		itemsMobile	: [479,1],
		pagination	: true,
	});
  
	$("#review-slider").owlCarousel({ 
		autoPlay: 3000, //Set AutoPlay to 4 seconds	 
		items : 2,
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [979,2],
		itemsTablet : [768,2],
		itemsMobile	: [479,1],
		pagination	: false,
		navigation:true,
		navigationText: [
		  "<i class='fa fa-angle-left '></i>",
		  "<i class='fa fa-angle-right'></i>"
		],
	});
  
	

	// ----------------------------------------------
    // Menu Scrolling
    // ----------------------------------------------
	$('#navigation .navbar-nav').onePageNav({
		currentClass: 'active',
		filter: ':not(.exclude)',
	});
	
	// ----------------------------------------------
    // Parallax Scrolling
    // ----------------------------------------------
	
	(function () {
		function parallaxInit() {				
			$("#description").parallax("50%", 0.3);
			$("#pricing-section").parallax("50%", 0.3);
			$("#blue #choose-color").parallax("50%", 0.3);
		}	
		parallaxInit();
	}());
	
	
	// ----------------------------------------------
    // Tabs Slide
    // ----------------------------------------------
	(function () {
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {    
			var target = $(this).attr('href');  			  
			$(target).css('top','-'+$(window).width()+'px');   
			var top = $(target).offset().top;
			$(target).css({top:top}).animate({"top":"0px"}, "-20");
		})
	}());
	
	
	// ----------------------------------------------
    // Magnific Popup
    // ----------------------------------------------
	
	(function () {
		$('#photo-gallery .image-link').magnificPopup({
			gallery: {
			  enabled: true
			},
			type: 'image' 
		});
		$('.video-link').magnificPopup({type:'iframe'});
	}());
	
	
	
});

