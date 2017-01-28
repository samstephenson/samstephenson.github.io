$(document).ready(function(){ 

    $('.form-control').keyup(function(){ 
		var size = parseInt($(this).attr('size')); 
		var chars = $(this).val().length; 
		if(chars >= size) $(this).attr('size', chars); 
    }); 

}); 