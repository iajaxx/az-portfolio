$( document ).ready(function() {
	
	// Open Mobile Menu Function
    $(".mobile-menu-open" ).click(function() {
          $(".primary-nav").slideDown();
          $(".mobile-menu-open").hide();
          $(".mobile-menu-close").show();
    });
    
	// Close Mobile Menu Function
    $(".mobile-menu-close").click(function() {
          $(".primary-nav").slideUp();
          $(".mobile-menu-open").show();
          $(".mobile-menu-close").hide();
    });
	
	// Current Window Orientation
	var o = window.orientation;
	checkWindowOrientation();
	
	// Current Window Width
	var w = $(window).width();
	
	// Fade Hero
	$(".hero-brandstory").delay(300).fadeIn(2000);
	
	$(".section-hero").backstretch([
    "http://www.motorolasolutionsbrand.com/wp-content/themes/moto5/img/hero-01.jpg",
    "http://www.motorolasolutionsbrand.com/wp-content/themes/moto5/img/hero-02.jpg",
	"http://www.motorolasolutionsbrand.com/wp-content/themes/moto5/img/hero-03.jpg",
	"http://www.motorolasolutionsbrand.com/wp-content/themes/moto5/img/hero-04.jpg",
	"http://www.motorolasolutionsbrand.com/wp-content/themes/moto5/img/hero-05.jpg",
	"http://www.motorolasolutionsbrand.com/wp-content/themes/moto5/img/hero-06.jpg"
  ], {
	  	fade: 750,
	  	duration: 5000});
	
});

jQuery(document).ready(function() {
				var offset = 220;
				var duration = 500;
				jQuery(window).scroll(function() {
					if (jQuery(this).scrollTop() > offset) {
						jQuery('.back-to-top').fadeIn(duration);
					} else {
						jQuery('.back-to-top').fadeOut(duration);
					}
				});
				
				jQuery('.back-to-top').click(function(event) {
					event.preventDefault();
					jQuery('html, body').animate({scrollTop: 0}, duration);
					return false;
				})
			});

// Listeners
window.addEventListener("orientationchange", function() {
	     checkWindowOrientation();
}, false);

$(window).resize(function() {
	var w = $(window).width();
   checkWindowOrientation(); 
});

// Main Functions
function checkWindowOrientation() {
	var o = window.orientation;
	var w = $(window).width();
if (o == 90 || o == -90 || w > 960) { // landscape
		if (w < 700) {
			showMobileNav();	
		} else {
			showPrimaryNav();
		}
	} else if (o == 0 || o == 180 || w < 960) { // portrait
		showMobileNav();
	}
}

function showPrimaryNav() {
	$(".primary-nav").show();
    $(".mobile-menu-open").hide();
    $(".mobile-menu-close").hide();	
}

function showMobileNav() {
	$(".primary-nav").hide();
    $(".mobile-menu-open").show();  
    $(".mobile-menu-close").hide();	
}