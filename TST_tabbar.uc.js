// Auto hide tab bar only when Tree Style Tab sidebar is selected and visible.

(function() {
    var tabbar = document.getElementsByClassName("toolbar-items");
	var tabbarr = document.getElementsByClassName("titlebar-spacer");
	var navbar = document.getElementById("nav-bar");
	
	
    function showHideTabbar() {
        var sidebarBox = document.getElementById("sidebar-box");
        var sidebarTST = sidebarBox.getAttribute("sidebarcommand");
        if (!sidebarBox.hidden && sidebarTST === "treestyletab_piro_sakura_ne_jp-sidebar-action") {
			tabbar[0].style.visibility = "hidden";
			tabbarr[0].style.visibility = "hidden";
			navbar.style.marginTop = "-25px";
			navbar.style.paddingRight = "15px";
			navbar.style.paddingLeft = "75px";
        }
        else {
			tabbar[0].style.visibility = "visible";
			tabbarr[0].style.visibility = "visible";
			navbar.style.marginTop = "0";
			navbar.style.paddingRight = "0";
			navbar.style.paddingLeft = "0";
		}
    }
    var observer = new MutationObserver(showHideTabbar);
    observer.observe(document.getElementById("sidebar-box"), { attributes: true, attributeFilter: ["sidebarcommand", "hidden"] });
})();
