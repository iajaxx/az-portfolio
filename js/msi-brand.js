$( document ).ready(function() {
    
    $( ".mobile-menu-open" ).click(function() {
          $(".primary-nav").slideDown();
          $(".mobile-menu-open").hide();
          $(".mobile-menu-close").show();
    });
    
    $( ".mobile-menu-close").click(function() {
          $(".primary-nav").slideUp();
          $(".mobile-menu-open").show();
          $(".mobile-menu-close").hide();
    });
    
    var currentWindowWidth = $(window).width();
    if (currentWindowWidth > 1024) {
        $(".primary-nav").show();
        $(".mobile-menu-open").hide();
        $(".mobile-menu-close").hide();
    } else {
        $(".primary-nav").hide();
        $(".mobile-menu-open").show();  
        $(".mobile-menu-close").hide();
    }
});

$(window).resize(function() {
    var currentWindowWidth = $(window).width();
    
    if (currentWindowWidth > 1040) {
          $(".primary-nav").show();
          $(".mobile-menu-open").hide();
          $(".mobile-menu-close").hide();
      } else if (currentWindowWidth < 1040) {
          $(".primary-nav").hide();
          $(".mobile-menu-open").show();
          $(".mobile-menu-close").hide();
      }    
});