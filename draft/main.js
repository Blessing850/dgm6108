"use strict"

/*  Variable that enables you to "talk to" your SVG drawing canvas. */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

/* Draw a border that matches the maximum drawing area for this assignment.
    Assign the border to a variable so that:
        (1) We know what the purpose of the shape is, and
        (2) We will have the ability to change it later (in a future assignment)
*/
let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

/* Write your code for Project 1 beneath this comment */

// Side body bumps (the dark green semi-circles)
drawing.append("circle")
    .attr("cx", 180)
    .attr("cy", 360)
    .attr("r", 40)
    .attr("fill", "lemon");
drawing.append("circle")
    .attr("cx", 320)
    .attr("cy", 360)
    .attr("r", 40)
    .attr("fill", "lemon");

// 4. Main Body (The light green rectangle)
drawing.append("rect")
    .attr("x", 175)
    .attr("y", 250)
    .attr("width", 150)
    .attr("height", 150)
    .attr("fill", "#8BC34A");

// 5. Eyes (The orange circles with black pupils)
// Left Eye
drawing.append("circle")
    .attr("cx", 200)
    .attr("cy", 250)
    .attr("r", 30)
    .attr("fill", "pink");
drawing.append("circle")
    .attr("cx", 200)
    .attr("cy", 250)
    .attr("r", 10)
    .attr("fill", "black");
// Right Eye
drawing.append("circle")
    .attr("cx", 300)
    .attr("cy", 250)
    .attr("r", 30)
    .attr("fill", "pink");
drawing.append("circle")
    .attr("cx", 300)
    .attr("cy", 250)
    .attr("r", 10)
    .attr("fill", "black");

// 6. Nostrils (Tiny black dots)
drawing.append("circle")
    .attr("cx", 235)
    .attr("cy", 280)
    .attr("r", 4)
    .attr("fill", "black");
drawing.append("circle")
    .attr("cx", 265)
    .attr("cy", 280)
    .attr("r", 4)
    .attr("fill", "black");

// 7. Inner Legs (The two blueish/green vertical rectangles)
drawing.append("rect")
    .attr("x", 210)
    .attr("y", 340)
    .attr("width", 15)
    .attr("height", 60)
    .attr("fill", "skyblue");
drawing.append("rect")
    .attr("x", 275)
    .attr("y", 340)
    .attr("width", 15)
    .attr("height", 60)
    .attr("fill", "skyblue");

// 8. Feet (Small orange circles at the bottom)
drawing.append("circle")
    .attr("cx", 195)
    .attr("cy", 405)
    .attr("r", 8)
    .attr("fill", "yellow");
drawing.append("circle")
    .attr("cx", 220)
    .attr("cy", 405)
    .attr("r", 8)
    .attr("fill", "yellow");
drawing.append("circle")
    .attr("cx", 280)
    .attr("cy", 405)
    .attr("r", 8)
    .attr("fill", "yellow");
drawing.append("circle")
    .attr("cx", 310)
    .attr("cy", 405)
    .attr("r", 8)
    .attr("fill", "yellow");