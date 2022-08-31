var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;

var engine, world;

//crie três matrizes - codigo na plataforma
var particles = [];
var plinkos =[];
var divisions = [];



var divisionHeight = 300;
var score = 0;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height, width, 20);

  //criar objetos de divisão

  for(var k=0; k <=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }



  //crie a 1ª linha de objetos plinko
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  //crie a 2ª linha de objetos plinko
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  //crie a 3ª linha de objetos plinko - 275
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }


  //crie a 4ª linha de objetos plinko - 375
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }


}

function draw() {
  background("black");

  textSize(20);

  Engine.update(engine);

  ground.display();

  //criar partículas em cada 60 quadros - codigo na plataforma
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30, width/2+30, 10,10)));
}

  //exibir os plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  //exibir as partículas
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  //exibir os divisões
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
}