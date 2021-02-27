
  var cx, cy;

  var secondsRadius
  var minutesRadius
  var hoursRadius

function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500);
  angleMode(DEGREES);
  colorMode(RGB);

  var radius = min(width, height) / 2; // this is the maximum possible radius
  secondsRadius = radius * 1.25
  minutesRadius = radius * 1.5
  hoursRadius = radius * 1.75

  cx = width / 2
  cy = height / 2
}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // Angles for sin() and cos() start at 3 o'clock
  // subtract HALF_PI to make them start at the top
  // var s = (now.progress.sec * TWO_PI) - HALF_PI
  // var m = (now.progress.min * TWO_PI) - HALF_PI
  // var h = (now.progress.halfday * TWO_PI) - HALF_PI

  background(255)

  let hfrom = color(230, 231, 233)
  let hto = color(19, 46, 82)
  var h2 = lerpColor(hfrom, hto, 0.09)
  var h3 = lerpColor(hfrom, hto, 0.18)
  var h4 = lerpColor(hfrom, hto, 0.27)
  var h5 = lerpColor(hfrom, hto, 0.36)
  var h6 = lerpColor(hfrom, hto, 0.45)
  var h7 = lerpColor(hfrom, hto, 0.54)
  var h8 = lerpColor(hfrom, hto, 0.63)
  var h9 = lerpColor(hfrom, hto, 0.72)
  var h10 = lerpColor(hfrom, hto, 0.81)
  var h11 = lerpColor(hfrom, hto, 0.9)
  fill(hfrom)
  arc(cx, cy, hoursRadius, hoursRadius, 0, 30)
  fill(h2)
  arc(cx, cy, hoursRadius, hoursRadius, 30, 60)
  fill(h3)
  arc(cx, cy, hoursRadius, hoursRadius, 60, 90)
  fill(h4)
  arc(cx, cy, hoursRadius, hoursRadius, 90, 120)
  fill(h5)
  arc(cx, cy, hoursRadius, hoursRadius, 120, 150)
  fill(h6)
  arc(cx, cy, hoursRadius, hoursRadius, 150, 180)
  fill(h7)
  arc(cx, cy, hoursRadius, hoursRadius, 180, 210)
  fill(h8)
  arc(cx, cy, hoursRadius, hoursRadius, 210, 240)
  fill(h9)
  arc(cx, cy, hoursRadius, hoursRadius, 240, 270)
  fill(h10)
  arc(cx, cy, hoursRadius, hoursRadius, 270, 300)
  fill(h11)
  arc(cx, cy, hoursRadius, hoursRadius, 300, 330)
  fill(hto)
  arc(cx, cy, hoursRadius, hoursRadius, 330, 0)


  fill (240)
  let end1 = map(now.hours, 0, 12, 0, 360)
  arc(cx, cy, hoursRadius, hoursRadius, 0, end1)


  fill(150)
  noStroke()
  let end2 = map(now.min, 0, 60, 0, 360)
  arc(cx, cy, minutesRadius, minutesRadius, 0, end2)

  fill(200)
  noStroke()
  let end3 = map(now.sec, 0, 60, 0, 360)
  arc(cx, cy, secondsRadius,secondsRadius, 0, end3)

 // Draw the second hand (thin & orange)
  // stroke('orange')
  // strokeWeight(1)
  // line(cx, cy, cx + cos(s)*secondsRadius, cy + sin(s)*secondsRadius)

  // // draw the minute hand (white and slightly thicker)
  // stroke('white')
  // strokeWeight(3)
  // line(cx, cy, cx + cos(m)*minutesRadius, cy + sin(m)*minutesRadius)

  // // draw the hour hand (thicker still)
  // strokeWeight(6)
  // line(cx, cy, cx + cos(h)*hoursRadius, cy + sin(h)*hoursRadius)
 
}