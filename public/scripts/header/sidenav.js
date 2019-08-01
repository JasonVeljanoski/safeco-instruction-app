var sliderTrigger = document.getElementsByClassName("drawer-toggle")[0]; // hamburger icon
var slider = document.getElementsByClassName('sidebar')[0]; // slider nav
//var backdrop = document.getElementById('sidenav-backdrop'); // dark overlay
//var sidenavLogo = document.getElementsByClassName('sidenav-title')[0]; // side nav logo
//var sidenavList = document.getElementsByClassName('sidenav-list')[0]; // side nav links

// WHEN drawer-toggle (hamburger) IS CLICKED
// ACTIVATE SIDENAV AND BACKDROP

sliderTrigger.addEventListener("click", function (el) {
    // CLOSE SIDENAV
    if (slider.classList.contains("active") ) {
        // console.log("CLOSE");
        slider.style.minWidth = "0px";
        slider.style.maxWidth = "0px";
        slider.classList.remove("active");
    }
    // OPEN SIDENAV
    else {
        // console.log("OPEN");
        slider.style.minWidth = "350px";
        slider.style.maxWidth = "350px";
        slider.classList.add("active");
    }

});
