
  var cx, cy;

  var secondsRadius
  var minutesRadius
  var hoursRadius

function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500);
  angleMode(DEGREES);
  colorMode(RGB);
  strokeJoin(ROUND);

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

  background(20)

  let sfrom = color(255, 67, 67) //red
  let sto = color(255, 146, 146)
  let mfrom = color(255, 245, 54) //yellow
  let mto = color(237, 228, 112)
  let hfrom = color(57, 57, 255) //blue
  let hto = color(113, 113, 255)

  push()
  fill (lerpColor(hfrom, hto, now.progress.hour))
  noStroke()
  let end1 = map(now.hours, 0, 12, 0, 360)
  arc(cx, cy, hoursRadius, hoursRadius, 0, end1, PIE)


  fill(lerpColor(mfrom, mto, now.progress.min))
  noStroke()
  let end2 = map(now.min, 0, 60, 0, 360)
  arc(cx, cy, minutesRadius, minutesRadius, 0, end2, PIE)

  fill (lerpColor(sfrom, sto, now.progress.sec))
  noStroke()
  let end3 = map(now.sec, 0, 60, 0, 360)
  arc(cx, cy, secondsRadius,secondsRadius, 0, end3, PIE)


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