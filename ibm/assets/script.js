var slides = $('.slide');

console.log(slides)


function changeSlide(direction){

	var curr = $('.current')

	if(direction == 'forward'){
		if($('.slide').last().hasClass('current') == true){
			return null
		}
		curr.removeClass('current')
		curr.next().addClass('current')
	}

	if(direction == 'back'){
		if($('.slide').first().hasClass('current') == true){
			return null
		}
		curr.removeClass('current')
		curr.prev().addClass('current')
	}

}

$(document).keydown(function(e) {
	switch(e.which) {
		case 37: // left
		changeSlide('forward')
		break;

		case 38: // up
		changeSlide('forward')
		break;

		case 39: // right
		changeSlide('back')
		break;

		case 40: // down
		changeSlide('back')
		break;

		default: return; // exit this handler for other keys
	}
	e.preventDefault(); // prevent the default action (scroll / move caret)
});
