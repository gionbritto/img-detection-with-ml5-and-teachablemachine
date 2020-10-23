// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// The video
let video;
let img;
// For displaying the label
let label = "";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/hlCTT1dd6/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
  img = loadImage('imgTest.jpg');
}


function setup() {
  createCanvas(640, 520);
  // Create the video
  //video = createCapture(VIDEO);
  //video.hide();
  // STEP 2: Start classifying
  image(img,0,0);
  //classifyVideo();
  classifyImage();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function classifyImage(){
  classifier.classify(img, gotResults);
}

function draw() {
  //background(0);

  // Draw the video
  //image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);
 


  // Draw the emoji
  //textSize(256);
  //text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  result = results[0].label;  
  resultado(result);
  //classifyVideo();
  classifyImage();
}

function resultado(classifierResult){
  switch(classifierResult){
    case 'ImagensAceitas':
      console.log('Imagem aceita com sucesso!');
    break;
    case 'ImagensNaoAceitasCortadas':
      console.log('Imagem no formato não aceito!');
    break;
    case 'ImagensNaoAceitasCinza':
      console.log('Imagem no formato não aceito!');
    break;
  }  
}