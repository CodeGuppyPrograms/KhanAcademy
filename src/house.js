// Adapted from tutorial at
// https://codeguppy.com/code.html?t=_coordinates
// ----------------------------------------------------
// Due to similarities between platforms many programs
// from https://codeguppy.com can be adapted and ported
// to Khan Academy.
// ----------------------------------------------------

var circle = function(x, y, r) {
    var d = r * 2;
    ellipse(x, y, d, d);
};

// Draw walls
rect(50, 150, 300, 250);

// Draw roof
line(50, 150, 200, 0);
line(200, 0, 350, 150);
circle(200, 95, 30);

// Draw chimney
line(280, 80, 280, 20);
line(280, 20, 300, 20);
line(300, 20, 300, 100);

// Draw left window
rect(75, 175, 100, 100);
line(75, 225, 175, 225);
line(125, 175, 125, 275);


// Draw right window
rect(225, 175, 100, 100);
line(225, 225, 325, 225);
line(275, 175, 275, 275);

// Draw door
rect(150, 324, 100, 75);
