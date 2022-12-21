var wave

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


function setup() {

  createCanvas(640, 480);
  //createCanvas(displaywidth, displayheight)

  wave = new p5.Oscillator();
  wave.setType('sine');
  
  slider = createSlider(0,10,5);
  
  //wave.start();
  wave.freq(400);
  wave.amp(0);

 for (let i = 0; i < 10; i++) {
    
   button[i] = createButton(String.fromCharCode(65+i%7));
   button[i].position(100+40*i,100);
   button[i].size(40,40);

   
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


}

 function draw() {
  wave.amp(slider.value()/10);
 }

function toggle0(){
  if(!playing0){
    wave.start();
    wave.freq(220);
    playing0 = true;
  } 
  else {
    wave.amp(0,1);
    playing0 = false
  }
}function toggle1(){
  if(!playing1){
    wave.start();
    wave.freq(246.9417);
    wave.amp(0.5, 1);
    playing1 = true;
  } 
  else {
    
    wave.amp(0,1);
    playing1= false
  }
}
function toggle2(){
  if(!playing2){
    wave.start();
    wave.freq(261.6256);
    wave.amp(0.5, 1);
    playing2 = true;
  } 
  else {
    wave.amp(0,1);
    playing2 = false
  }
}
function toggle3(){
  if(!playing3){
    wave.start();
    wave.freq(293.6648);
    wave.amp(0.5, 1);
    playing3 = true;
  } 
  else {
    wave.amp(0,1);
    playing3 = false
  }
}
function toggle4(){
  if(!playing4){
    wave.start();
    wave.freq(329.6276);
    wave.amp(0.5, 1);
    playing4 = true;
  } 
  else {
    wave.amp(0,1);
    playing4 = false
  }
}
function toggle5(){
  if(!playing5){
    wave.start();
    wave.freq(349.2282);
    wave.amp(0.5, 1);
    playing5 = true;
  } 
  else {
    wave.amp(0,1);
    playing5 = false
  }
}
function toggle6(){
  if(!playing6){
    wave.start();
    wave.freq(391.9954);
    wave.amp(0.5, 1);
    playing6 = true;
  } 
  else {
    wave.amp(0,1);
    playing6 = false
  }
}
function toggle7(){
  if(!playing7){
    wave.start();
    wave.freq(440);
    wave.amp(0.5, 1);
    playing7 = true;
  } 
  else {
    wave.amp(0,1);
    playing7 = false
  }
}
function toggle8(){
  if(!playing8){
    wave.start();
    wave.freq(493.8833);
    wave.amp(0.5, 1);
    playing8 = true;
  } 
  else {
    wave.amp(0,1);
    playing8 = false
  }
}
function toggle9(){
  if(!playing9){
    wave.start();
    wave.freq(523.2511);
    wave.amp(0.5, 1);
    playing9 = true;
  } 
  else {
    wave.amp(0,1);
    playing9 = false
  }
}


