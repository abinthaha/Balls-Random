$(document).ready(function () {
	var mouse = {'x': 0, 'y': 0},
		magnet = 10000,
		forcex = 0,
		forcey = 0,
		homex = 0,
    	homey = 0;

	for (var i = 0; i < 20; i++) {
		$('#balls_container').append("<li></li>");
	}

	$(document).bind('mousemove', function(e) {
        mouse = {'x': e.pageX, 'y': e.pageY};
    });

	$('#balls_container li').each(function(index, el){
		$(el).data( "homex", parseInt($(el).position().left));
		$(el).data( "homey", parseInt($(el).position().top));
		var ran = Math.floor((Math.random() * 100) + 40);
		$(el).css('width', ran+'px');
		$(el).css('height', ran+'px');
	});


    var el = $('#balls_container li');
    $(el).data( "homex", parseInt($(el).position().left));
	$(el).data( "homey", parseInt($(el).position().top));

    setInterval(function() {
    	$('#balls_container li').each(function(index, el){
	    	var position = $(el).position(),
	    		x0 = $(el).offset().left,
	    		y0 = $(el).offset().top,
	    		x1 = mouse.x,
	    		y1 = mouse.y,
	    		distancex = x1-x0,
	            distancey = y1-y0,
	            distance = Math.sqrt((distancex * distancex) + (distancey * distancey)),

	            powerx = x0 - (distancex / distance) * magnet / distance;
	            powery = y0 - (distancey / distance) * magnet / distance;
	            
	            forcex = (forcex + ($(el).data('homex') - x0) / 2) / 2.1;
	            forcey = (forcey + ($(el).data('homey') - y0) / 2) / 2.1;

            $(el).css('left', powerx + forcex);
            $(el).css('top',  powery + forcey);
    	});
    }, 15);

	/*To move the balls randomly**/

	// setInterval(function() {
	// 	for (var i = 0; i < 51; i++) {
	// 		var x_pos = Math.floor((Math.random() * 500) + 1),
	// 			y_pos = Math.floor((Math.random() * 500) + 1);

	// 		$('#balls_container li:nth-child('+i+')').css('transition', 'all 1s ease');
	// 		$('#balls_container li:nth-child('+i+')').css('transform', 'translate('+x_pos+'px, '+y_pos+'px)');
	// 	}
	// }, 1500);
});