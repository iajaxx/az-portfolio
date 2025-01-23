// Window Open
function openWindow(url,w,h) {
	window.open(url,"_blank","toolbar=yes, scrollbars=yes, resizable=yes, left=200, width=" + w + ", height=" + h);
}

// Show / Hide Content
function showHide(id1,id2,effect1,effect2) {
	$("#" + id1).fadeOut(500);
	$("#" + id2).delay(500).fadeIn(500);
}

function slideReveal(id) {
	if ($("#" + id).is(":visible")) {
		$("#" + id).slideUp();
	} else {
		$("#" + id).slideDown();
	}
}

function followUser(id) {
	if ($("#" + id).html() == "Follow") {
		$("#" + id).html("Unfollow");	
	} else {
		$("#" + id).html("Follow");	
	}
}

// Hover Touch Fix - Specified Links
$(document).ready(function() {
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    	$("a.hover-touch").each(function() {  var oC; var fC = function() { $("a").trigger("rH"); oC = sC; return false; };
    	sC = function() { oC = fC; return true; };
    	oC = fC;
    	$(this).click(function() { return oC(); });
    	$(this).bind('rH', function(){ oC = fC; }); });
	}
});

// Hover Touch Fix - Mega Menu Links
$('.navigation li:has(ul)').hover(function(){ $(this).find('ul').fadeIn(); }, function(){ $(this).find('ul').hide(); });

// Primary Navigation Functions
$(document).ready(function() {
var sTxt;
$(".primarynav-search-field").focus(function(){
  sTxt = $(".primarynav-search-field").val();
  if(sTxt == "") { $(".primarynav-search ul").hide(); } else { $(".primarynav-search ul").show(); }
});
$(".primarynav-search-field").keypress(function(){
  $(".primarynav-search ul").show();
});
$(".primarynav-search-field").blur(function(){
  sTxt = $(".primarynav-search-field").val();
  $(".primarynav-search ul").hide();
});
});

// Social Elements
var lang = $('meta[name=Content-Locale]');
if(typeof lang[0] === "undefined") 
	lang = "en";
else
	lang = lang.attr('content').split('-')[1].toLowerCase();//
// Twitter
$(document).ready(function() {
 !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
});

// Facebook
var facebookLocale = (typeof fbLocale =="undefined")?'en_US': fbLocale;
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/"+facebookLocale+"/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Google +
 window.___gcfg = {
    lang: lang
  };//
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

