
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
  background('white')

  // set up typography & drawing-color
  textFont("Nunito") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(0)

  // draw the time string to the canvas
  text(now.text.date, 30, 400)
  text(now.text.time, 30, 450)


  // var box = 40
  var radius = 10
  var x = 10

  push()

  translate(50, 100)
  for (var i = 1; i <= 2; i++) {
    for (var j = 1; j <= 30; j++) {
      

      counter = (i - 1) * 30 + j
      if (counter == second()) {
        fill(255, 0, 125, 255)
      } else {
        fill(145, 145, 145, 80)
      }


      circle(x*j, x*i, radius)
      

      //text(counter, box * j, box * i)
    } 
  }
  pop()
  

}