 document.addEventListener("DOMContentLoaded", function(){
	console.log("dziala");
    // zad 1 menu dodane w HTML
	// zad 2
	var remove = document.querySelector(".remove");
	var apla = document.querySelector(".aplaTwo");
	var line = document.querySelector(".lineTwo");
    
    remove.addEventListener("mouseover", function(e) {
    	e.preventDefault();
        if(this.children.length>1) {
        apla.parentNode.removeChild(apla);
        line.parentNode.removeChild(line);   
        } 
    	return null;
    });

    // zad 3
    var arrowLeft = document.querySelector(".arrowLeft");
    var arrowRight = document.querySelector(".arrowRight");
    var bigpicture = document.querySelector(".bigpicture img");
    var images = ["./images/black_chair.png", "./images/orange.png", "./images/red.png"];

    var imageNumber = 0;
    var imageLength = images.length - 1;

    arrowRight.addEventListener("click", function(e) {        
        imageNumber++;
            if (imageNumber > imageLength) {
                imageNumber = 0;
            } 
            bigpicture.src = images[imageNumber];
    });

    arrowLeft.addEventListener("click", function(e) {       
        imageNumber--;
            if (imageNumber < 0) {
                imageNumber = imageLength;
            }
            bigpicture.src = images[imageNumber];
    });


    // zad *



});
 