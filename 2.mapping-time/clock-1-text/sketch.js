
function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500)
  noStroke()
  
  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
  background(1, 4, 64)
  colorMode(RGB)

  textFont("Nunito") // ← check index.html to see how it was loaded from google-fonts
  textSize(50) // make it big
  textAlign(RIGHT)

  var radius = 10
  var x = 75
  var y = 45



  push()
  translate(10, 20)
  for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 10; j++) {
      
      timer = (i - 1) * 10 + j
      if (timer == hour()) {
        fill(242, 146, 29)
      } else {
        fill(28, 43, 89)
      }

      text(timer, x*i, y*j)  
    } 
  }
  pop()


  push()
  translate(10, 20)
  for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 10; j++) {
      
      timer = (i - 1) * 10 + j
      if (timer == minute()) {
        fill(3, 120, 166)
      } else {
        fill(28, 43, 89, 0)
      }

      text(timer, x*i, y*j)  
    } 
  }
  pop()


  push()
  translate(10, 20)
  for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 10; j++) {
      
      timer = (i - 1) * 10 + j
      if (timer == second()) {
        fill(119, 179, 217)
      } else {
        fill(28, 43, 89, 0)
      }

      text(timer, x*i, y*j)
    } 
  }
  pop()

}