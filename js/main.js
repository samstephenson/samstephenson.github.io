$(document).ready(function(){

	$('a.fl').featherlight({
	   		closeIcon: ''
	});

    // Target your .container, .wrapper, .post, etc.
    $("#mylightbox").fitVids();

    $('img.headshot').click(function() {
    	$(this).toggleClass('zoomed');
    	$('.backgroundBlur').toggleClass('hidden');
    });

});
