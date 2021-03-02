
function setup() {
  // set the width & height of the sketch
  createCanvas(500, 500)

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()
  background(82, 179, 217)
  textFont("Nunito")
  textSize(12)
  textAlign(CENTER)

  translate(5, 5)
  fill (82, 165, 217)
  noStroke()
  rect(0, 0, 490, 490)


  push()
  translate(30, 30)
  stroke(0)
  strokeWeight(2)
  strokeJoin(ROUND)
  let year = map(now.progress.year, 0, 1, 0, 430)
  let season = map(now.progress.season, 0, 1, 0, 430)
  let mooon = map(now.progress.moon, 0, 1, 0, 430)
  let month = map(now.progress.month, 0, 1, 0, 430)
  let week = map(now.progress.week, 0, 1, 0, 430)
  let day = map(now.progress.day, 0, 1, 0, 430)
  fill (191, 33, 62)
  triangle(year, month, mooon, season, week, day)

  noStroke()
  fill(242, 229, 39)
  text(now.text.year, year-20, month-5)
  text(now.text.month, year-20, month+10)
  text("% Moon Phrase", mooon+20, season-5)
  text(now.text.season, mooon+20, season+10)
  text(now.text.weekday, week-10, day+15)
  text(now.text.day, week-10, day+30)


}