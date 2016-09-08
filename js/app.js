 document.addEventListener("DOMContentLoaded", function(){
	console.log("dziala");
    // zad 1 menu dodane w HTML
	// zad 2
	var remove = document.querySelector(".remove");
	var apla = document.querySelector(".aplaTwo");
	var line = document.querySelector(".lineTwo");
    
    remove.addEventListener("mouseover", function(e) {
    	e.preventDefault();
    	apla.parentNode.removeChild(apla);
    	line.parentNode.removeChild(line);
    });

});