// Brandstory (Home Page)
$(document).ready(function() {
	if ($("#brandstory-home-container").length) {
	// Frames
	var fT;
	var w = 200;
		
	// Hidden Frames
	$(".brandstory-home-frame-activate-1").hover(function(){fT = setTimeout('mFrames(539,340,352,193,0,225,242,474,128,0,174,142,544,128,201,111,0,0,0,0,0,0)', w);},rF);
	$(".brandstory-home-frame-activate-2").hover(function(){fT = setTimeout('mFrames(539,202,352,103,0,193,242,506,266,0,174,94,544,266,201,111,0,0,0,1,0,0)', w);},rF);
	$(".brandstory-home-frame-activate-3").hover(function(){fT = setTimeout('mFrames(539,340,352,193,0,225,242,474,128,0,174,142,544,128,201,111,0,0,0,0,0,0)', w);},rF);
	$(".brandstory-home-frame-activate-4").hover(function(){fT = setTimeout('mFrames(616,387,327,193,0,225,242,474,81,0,97,142,621,128,201,64,1,0,0,0,0,0)', w);},rF);
	$(".brandstory-home-frame-activate-5").hover(function(){fT = setTimeout('mFrames(539,340,352,193,0,225,242,474,128,0,174,142,544,128,201,111,0,0,0,0,0,0)', w);},rF);
	$(".brandstory-home-frame-activate-6").hover(function(){fT = setTimeout('mFrames(616,387,327,193,0,225,242,474,81,0,97,142,621,128,201,64,1,0,0,0,0,0)', w);},rF);
	$(".brandstory-home-frame-activate-7").hover(function(){fT = setTimeout('mFrames(490,340,402,310,0,225,125,474,75,0,174,78,544,75,201,111,0,1,0,0,0,0)', w);},rF);
	$(".brandstory-home-frame-activate-8").hover(function(){fT = setTimeout('mFrames(616,387,327,193,0,225,242,474,81,0,97,142,621,128,201,64,1,0,0,0,0,0)', w);},rF);
	$(".brandstory-home-frame-activate-9").hover(function(){fT = setTimeout('mFrames(490,340,402,310,0,225,125,474,75,0,174,78,544,75,201,111,0,1,0,0,0,0)', w);},rF);
		
	// Frames
	$(".brandstory-home-frame-1").hover(function(){fT = setTimeout('mFrames(616,387,327,193,0,225,242,474,81,0,97,142,621,128,201,64,1,0,0,0,0,0)', w);},rF);
	$(".brandstory-home-frame-2").hover(function(){fT = setTimeout('mFrames(490,340,402,310,0,225,125,474,75,0,174,78,544,75,201,111,0,1,0,0,0,0)', w);},rF);
	$(".brandstory-home-frame-3").hover(function(){fT = setTimeout('mFrames(539,340,352,57,0,342,378,357,128,0,57,142,544,128,201,111,0,0,1,0,0,0)', w);},rF);
	$(".brandstory-home-frame-4").hover(function(){fT = setTimeout('mFrames(539,202,352,103,0,193,242,506,266,0,174,94,544,266,201,111,0,0,0,1,0,0)', w);},rF);
	$(".brandstory-home-frame-5").hover(function(){fT = setTimeout('mFrames(370,340,352,87,169,225,242,474,87,0,343,289,375,87,201,111,0,0,0,0,1,0)', w);},rF);
	$(".brandstory-home-frame-6").hover(function(){fT = setTimeout('mFrames(539,171,352,193,0,225,242,333,128,141,174,142,544,128,342,280,0,0,0,0,0,1)', w);},rF);
		
	// Reset Frames
	$(".brandstory-home-container").mouseleave(function() {mFrames(539,340,352,193,0,225,242,474,128,0,174,142,544,128,201,111,0,0,0,0,0,0);});
	}
	
	function rF() { clearTimeout(fT); }
});
function mFrames(w1,h1,w2,h2,ml2,w3,h3,w4,h4,ml4,w5,h5,ax5,ay5,w6,h6,o1,o2,o3,o4,o5,o6) {
		// Vars
		var e = 'easeOutExpo';
		var d = 500;
		var aT;
		
		// Adjust Dimensions
		$(".brandstory-home-frame-1").animate({"width": w1+"px", "height": h1+"px"},{duration: d, easing: e});
		$(".brandstory-home-frame-2").animate({"width": w2+"px", "height": h2+"px", "margin-left": ml2+"px"},{duration: d, easing: e});
		$(".brandstory-home-frame-3").animate({"width": w3+"px", "height": h3+"px"},{duration: d, easing: e});
		$(".brandstory-home-frame-4").animate({"width": w4+"px", "height": h4+"px", "margin-left": ml4+"px"},{duration: d, easing: e});
		$(".brandstory-home-frame-5").animate({"width": w5+"px", "height": h5+"px", "left": ax5+"px", "bottom": ay5+"px"},{duration: d, easing: e});
		$(".brandstory-home-frame-6").animate({"width": w6+"px", "height": h6+"px"},{duration: d, easing: e});
		
		// Adjust Options Area
		if(o1==1){$(".brandstory-home-cta-options-1").slideDown({duration: d, easing: e});}else{ $(".brandstory-home-cta-options-1").slideUp({duration: d, easing: e});}
		if(o2==1){$(".brandstory-home-cta-options-2").slideDown({duration: d, easing: e});}else{ $(".brandstory-home-cta-options-2").slideUp({duration: d, easing: e});}
		if(o3==1){$(".brandstory-home-cta-options-3").slideDown({duration: d, easing: e});}else{ $(".brandstory-home-cta-options-3").slideUp({duration: d, easing: e});}
		if(o4==1){$(".brandstory-home-cta-options-4").slideDown({duration: d, easing: e});}else{ $(".brandstory-home-cta-options-4").slideUp({duration: d, easing: e});}
		if(o5==1){$(".brandstory-home-cta-options-5").slideDown({duration: d, easing: e});}else{ $(".brandstory-home-cta-options-5").slideUp({duration: d, easing: e});}
		if(o6==1){$(".brandstory-home-cta-options-6").slideDown({duration: d, easing: e});}else{ $(".brandstory-home-cta-options-6").slideUp({duration: d, easing: e});}
		}

