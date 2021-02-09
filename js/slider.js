var slider = document.getElementById("myRange");

console.log(slider.offsetLeft);
var rect = slider.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
console.log(slider.clientWidth);

var leftAlign = document.getElementById("alignment");
var rightAlign = document.getElementById("alignment2");

leftAlign.style.marginLeft = slider.offsetLeft;
leftAlign.style.height = rightAlign.style.height = Math.min( (slider.clientWidth * 0.630563798), 300 ) + "px";

var widthOutput = document.getElementById("widthOutput");
var heightOutput = document.getElementById("heightOutput");
var diagonalOutput = document.getElementById("diagonalOutput");
//output.innerHTML = slider.value;
var cardWidthPx;
var ppi;

var screenWidthPx = window.screen.width;
var screenHeightPx = window.screen.height;

var screenWidthIn;
var screenHeightIn;
var screenDiagonalIn;

var screenSizeData = new Object();

slider.oninput = function() {

	rightAlign.style = "visibility: visible; width: " + this.value / 10 + "%"
	rightAlign.style.height = Math.min( ( (slider.clientWidth * this.value / 1000) * 0.630563798), 300 ) + "px";

	cardWidthPx = slider.clientWidth * (this.value / 1000);
	ppi = cardWidthPx / 3.375;

	screenWidthIn = screenWidthPx / ppi;
	screenHeightIn = screenHeightPx / ppi;
	screenDiagonalIn = Math.sqrt( (Math.pow(screenWidthIn, 2) + Math.pow(screenHeightIn, 2)) )
	
	heightOutput.innerHTML = screenHeightIn.toFixed(2) + "in";
	widthOutput.innerHTML = screenWidthIn.toFixed(2) + "in";
	diagonalOutput.innerHTML = screenDiagonalIn.toFixed(2) + "in";

	screenSizeData.ppi = ppi;
	screenSizeData.screenWidthIn = screenWidthIn;
	screenSizeData.screenHeightIn = screenHeightIn;
	screenSizeData.screenDiagonalIn = screenDiagonalIn;

	localStorage.screenSizeData = screenSizeData;

}
