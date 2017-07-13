$(document).ready(function(){
	var number = 1;
	
	$('.picture').hide(); 
	$('.picture:first').show(); 
	$('.fa-circle:first').css({'color': '#FF294B'});
	$('.carousel-left').click(anterior);
	$('.carousel-right').click(siguiente);
	$('.fa-circle').click(pagina);
  
	setInterval(function(){
		siguiente();
	}, 6000);