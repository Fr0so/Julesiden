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

$('#skip').click(function(){

	var nr = Math.random()*28+1;
	nr = Math.round(nr);
	$('#sang').attr('src','Julesiden-musik/'+nr+'.mp3');
	$('#musik')[0].load();
	if(state==1){
		$('#musik')[0].play();
	}

});



$('#santa').click(function(){
$('#hoho')[0].play();
});




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

