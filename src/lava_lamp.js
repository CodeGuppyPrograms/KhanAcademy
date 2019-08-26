// Lava lamp program was adapted from code at
// https://codeguppy.com/code.html?t=lavalamp
// --------------------------------------------------------------
// https://codeguppy.com contains may programs for kids and teens
// that can be adapted to Khan Academy due to
// similarities between the platforms
// --------------------------------------------------------------

var w = 160;
var h = 120;

var scaleX = width / w;
var scaleY = height / h;

fill(255, 0, 0);
noStroke();

var balls = [];

for(var i = 0; i < 5; i++)
{
    balls.push({ x : random(w), y : random(h), dx : random(1, 2), dy : random(1,2)});
}


var update = function()
{
    for(var i = 0; i < balls.length; i++)
    {
        var b = balls[i];
        
        b.x += b.dx;
        b.y += b.dy;
        
        if (b.x > w || b.x < 0) {
            b.dx *= -1;
        }
            
        if (b.y > h || b.y < 0) {
            b.dy *= -1;
        }
    }
};

var display = function()
{
    for(var x = 0; x < w; x++)
    {
        for(var y = 0; y < h; y++)
        {
            var sum = 0;
            
            for(var i = 0; i < balls.length; i++)
            {
                var b = balls[i];
                sum += 1 / dist(x, y, b.x, b.y);
            }

            if (sum > 0.15)
            {
                ellipse(x * scaleX + scaleX / 2, y * scaleY + scaleY / 2, scaleX, scaleY);
            }
        }
    }
};

var draw = function()
{
    background(255, 255, 255);
    
    update();
    display();
};
