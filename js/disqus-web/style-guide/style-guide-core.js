function headerNav() {
	$(window).scroll(function () {
		var scrollPosition = $(document).scrollTop();
		var header = $(".global-nav");
		if ( scrollPosition > 0 ) {
			header.addClass("short");
		} else {
			header.removeClass("short");
		}
	})
}

$(document).ready(function() {
	prettyPrint();
	headerNav();
});