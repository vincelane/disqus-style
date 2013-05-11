//disqus-core.js

// Sets some Sidebar nav related dimensions based on page content
function positionSidebar() {
	var fixedSidebar = $(".fixed-sidebar");
	var cssTopDistance = 20;
	var distanceToTop = fixedSidebar.offset().top + -cssTopDistance;
	var sidebarWidth = fixedSidebar.width();
	fixedSidebar.attr("data-offset-top", distanceToTop);
	fixedSidebar.css("width", sidebarWidth);
}

$(document).ready(function () {
	positionSidebar();
	//$('body').scrollspy()
})