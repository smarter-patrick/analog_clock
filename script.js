hourHand = document.querySelector("#hour");
minuteHand = document.querySelector("#minute");
secondHand = document.querySelector("#second");

	var date = new Date();
	console.log(date);

	var hr = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();

	console.log(hr + " hours " + min + " min " + sec + " sec ");

	var hrPosition=(hr*360/12)+(min*360/60)/12;
	var minPosition=(min*360/60) + (sec*360/60)/60;
	var secPosition= sec*360/60;

function runTheClock () {
	hrPosition = hrPosition + (3/360);
	minPosition = minPosition+(6/60);
	secPosition = secPosition+6;

	secondHand.style.transform = "rotate(" + secPosition + "deg)";
	// console.log(secondHand);
	hourHand.style.transform = "rotate(" + hrPosition + "deg)"; 
	//console.log(hourHand);
	minuteHand.style.transform = "rotate(" + minPosition + "deg)";
 
 }

var interval = setInterval(runTheClock,1000);





