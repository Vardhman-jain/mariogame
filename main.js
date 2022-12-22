function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover= loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites(); // loads the image
	MarioAnimation(); //loads the animation of mario 

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');//parent() allows it to display canvas on a html element,ie, div/

	instializeInSetup(mario);//initializes all the assets for the game and loads all the functions.
    
	video=createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");

    poseNet= ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log("Model Loaded !");
}

function draw() {
	game();//Starts the game
}

function gotPoses(results) {
	if (results.length > 0) {
		console.log(results)
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}

