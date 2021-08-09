var canvas = new fabric.Canvas('myCanvas');
ctx = canvas.getContext("2d");

ballx= 0;
bally= 0;
holey=400;
holex=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		holeobj = Img;
		holeobj.scaleToWidth(50);
		holeobj.scaleToHeight(50);
		holeobj.set({
			top:holey,
			left:holex
		});
		canvas.add(holeobj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ballobj = Img;
		ballobj.scaleToWidth(50);
		ballobj.scaleToHeight(50);
		ballobj.set({
			top:bally,
			left:ballx
		});
		canvas.add(ballobj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ballx == holex) && (bally == holey))
	{
		canvas.remove(ballobj);
		document.getElementById("hd3").innerHTML="YOU HAVE HIT THE GOAL!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(bally > 0)
		{
			bally= bally - block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Up Arrow Key is Pressed, X = " + ballx + "Y = " + bally);
			canvas.remove(ballobj);
			new_image();
		}
	}

	function down()
	{
		if(bally <=450)
		{
			bally= bally + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down Arrow Key is Pressed, X = " + ballx + "Y = " + bally);
			canvas.remove(ballobj);
			new_image();
		}
	}

	function left()
	{
		if(ballx >5)
		{
			ballx= ballx - block_image_width;
			console.log("block image height = " + block_image_height);
			console.log("When Left Arrow Key is Pressed, X = " + ballx + "Y = " + bally);
			canvas.remove(ballobj);
			new_image();
		}
	}

	function right()
	{
		if(ballx <=1050)
		{
			ballx= ballx + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Right Arrow Key is Pressed, X = " + ballx + "Y = " + bally);
			canvas.remove(ballobj);
			new_image();
		}
	}
	
}

