
/* Giver afspil knappen functionen 'play'. Når trykket afspiller den musik og ændre sig til pause. Når trykket igen ændre den sig til
afspil og stopper mussiken*/
var state=0;
$('#afspil').click(function(){
	
	if(state==0){
		$('#musik')[0].play();
		$('#afspil').text("Pause");
		state=1;
	} else {
		$('#musik')[0].pause();
		$('#afspil').text("Afspil");
		state=0;
	}

});

/*Når næste bliver trykket sker functionen skip. Den vælger en et tilfældigt nr mellem 1 og 28 og så afspiller det den fil (Hvis muligt)
(som det altid er..)*/
$('#skip').click(function(){

	var nr = Math.random()*28+1;
	nr = Math.round(nr);
	$('#sang').attr('src','Julesiden-musik/'+nr+'.mp3');
	$('#musik')[0].load();
	if(state==1){
		$('#musik')[0].play();
	}

});


/*Giver santa functionen tillader santa at afspille en lyd når klikkes */
$('#santa').click(function(){
$('#hoho')[0].play();
});



/*Giver en function til dato der minusser millisekunder fra 1970 indtil juleaftens dag d. 24-12-2018.*/
setInterval(function(){

var d = new Date;

var time = 1545606000000-d.getTime();

var days = Math.floor(time/86400000);

$('#days').text(days);

var hours = Math.floor(time%86400000/3600000);

$('#hours').text(hours);

var min = Math.floor(time%86400000%3600000/60000);
	
$('#min').text(min);

var sec = Math.floor(time%86400000%3600000%60000/1000);

$('#sec').text(sec);

}, 1000)

