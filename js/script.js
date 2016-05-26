$(document).ready(function () {
	for (var i = 0; i < 50; i++) {
		$('#balls_container').append('<li></li>');
	}
	setInterval(function() {
		for (var i = 0; i < 51; i++) {
			var x_pos = Math.floor((Math.random() * 500) + 1),
				y_pos = Math.floor((Math.random() * 500) + 1);

			$('#balls_container li:nth-child('+i+')').css('transition', 'all 1s ease');
			$('#balls_container li:nth-child('+i+')').css('transform', 'translate('+x_pos+'px, '+y_pos+'px)');
		}
	}, 1500)
});