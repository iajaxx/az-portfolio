function pageSwap() {
	if ($(".page-calls").is(":hidden")) {
			$(".page-link").html("<img src='img/structure/page-calls-close.png'>");
			$(".page-calls").show();
			$(".page").hide(); 
			} else {
			$(".page-link").html("<img src='img/structure/page-calls.png'>");
			$(".page-calls").hide();	
			$(".page").show();
	}
}