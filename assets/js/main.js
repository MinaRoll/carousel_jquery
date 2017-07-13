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

	function siguiente(){
		if( number >= 5){
			number = 1;
		}else {
			number++;
		}

		$('.picture').hide(); 
		$('#pic'+ number).fadeIn(1000); 
		$('.fa-circle').css({'color': 'white'});
		$('#img'+ number).css({'color': '#FF294B'});	
	}

	function anterior(){
		if( number <= 1){
			number = 5;
		}else {
			number--;
		}

		$('.picture').hide(); 
		$('#pic'+ number).fadeIn(1000); 
		$('.fa-circle').css({'color': 'white'});
		$('#img'+ number).css({'color': '#FF294B'});
	}

	function pagina(){
		var carusel = $(this).index() + 1; 
		console.log(carusel);
		$('.picture').hide(); 
		$('#pic'+ carusel).fadeIn(1000); 
		$('.fa-circle').css({'color': 'white'});
		$('#img'+ number).css({'color': '#FF294B'});

		number = carusel;

	}

});