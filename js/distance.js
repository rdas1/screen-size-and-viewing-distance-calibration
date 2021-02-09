var ppi;

window.onload = function() {
	ppi = localStorage.screenSizeData.ppi;
	console.log(ppi);
}

document.getElementById("distanceDiv").style.display = "block";

function getTanFromDegrees(degrees) {
	return Math.tan(degrees * Math.PI / 180);
}

	const rbs = document.querySelectorAll('input[name="choice"]');

	window.addEventListener("keydown", handleKeyDown, true);

	var mainCanvas = document.querySelector("#blindSpotCanvas");
	var mainContext = mainCanvas.getContext("2d");

	mainCanvas.width = window.innerWidth * 0.99;
	mainCanvas.height = 100;
	 
	var canvasWidth = mainCanvas.width;
	var canvasHeight = mainCanvas.height;

	var xPos = (mainCanvas.width/2) + 25;
	var deltaX = 10;
	
	var leftOrRight = "left";
    let leftLimit;
    let rightLimit;
	var change = false;

	function drawCircle() {

		if (document.getElementById("leftButton").checked) {
		    leftLimit = (canvasWidth/2) + 20;
		    rightLimit = canvasWidth-20;
			if (leftOrRight != "left") {
				change = true;
				xPos = (canvasWidth/2) + 25;
				deltaX = 10;
			}
			leftOrRight = "left";
		}
		else {
	    	rightLimit = (canvasWidth/2) - 50;
	    	leftLimit = 20;
			if (leftOrRight != "right") {
				change = true;
				xPos = (canvasWidth/2) - 60;
				deltaX = -10;
			}
			leftOrRight = "right";
		}

	    mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
	     
	    // color in the background
	    mainContext.fillStyle = "#EEEEEE";
	    mainContext.fillRect(0, 0, canvasWidth, canvasHeight);
	    
	    mainContext.fillStyle = "#000000";
		mainContext.fillRect((mainCanvas.width/2) - 40, mainCanvas.height/2 - 20, 40, 40);

	    // draw the circle
	    mainContext.beginPath();
	    mainContext.arc(xPos, mainCanvas.height/2, 25, 0, Math.PI * 2);
	    mainContext.closePath();
	     
	    // color in the circle
	    mainContext.fillStyle = "#FF0000";
	    mainContext.fill();
	  
	    if ( (xPos <= leftLimit || xPos >= rightLimit) ) {
	    	deltaX = -deltaX;
	    }
	    
	    xPos += deltaX;
	    //requestAnimationFrame(drawCircle);
	}
	//drawCircle(); 
	setInterval(drawCircle, 40);

	function handleKeyDown(e) {
		if (e.keyCode == 32) {
			clearInterval(drawCircle);
			//alert(mainCanvas.width/2 - xPos);
			//alert((mainCanvas.width/2 - xPos) / ppi)
			alert("Viewing distance: " + Math.abs(((mainCanvas.width/2 - xPos) / ppi) / getTanFromDegrees(15)).toFixed(2) + "in" );
		}
	}