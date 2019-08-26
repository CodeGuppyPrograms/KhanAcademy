// Magnetic field was adapted from code at
// https://codeguppy.com/code.html?t=magnetic_needles
// ---------------------------------------------------------------
// https://codeguppy.com contains many programs for kids and teens
// that can be adapted to Khan Academy due to
// similarities between the platforms
// ---------------------------------------------------------------

var displayMagneticNeedle = function(x, y, d)
{
    var angle = atan2( mouseY - y, mouseX - x );

    var x2 = x + d * cos(angle);
    var y2 = y + d * sin(angle);

    line(x, y, x2, y2);
    ellipse(x2, y2, 5, 5);
};

var draw = function()
{
    background(255, 255, 255);

    for (var x = 0; x < width; x += 30)
    {
        for(var y = 0; y < height; y += 30)
        {
            displayMagneticNeedle( x, y, 30 );
        }
    }
};
