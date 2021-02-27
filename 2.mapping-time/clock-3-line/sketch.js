
function setup() {
  // set the width & height of the sketch
  createCanvas(500,700)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
  background(175)

  var spacing = 10
  var yBar = 60

  //hours
  push()
  translate(60, yBar)
  stroke(200)
  strokeWeight(2)
  for (var i=0; i <= 23; i ++) {
    line(0, i*spacing, 120, i*spacing)
  }
  pop()

  push()
  translate(60, yBar)
  stroke(100)
  strokeWeight(3)
  for (var i=0; i <= now.hours-1; i ++) {
    line(0, i*spacing, 120, i*spacing)
  }
  pop()


  //minutes
  push()
  translate(190, yBar)
  stroke(200)
  strokeWeight(2)
  for (var i=0; i <= 58; i ++) {
    line(0, i*spacing, 120, i*spacing)
  }
  pop()

  push()
  translate(190, yBar)
  stroke(100)
  strokeWeight(3)
  for (var i=0; i <= now.min-1; i ++) {
    line(0, i*spacing, 120, i*spacing)
  }
  pop()


  //seconds
  push()
  translate(320, yBar)
  stroke(200)
  strokeWeight(2)
  for (var i=0; i <= 58; i ++) {
    line(0, i*spacing, 120, i*spacing)
  }
  pop()

  push()
  translate(320, yBar)
  stroke(100)
  strokeWeight(3)
  for (var i=0; i <= now.sec-1; i ++) {
    line(0, i*spacing, 120, i*spacing)
  }
  pop()


}