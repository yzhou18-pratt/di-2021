
function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500)

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
 
  colorMode(RGB)
  textFont("Nunito") // ← check index.html to see how it was loaded from google-fonts
  textSize(32) // make it big
  textAlign(CENTER)

  background(242, 183, 5)

  var cx = 250
  var cy = 250

  strokeWeight(15)
  stroke(79, 178, 215)
  noFill()
  let w1 = map(now.progress.week, 0, 1, 0, 450)
  ellipse(cx, cy, w1, w1)

  strokeWeight(15)
  stroke(242, 126, 211)
  noFill()
  let m1 = map(now.progress.month, 0, 1, 0, 450)
  ellipse(cx, cy, m1, m1)

  strokeWeight(15)
  stroke(217, 103, 4, 150)
  noFill()
  let moo1 = map(now.progress.moon, 0, 1, 0, 450)
  ellipse(cx, cy, moo1, moo1)


}