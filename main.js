//calculates factorial of 'val'
function calculateFactorial(val) {
	if(val == 0) {
		return 1;
	}
	else {
		return (val * calculateFactorial(val-1));
	}
}

//prompts the user to enter a positive number and alerts the user
//of the factorial
function factorialPrompt() {
	var a = prompt("Please enter a positive number", 8);
	if (a < 0) {
		alert("Please enter a POSITIVE number");
	}
	else {
		var b = calculateFactorial(a);
		alert(b);
	}
}

//when the page loads, display the browser info
window.onload = getBrowserType();

//determines what browser the user is using
function getBrowserType() {
	var sBrowser, sUsrAg = navigator.userAgent;
	var msg = "You are using: ";

	// The order matters here, and this may report false positives for unlisted browsers.
	if (sUsrAg.indexOf("Firefox") > -1) {
		document.getElementById("browserInfo").innerHTML = msg + "Mozilla Firefox";
	// "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
	} else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
		document.getElementById("browserInfo").innerHTML = msg + "Samsung Internet";
	// "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
	} else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
		document.getElementById("browserInfo").innerHTML = msg + "Opera";
	// "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
	} else if (sUsrAg.indexOf("Trident") > -1) {
		document.getElementById("browserInfo").innerHTML = msg + "Microsoft Internet Explorer";
	// "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
	} else if (sUsrAg.indexOf("Edge") > -1) {
		document.getElementById("browserInfo").innerHTML = msg + "Microsoft Edge (Legacy)";
	// "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
	} else if (sUsrAg.indexOf("Edg") > -1) {
		document.getElementById("browserInfo").innerHTML = msg + "Microsoft Edge (Chromium)";
	// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.64
	} else if (sUsrAg.indexOf("Chrome") > -1) {
		document.getElementById("browserInfo").innerHTML = msg + "Google Chrome or Chromium";
	// "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
	} else if (sUsrAg.indexOf("Safari") > -1) {
		document.getElementById("browserInfo").innerHTML = msg + "Apple Safari";
	// "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
	} else {
		document.getElementById("browserInfo").innerHTML = msg + "unknown";
	}
}

//when the page loads, display the clock
window.onload = displayClock();

//displays the local date and time
function displayClock(){
  var clock = new Date().toLocaleString();
  document.getElementById("clock").innerHTML = clock;
  setTimeout(displayClock, 1000); 
}

//gets the picture element
var myPicture = document.querySelector("#picture");

//calls getClickPosition() upon a click event
document.addEventListener("click", getClickPosition, false);

//calculates proper translate3d() coordinates for moving
//image to mouse click
function getClickPosition(e) {
	var parentPosition = getPosition(myPicture)
    var xPos = e.clientX - parentPosition.x - (myPicture.offsetWidth / 2);
    var yPos = e.clientY - parentPosition.y - (myPicture.offsetHeight / 2);

	var translate3dValue = "translate3d(" + xPos + "px," + yPos + "px, 0)";
	myPicture.style.transform = translate3dValue;
}

//returns a more accurate position of where the image is located independent of
//sizing in the viewport
function getPosition(element) {
	var xPos = 0;
	var yPos = 0;

	while (element) {
		xPos += (element.offsetLeft - element.scrollLeft + element.clientLeft);
		yPos += (element.offsetTop - element.scrollTop + element.clientTop);
		element = element.offsetParent;
	}
	return {
		x: xPos,
		y: yPos
	};
}
