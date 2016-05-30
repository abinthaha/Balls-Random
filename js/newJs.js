$(document).ready(function() {
    var mouse = {'x': 0, 'y': 0};

    homex = 0;
    homey = 0;
    forcex = 0;
    forcey = 0;
    magnet = 10000;

    for (var i = 1; i <= 50; i++) {
        $('#balls_container').append("<li class='box'></li>");
        var size = Math.floor((Math.random() * 100) + 40);
        $('#balls_container li:last-child').css('height', size+'px');
        $('#balls_container li:last-child').css('width', size+'px');
       
    }

    $(document).bind('mousemove', function(e) {
        mouse = {'x': e.pageX, 'y': e.pageY};
    });
    

$('.box').each(function(index, el){
$(el).data( "homex", parseInt($(el).position().left));
$(el).data( "homey", parseInt($(el).position().top));
});

$('.box').css('position','absolute');
    setInterval(function () {
        $('.box').each(function(index, el){
            el = $(el);
            position = el.position();
            x0 = el.offset().left;
            y0 = el.offset().top;
            x1 = mouse.x;
            y1 = mouse.y;
            distancex = x1-x0;
            distancey = y1-y0;

            distance = Math.sqrt((distancex * distancex) + (distancey * distancey));
            
            powerx = x0 - (distancex / distance) * magnet / distance;
            powery = y0 - (distancey / distance) * magnet / distance;
            
            forcex = (forcex + (el.data('homex') - x0) / 2) / 2.1;
            forcey = (forcey + (el.data('homey') - y0) / 2) / 2.1;
                        

            el.css('left', powerx + forcex);
            el.css('top',  powery + forcey);
        });
    }, 15);
    

})