$(document).ready(function() {
	carosuelBrandstory();
	carosuelFeatured();
	carosuelEvents();
	carosuelNewsLanding();
	carosuelNewsHome();
});

function carosuelBrandstory() {
// Carousel - Brandstory (Landing Page)
if ($(".carousel-brandstory").length) {
	$(".carousel-brandstory").carouFredSel({
		items: "variable",
		circular: true,
		direction: "left",
	scroll : {
			fx	: "scroll"
		},
	auto : {
		onBefore: function(data) {
			var slideTitle = data.items.visible.first().find('img').attr('wttitle');
			dcsMultiTrack('WT.ti', 'Brandstory: '+ slideTitle, 'DCSext.action', 'Brandstory;' + slideTitle +';Home', 'WT.si_n',' Brandstory Link Selection','WT.si_x','3', 'WT.si_cs','','WT.dl','99','DCSext.linkname', slideTitle + ': Load', 'WT.nv','Brandstory');
		},
		timeoutDuration: 15000,
		pauseOnHover: true
	},
	pagination	: {
		container		: ".brandstory-landing-pagination",
		anchorBuilder   : false
	}
});

$(function(){
   	$(".brandstory-landing-pagination").click(function() {
        $('.carousel-brandstory').trigger('play',true);
    });
	// Add i To Each Pagination Object
    $('.brandstory-landing-pagination a').each(function(i) {
        $(this).addClass( 'itm'+i );
	// Add OnClick to Each Thumbnail
        $(this).click(function() {
            $('.carousel-brandstory').trigger('play',true);
            $('.carousel-brandstory').trigger( 'slideTo', [i, 0, true] );
            $('.carousel-brandstory').trigger('stop');
            return false;
        });
    });
});
}
}
// Carousel - Featured Items
function carosuelFeatured() {
if ($(".carousel-featured").length) {
$(".carousel-featured").carouFredSel({
		items: "variable",
		circular: false,
		infinite: true,
		direction: "left",
		scroll		: {
		fx	: "scroll"
		},
	auto : {
		timeoutDuration: 8000,
		pauseOnHover: true
	},
	prev: '.aside-box-featured-prev',
	next: '.aside-box-featured-next'
});
}
}
// Carousel - Events
function carosuelEvents() {
if ($(".carousel-events").length) {
$(".carousel-events").carouFredSel({
		items: "variable",
		circular: false,
		infinite: true,
		direction: "left",
		scroll		: {
		fx	: "scroll"
		},
	auto : {
		timeoutDuration: 8000,
		pauseOnHover: true
	},
	prev: '.aside-box-events-prev',
	next: '.aside-box-events-next'
});
}
}
// Carousel - Newsfeed (Landing Page)
function carosuelNewsLanding() {
if ($(".carousel-newsfeed").length) {
$(".carousel-newsfeed").carouFredSel({
		items: "variable",
		circular: true,
		direction: "up",
		scroll		: {
		fx	: "scroll"
		},
	auto : {
		timeoutDuration: 10000,
		pauseOnHover: true
	}
});
}
}

