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
    // a)
    var selectOption = document.querySelectorAll(".list_panel li");
    var list_arrow = document.querySelectorAll(".list_arrow");
    var suma = document.querySelector(".sum");

    var title = document.querySelector(".title");
    var color = document.querySelector(".color");
    var pattern = document.querySelector(".pattern");
    var transport = document.querySelector(".transport");


    for (var i = 0, len = list_arrow.length; i < len; i++) {

        list_arrow[i].addEventListener("click", function(e) {
            console.log("dziala2");
            var sibling = this.nextElementSibling;
            if (sibling !== null) {
                sibling.style.display = "block";

               
                for (var j = 0, len = selectOption.length; j < len; j++) {
                    selectOption[j].addEventListener("click", function(e) {
                        
                    if (selectOption[0]) {
                        console.log("dziala3");
                        suma.innerText = "200";
                        title.innerText = "Clair";
                    } else if (selectOption[1]) {
                        console.log("dziala4");
                        suma.innerText = "300";
                        title.innerText = "Margarita";
                    } else if (selectOption[2]) {
                        console.log("dziala5");
                        suma.innerText = "400";
                        title.innerText = "Selena";
                    }
                });
                

                }
            } 
            
        });

    };




    // b) dziala
    // c)
    


});
 