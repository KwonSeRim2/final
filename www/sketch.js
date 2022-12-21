let wave = [10];

let button = [10];

var playing0 = false
var playing1 = false
var playing2 = false
var playing3 = false
var playing4 = false
var playing5 = false
var playing6 = false
var playing7 = false
var playing8 = false
var playing9 = false

var slider;

let r, g, b;


function setup() {

  createCanvas(640, 480);

  //createCanvas(displaywidth, displayheight)

 
  slider = createSlider(0,10,10);
  slider.position(250, 400);
  
  //wave.start();
 
 for (let i = 0; i < 10; i++) {
   wave[i] = new p5.Oscillator();
   wave[i].setType('sine');

   
   button[i] = createButton(String.fromCharCode(65+i%7));
   button[i].position(120+80*(i%5),200+80*int(i/5));
   button[i].size(70,70);
   button[i].style('font-size', '30px');
   
  }

  button[0].mousePressed(toggle0);
  button[1].mousePressed(toggle1);
  button[2].mousePressed(toggle2);
  button[3].mousePressed(toggle3);
  button[4].mousePressed(toggle4);
  button[5].mousePressed(toggle5);
  button[6].mousePressed(toggle6);
  button[7].mousePressed(toggle7);
  button[8].mousePressed(toggle8);
  button[9].mousePressed(toggle9);

  r = random(50, 255);
  g = random(0,200);
  b = random(50,255);
  
}

 function draw() {
   background(r,g,b);

   for (let i = 0; i < 10; i++) {
   wave[i].amp(slider.value()/10);
   }

 }

function toggle0(){
  if(!playing0){
    wave[0].start();
    wave[0].freq(220);
    button[0].style("color", "#00b5e2")
    playing0 = true;
  } 
  else {
    wave[0].stop();
    button[0].style("color", "#000000")
    playing0 = false
  }
}function toggle1(){
  if(!playing1){
    wave[1].start();
    wave[1].freq(246.9417);
    button[1].style("color", "#00b5e2")
    playing1 = true;
  } 
  else {
    
    wave[1].stop();
    button[1].style("color", "#000000")
    playing1= false
  }
}
function toggle2(){
  if(!playing2){
    wave[2].start();
    wave[2].freq(261.6256);
    button[2].style("color", "#00b5e2")
    playing2 = true;
  } 
  else {
    wave[2].stop();
    button[2].style("color", "#000000")
    playing2 = false
  }
}
function toggle3(){
  if(!playing3){
    wave[3].start();
    wave[3].freq(293.6648);
    button[3].style("color", "#00b5e2")
    playing3 = true;
  } 
  else {
    wave[3].stop();
    button[3].style("color", "#000000")
    playing3 = false
  }
}
function toggle4(){
  if(!playing4){
    wave[4].start();
    wave[4].freq(329.6276);
    button[4].style("color", "#00b5e2")
    playing4 = true;
  } 
  else {
    wave[4].stop();
    button[4].style("color", "#000000")
    playing4 = false
  }
}
function toggle5(){
  if(!playing5){
    wave[5].start();
    wave[5].freq(349.2282);
    button[5].style("color", "#00b5e2")
    playing5 = true;
  } 
  else {
    wave[5].stop();
    button[5].style("color", "#000000")
    playing5 = false
  }
}
function toggle6(){
  if(!playing6){
    wave[6].start();
    wave[6].freq(391.9954);
    button[6].style("color", "#00b5e2")
    playing6 = true;
  } 
  else {
    wave[6].stop();
    button[6].style("color", "#000000")
    playing6 = false
  }
}
function toggle7(){
  if(!playing7){
    wave[7].start();
    wave[7].freq(440);
    button[7].style("color", "#00b5e2")
    playing7 = true;
  } 
  else {
    wave[7].stop();
    button[7].style("color", "#000000")
    playing7 = false
  }
}
function toggle8(){
  if(!playing8){
    wave[8].start();
    wave[8].freq(493.8833);
    button[8].style("color", "#00b5e2")
    playing8 = true;
  } 
  else {
    wave[8].stop();
    button[8].style("color", "#000000")
    playing8 = false
  }
}
function toggle9(){
  if(!playing9){
    wave[9].start();
    wave[9].freq(523.2511);
    button[9].style("color", "#00b5e2")
    playing9 = true;
  } 
  else {
    wave[9].stop();
    button[9].style("color", "#000000")
    playing9 = false
  }
}

 function deviceMoved(){
  r = map(accelerationX, -90, 90, 100, 175);
  g = map(accelerationY, -90, 90, 100, 200);
  b = map(accelerationZ, -90, 90, 100, 200);

}


