var score= 0;
function clickRock(){
	var machine = Math.random() * (4 - 1) + 1;
	machine = Math.round(machine);
	console.log(machine);
	var user =1; //rock
	if( machine === 1){
		console.log("Machine uses rock, Tabs");
		document.getElementById('imgResult').src= "rockLarge.jpg"
		calculateScore(5);
	}
	else if(machine === 2 )
	{
		console.log("Machine uses paper, machine wins");
		document.getElementById('imgResult').src= "rockLargeRed.jpg"
		calculateScore(-5);
	}
	else{
		console.log("Machine uses scissor, you win");
		document.getElementById('imgResult').src= "rockLargeGreen.jpg"
		calculateScore(10);
	}
	

}
function clickPaper(){
	var machine = Math.random() * (4 - 1) + 1;
	machine = Math.round(machine);
	console.log(machine);
	var user =2; //paper
	if( machine === 1){
		console.log("Machine uses rock, you win");
		document.getElementById('imgResult').src= "paperLargeGreen.jpg"
		calculateScore(10);
	}
	else if(machine === 2 )
	{
		console.log("Machine uses paper, tabs");
		document.getElementById('imgResult').src= "paperLarge.jpg"
		calculateScore(5);
	}
	else{
		console.log("Machine uses scissor, machine wins");
		document.getElementById('imgResult').src= "paperLargeRed.jpg"
		calculateScore(-5);
	}
	

}
function clickScissor(){
	var machine = Math.random() * (4 - 1) + 1;
	machine = Math.round(machine);
	console.log(machine);
	var user =3; //scissor
	if( machine === 1){
		console.log("Machine uses rock, machine wins ");
		document.getElementById('imgResult').src= "scissorLargeRed.jpg"
		calculateScore(-5);
	}
	else if(machine === 2 )
	{
		console.log("Machine uses paper, you wins");
		document.getElementById('imgResult').src= "scissorLargeGreen.jpg"
		calculateScore(10);
	}
	else{
		console.log("Machine uses scissor, tabs");
		document.getElementById('imgResult').src= "scissorLarge.jpg"
		calculateScore(5);
	}
	
}

function calculateScore(point){
	score = score + point;
	document.getElementById("points").innerHTML = score;

}
