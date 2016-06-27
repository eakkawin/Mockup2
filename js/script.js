function myFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("show") == -1) {
        x.className += " show";
    } else {
        x.className = x.className.replace(" show", "");
    }
}
function openCity(evt, cityName) {
	var i, x, tablinks;
	x = document.getElementsByClassName("city");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
	    tablinks[i].className = tablinks[i].className.replace(" white", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " white";
}
