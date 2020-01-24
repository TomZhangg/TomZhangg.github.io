var startminute;
function setup() {
	createCanvas(800,600);
	startminute = minute(); // make an HTML canvas element width x height pixels
}

function draw() {
	background("#deeaee"); //background color
	textSize(30); //text size

	line(0, 10, 800, 10);

	line(0, 60, 800, 60);

	line(0,130,800,130)

	line(0,190,800,190)

	strokeWeight(4)
	line(0, 250, 800, 250);

	strokeWeight(1)
	line(0,310,800,310)

	line(0,370,800,370)

	line(0, 430, 800, 430);

	line(0, 490, 800, 490);


	fill("#b1cbbb");
	//text(hour(), 140, 249);
	rect(180, 250, 55, (600 - hour() * (600/12))/2.5);
	//rect(180, 250, 55, (600 - 6 * (600/12))/2.5);
	text("11:59PM", 30,35)
	text("6PM", 50, 140)
	text("12PM", 50, 260)
	text("6AM", 50, 380)
	text("12AM", 50, 500)






	fill("#eea29a");
	text("59", 320, 35)
	text(minute(), 320,  245);
	rect(360, 250, 55,(600 - minute() * (600/30))/2.5)




	fill("#c94c4c");
	text("59", 480, 35)
	text(second(), 480, 245);
	rect(520, 250, 55,(600 - second() * (600/30))/2.5);

	
	if(startminute != minute()){
		console.log(minute())
		startminute = minute()
	}

}


