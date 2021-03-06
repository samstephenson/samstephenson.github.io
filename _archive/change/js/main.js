$(document).ready(function() {

	var numberOfCards = 0;
	var activeIndex = 0;
	var idPrefix = "card-";
	var cardsSeen = [];

	var cards = $('#cardWrapper').children('div');
	
	var colors = ['#049873', '#A000FF', '#208790', '#6638F0', '#3C2D51']
	var colorIndex = 0
	var colorIndexNext = colorIndex + 1

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function drawCard() {
		activeIndex = getRandomIntInclusive(0,numberOfCards);
	}

	function nextColor() {
		colorIndex +=1;
		if (colorIndex >= colors.length) {
			colorIndex = 0;
		}
		colorIndexNext = colorIndex + 1;
		if (colorIndexNext >= colors.length) {
			colorIndexNext = 0;
		}
	}

	function updateBackgrounds() {
		$('body').css("background", colors[colorIndex]);
		// $('#card-' + activeIndex + ' .modalWrapper').css("background", colors[colorIndex]);
	}


	$('.modal').toggleClass("hidden");
	// $('.modalWrapper').hide();

	//Generate array and ID each card
	$(cards).each(function() {
		cardIndex = numberOfCards;
		$(this).attr('id', 'card-' + cardIndex);
		numberOfCards += 1;
	});
	numberOfCards -= 1;

	//Draw first card ---------------!!!!!!!!!
	//drawCard();
	activeIndex = 0;
	cardsSeen.push(activeIndex);
	$("#card-" + activeIndex).toggleClass("entering");
	updateBackgrounds();
	nextColor();


	// Click refresh
	$('.btn.refresh').click(function(e) {

		// Reset at end
		if (cardsSeen.length >= numberOfCards) {
			cardsSeen = [];
			$("#cardWrapper div").addClass("entering");
			$("#cardWrapper div").removeClass("entering");
			//$("#card-" + activeIndex).attr("aria-hidden", true);
		}
		
		$("#card-" + activeIndex).toggleClass("leaving");

		// Draw card, loop until new
		drawCard();
		while( cardsSeen.indexOf(activeIndex) !== -1 ) {
			drawCard();
		}
		
		// Show new card
		$("#card-" + activeIndex).toggleClass("entering");

		// Add last card to 'used' list
		cardsSeen.push(activeIndex);

		//Switch Background color
		updateBackgrounds();
		nextColor();

	});

	$('.btn.info').click(function() {

		// $('#card-' + activeIndex + ' .modalWrapper').show();
		$('#card-' + activeIndex + ' .modal').toggleClass("hidden"); 

	});

	$('.btn.close').click(function() {

		$('#card-' + activeIndex + ' .modal').toggleClass("hidden");
		// $('#card-' + activeIndex + ' .modalWrapper').hide();

	});



});