// Carousel - Newsfeed (Home)
function carosuelNewsHome() {
if ($(".carousel-home-newsfeed").length) {
$(".carousel-home-newsfeed").carouFredSel({
		circular: true,
		direction: "up",
		scroll		: {
		fx	: "scroll"
		},
	auto : {
		timeoutDuration: 10000,
		pauseOnHover: true
	}
});
}
}

// Document Ready Functions
$(document).ready(function() {
	
	// Lightbox Video Link Adjustments
	var vHref;
	var vTitle;
	var pTitle = (typeof pageName =="undefined")?document.title: pageName;
	
	if ($("#aside-box-video-list").length) { 
		$("#aside-box-video-list a").on("click", function() {
        vHref = $(this).prop('href').substring(49);
	    vTitle = $(this).prop('title');
    }); }
	
	// Lightbox
	$(document).ready(function(){
	$('.overlay').nivoLightbox({
		effect: 'fade',
		keyboardNav: true,
		clickOverlayToClose: true,
		onInit: function(){},
		beforeShowLightbox: function(){ if ($("#aside-box-video-list").length) { $(".vid-" + vHref).attr('href','../template-video-player/video-player.html?video=' + vHref + '&ptitle=' + pTitle + '&vtitle=' + vTitle); } },
		afterShowLightbox: function () { if ($("#aside-box-video-list").length) { $(".vid-" + vHref).attr('href','http://video.motorolasolutions.com/video.aspx/id/' + vHref); dcsMultiTrack('WT.ti', 'Video for ' + pTitle + ' for ' + vTitle + ' Load', 'DCSext.action', 'Video;' + pTitle + ';' + vTitle + ';1 - Load', 'WT.si_n','Video Completion Scenario','WT.si_x','1', 'WT.si_cs','','WT.dl','99','DCSext.linkname', vTitle ,'WT.nv','Video','WT.clip_ev','v','WT.clip_n',vTitle,'WT.clip_t','Video'); } },
    	afterHideLightbox: function(){ if ($("#aside-box-video-list").length) { dcsMultiTrack('WT.ti', 'Video for ' + pTitle + ' for ' + vTitle + ' Complete', 'DCSext.action', 'Video;' + pTitle + ';' + vTitle + ';2 - Complete', 'WT.si_n','Video Completion Scenario','WT.si_x','2', 'WT.si_cs','1','WT.dl','99','DCSext.linkname', vTitle ,'WT.nv','Video','WT.clip_ev','v','WT.clip_n',vTitle,'WT.clip_t','Video'); } },
		errorMessage: 'The requested content cannot be loaded. Please try again later.' 
	});
	});
	
	// Tooltip
	$(function() {
	$(".brandstory-landing-pagination").tooltip({ 
	content: function() { return $(this).prop('title'); },
	show: { effect: "fadeIn"},
	hide: { effect: "fadeOut"},
	position: {
		my: "right-15 bottom-8",
		at: "right top",
		using: function(position, feedback) { $(this).css(position); $("<div>").addClass("arrow").addClass(feedback.vertical).addClass(feedback.horizontal).appendTo(this); } }
	});
});

	if ($(".email-share-button").length) {
		$(".email-share-button").attr("href","mailto:%20?subject=Motorola Solutions - " + document.title + "&body=" + location.href);
	}
	 
	
	if ($("#tabinterface").length) {
		$(function() {
   			 $("#tabinterface").tabs();
 		});
	}
});
	
// Window Ready Functions
$(window).load(function() {
  	if ($("#carousel-first-brandstory").length) {
		var carouselLoadedTitle = $("#carousel-first-brandstory").attr('wttitle');
  		dcsMultiTrack('WT.ti', 'Brandstory: ' + carouselLoadedTitle, 'DCSext.action', 'Brandstory;' + carouselLoadedTitle +';Home', 'WT.si_n','Brandstory Link Selection','WT.si_x','3', 'WT.si_cs','','WT.dl','99','DCSext.linkname', carouselLoadedTitle + ': Load','WT.nv','Brandstory');
	}
});