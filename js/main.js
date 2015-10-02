

$('button').on('click',function(e) {

	if($('button').hasClass('on') ==true){

	  
	  $("body").addClass('dark');
	  $("body").removeClass('light');
	  $("button").removeClass("on");
	  $("button").addClass("off");
	  $(".status").text("hey,who turn off the lights?");


	}else{
		$("body").addClass('light');
	  $("body").removeClass('dark');
		
	  $("button").removeClass("off");
	  $("button").addClass("on");
	  $(".status").text("It's so bright in here!");
	  

	}

});




