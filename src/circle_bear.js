// A cute bear made out only from circles.
// The program was adapted from the original at
// https://codeguppy.com (a coding site for kids and teens)

var circle = function(x, y, r) {
    var d = r * 2;
    ellipse(x, y, d, d);
};

// Draw bear face
circle(200, 250, 200);

// Draw left year
circle(50, 50, 50);
circle(70, 72, 20);

// Draw right year
circle(350, 50, 50);
circle(330, 72, 20);

// Draw left eye
circle(100, 170, 30);
circle(115, 180, 10);

// Draw right eye
circle(300, 170, 30);
circle(285, 180, 10);

// Draw nose
circle(200, 350, 90);
circle(200, 300, 20);
