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
    var selects = document.querySelectorAll(".list_panel");
    var selectOption = document.querySelectorAll(".list_panel li");
    var list_arrow = document.querySelectorAll(".list_arrow");
    var suma = document.querySelector(".sum");

    var title = document.querySelector(".title");
    var transport = document.querySelector(".transport");

    var sort = document.querySelectorAll("#sort li");
    var color = document.querySelectorAll("#color li");
    var material = document.querySelectorAll("#material li");

    var sortResult = document.querySelectorAll("#sort li");
    var colorResult = document.querySelectorAll("#color li");
    var materialResult = document.querySelectorAll("#material li");



    var transportPrice = document.getElementById('transport').dataset.transportPrice;
    var transportChecked = document.getElementById('transport').checked;
    var optionsSortPrice = 0;
    var optionsSortName = '';
    var optionsColorPrice = 0;
    var optionsColorName = '';
    var optionsMaterialPrice = 0;
    var optionsMaterialName = '';
    //options.material.price = 0;
    //options.transport.price = 0;
    
    for (var i = 0; i < sort.length; i ++) {
        sort[i].addEventListener("click", function(e) {
            optionsSortPrice = this.dataset.sortPrice;
            console.log(this);
            optionsSortName = this.dataset.sortName;
            show();
        });
    }

    for (var i = 0; i < color.length; i ++) {
        color[i].addEventListener("click", function(e) {
            optionsColorPrice = this.dataset.colorPrice;
            console.log(this);
            optionsColorName = this.dataset.colorName;
            show();
        });
    }

    for (var i = 0; i < material.length; i ++) {
        material[i].addEventListener("click", function(e) {
            optionsMaterialPrice = this.dataset.materialPrice;
            console.log(this);
            optionsMaterialName = this.dataset.materialName;
            show();
        });
    }

    document.getElementById('transport').addEventListener("click", function(e) {
        console.log('transport');
        show();
    });

    var show = function() {
        
        var titleName = document.getElementById('titleName');
        var colorName = document.getElementById('colorName');
        var patternName = document.getElementById('patternName');
        var transportName = document.getElementById('transportName');

        var titleValue = document.getElementById('titleValue');
        var colorValue = document.getElementById('colorValue');
        var patternValue = document.getElementById('patternValue');
        var transportValue = document.getElementById('transportValue');

        titleName.innerText = optionsSortName;
        titleValue.innerText = optionsSortPrice;
        colorName.innerText = optionsColorName;
        colorValue.innerText = optionsColorPrice;
        patternName.innerText = optionsMaterialName;
        patternValue.innerText = optionsMaterialPrice;

        if (document.getElementById('transport').checked==true){
            transportValue.innerText = transportPrice;
        } else {
           transportValue.innerText = 0; 
            
        }
        document.getElementById('sum').innerText = parseInt(optionsSortPrice)+ parseInt(optionsColorPrice) + parseInt(optionsMaterialPrice) + parseInt(transportValue.innerText );
        
    }

    


    for (var i = 0, len = list_arrow.length; i < len; i++) {

        list_arrow[i].addEventListener("click", function(e) {
            console.log("dziala2");
            var sibling = this.nextElementSibling;

            
            
            if (sibling !== null) {

                for (var j = 0; j < selects.length; j++) {
                    console.log("block");

                    if(selects[j]==sibling){

                        if (sibling.style.display === "block") {
                            sibling.style.display = "none";
                        } else {
                            sibling.style.display = "block";
                        }
                    } else {
                        selects[j].style.display = "none";
                    }
                }
                
                

               /*
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
                */
            } 
            
        });

    };




    // b) dziala
    // c)
    


});
 