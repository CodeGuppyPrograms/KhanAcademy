// Program adapted from the code at
// https://codeguppy.com/code.html?t=planets
// ---------------------------------------------------------------
// https://codeguppy.com contains many programs for kids and teens
// that can be adapted to Khan Academy
// due to similarities between the platforms
// ---------------------------------------------------------------

var sunRadius = 30;
var systemAge = 0;
var dpf = 1; // days per frame

var planets = [
        { name : 'Mercury', r : 6, rev : 87.97 },
        { name : 'Venus', r : 7, rev : 224.7 },
        { name : 'Earth', r : 10, rev : 365.26, color: 'blue' },
        { name : 'Mars', r : 8, rev : 1.88 * 365 },
        { name : 'Jupiter', r : 20, rev : 11.86 * 365 },
        { name : 'Saturn', r : 15, rev : 29.46 * 365 },
        { name : 'Uranus', r : 12, rev : 84.01 * 365 },
        { name : 'Neptune', r : 7, rev : 164.79 * 365 },
        { name : 'Pluto', r : 5, rev : 248.59 * 365 }
    ];

var circle = function(x, y, r) {
    var d = r * 2;
    ellipse(x, y, d, d);
};
    

var drawPlanets = function()
{
    var sunX = width / 2;
    var sunY = height / 2;
    
    fill('yellow');
    circle(sunX, sunY, sunRadius);
    
    for(var i = 0; i < planets.length; i++)
    {
        var p = planets[i];

        // Draw orbit
        noFill();
        stroke(200);
        circle(sunX, sunY, p.sunDist);
        
        var x = sunX + p.sunDist * cos(p.a);
        var y = sunY - p.sunDist * sin(p.a);
        
        // Draw planet
        stroke(0);
        fill(255, 255, 255);
        
        if (p.color)
        {
            fill(0, 0, 255);
        }

        circle(x, y, p.r);

        pushMatrix();
        noStroke();
        fill(0);
        textAlign(LEFT, CENTER);
        text(p.name, x + p.r + 5, y);
        popMatrix();
    }
};

var updateAge = function()
{
    systemAge += dpf;
};

var updatePlanets = function()
{
    for (var i = 0; i < planets.length; i++)
    {
        var o = planets[i];
        o.a = (systemAge / o.rev) * 360;
    }
};

var calculateDistanceFromSun = function()
{
    var getPlanetSize = function()
    {
        var d = 0;
        for(var i = 0; i < planets.length; i++)
        {
            var o = planets[i];
            d += o.r * 2;
        }
        return d;
    };
    
    var getInterPlanet = function()
    {
        var planetsSize = getPlanetSize();
        var dp = height / 2 - sunRadius - planetsSize - 10;
        dp  = dp / planets.length;
        
        return dp;
    };
    
    var dp = getInterPlanet();
    planets[0].sunDist = sunRadius + dp + planets[0].r;
    
    for(var i = 1; i < planets.length; i++)
    {
        var p = planets[i-1];
        planets[i].sunDist = p.sunDist + p.r + dp + planets[i].r;
    }
};

var displayStats = function()
{
    pushMatrix();
    fill(0);
    noStroke();
    
    text("System age: " + systemAge + " days", 10, 10);
    
    for(var i = 0; i < planets.length; i++)
    {
        var p = planets[i];
        var pYears = systemAge / p.rev;
        text(p.name + ": " + pYears.toFixed(2) + " years", 10, (i+2)*14);
    }
    
    popMatrix();
};

var draw = function()
{
    background(255, 255, 255);
    
    updateAge();
    updatePlanets();
    drawPlanets();
    
    displayStats();
};

calculateDistanceFromSun();
