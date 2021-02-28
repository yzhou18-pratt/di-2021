
function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500)
}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
  background(255)
  colorMode(RGB)

  textFont("Nunito")
  textSize(10)


  // month progress bar
  push()
  fill(83, 115, 36, 85)
  noStroke()
  let month = map(now.progress.month, 0, 1, 0, 500)
  rect (0, 500, 500, -(month))
  fill(50, 50, 50, 75)
  textAlign(LEFT)
  text('% month', 20, 520-(month))
  pop()

  // week progress bar
  push()
  fill(147, 217, 43, 85)
  noStroke()
  let week = map(now.progress.week, 0, 1, 0, 500)
  rect(0, 0, 500, week)
  fill (50, 50, 50, 75)
  textAlign(LEFT)
  text('% week', 435, week-7)
  pop()


  // day progress bar
  push()
  fill(151, 242, 15, 85)
  noStroke()
  let day = map(now.progress.day, 0, 1, 0, 500)
  rect(0, 0, day, 500)
  fill (50, 50, 50, 75)
  textAlign(RIGHT)
  text('% day', day-7, 475)
  pop()

  // push()
  // var dx = 20.8
  // translate(0, 490)
  // strokeWeight(2)
  // stroke(151, 242, 15, 255)
  // for (var d=1; d<= 23; d++) {
  //   line (d*dx, 0, d*dx, 10) // draw lines for day
  // }
  // pop()

  // push()
  // var dx = 20.8
  // translate(0, 495)
  // noStroke()
  // fill(120, 120, 120, 120)
  // for (var d=1; d<= 23; d++) {
  //   text('1', 1*dx, 0) // draw lines for day
  //   text('2', 2*dx, 0)
  //   text('3', 3*dx, 0)
  //   text('4', 4*dx, 0)
  //   text('5', 5*dx, 0)
  //   text('6', 6*dx, 0)
  //   text('7', 7*dx, 0)
  //   text('8', 8*dx, 0)
  //   text('9', 9*dx, 0)
  //   text('10', 10*dx, 0)
  //   text('11', 11*dx, 0)
  //   text('12', 12*dx, 0)
  //   text('13', 13*dx, 0)
  //   text('14', 14*dx, 0)
  //   text('15', 15*dx, 0)
  //   text('16', 16*dx, 0)
  //   text('17', 17*dx, 0)
  //   text('18', 18*dx, 0)
  //   text('19', 19*dx, 0)
  //   text('20', 20*dx, 0)
  //   text('21', 21*dx, 0)
  //   text('22', 22*dx, 0)
  //   text('23', 23*dx, 0)
  // }
  // pop()



  // push()
  // var wx = 71.43
  // translate(490, 0)
  // strokeWeight(2)
  // stroke(147, 217, 43, 255)
  // for (var w=1; w<= 6; w++) {
  //   line (0, w*wx, 10, w*wx)   // draw lines for week
  // }
  // pop()

  // push()
  // var mx = 71.43
  // translate(485, 0)
  // strokeWeight(2)
  // stroke(147, 217, 43, 255)
  // for (var m=1; m<= 6; m++) {
  //   line (0, m*mx, 15, m*mx)   // draw lines for month
  // }
  // pop()

}