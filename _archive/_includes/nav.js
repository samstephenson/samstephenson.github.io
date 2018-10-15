$(document).ready(function() {
	
	if (!$(".masthead nav a.work").is(".active") ) {
   		$('.projectWrapper').hide();
	};


	// Scrollbar positioning

	var rem = $('body').css('font-size').replace("px", "");
	var target = $('.projectNav li.active');
	var safeDistance = $(window).width() * 0.25;
	var scrollPosition = $(target).index('.projectNav li') * 10 * rem - safeDistance;

	$('.projectNav').scrollLeft(scrollPosition);

	function animateScroller() { 
		$('.projectNav').animate({
			scrollLeft: scrollPosition
		}, 300);
	};

// Buttons

	function checkButtons() {

		var projectsWidth = 288;

		$(".projectNav:first li").each(function() {
		      projectsWidth = projectsWidth + $(this).width();
		});

		if ( projectsWidth < $( window ).width() ) {
			$('.scrollRight, .scrollLeft').hide();
			console.log('checking');
		} else {
			$('.scrollRight, .scrollLeft').show();
		}

		if(scrollPosition < 5) {
			$('.scrollLeft').hide();
		}

	};

	checkButtons();

	$(window).resize(function() {
		checkButtons();
	});



// Scroll Handler

	$('.scrollRight').click(function() {
		scrollPosition += ( $('.projectNav li').width() * 2 );
		animateScroller();
	})

	$('.scrollLeft').click(function() {
		scrollPosition -= ( $('.projectNav li').width() * 2 );
		animateScroller();
	})

	$('.projectNav').scroll(function(e) {

	    if ( $(this).is(':animated') || e.originalEvent) {
	      
	      if(this.scrollLeft === 0) {

				$('.scrollLeft').hide();

			} else if ( $(this)[0].scrollWidth - $(this).scrollLeft() == $(this).outerWidth() ){
				
				$('.scrollRight').hide();

			} else {

				$('.scrollLeft, .scrollRight').show();

			}

	    }
	});

});