var canvas;
var music;
var blueb, greenb, orangeb, pinkb, box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(650,600);

    //create 4 different surfaces

    blueb = createSprite(50,600,150,50);
    blueb.shapeColor="blue";

    greenb = createSprite(220,600,150,50);
    greenb.shapeColor="green";

    orangeb = createSprite(390,600,150,50);
    orangeb.shapeColor="orange";

    pinkb = createSprite(580,600,150,50);
    pinkb.shapeColor="pink";

    //create box sprite and give velocity
    box = createSprite(random(20,750));
    box.shapeColor="red";
    box.velocityX=3;
    box.velocityY=3;
    box.scale=0.2;


  

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgeSprites();
    box.bounceOff(edges);

    if (blueb.isTouching(box) && box.bounceOff(blueb)){
        box.shapeColor="blue";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
}
if (greenb.isTouching(box) && box.bounceOff(greenb)){
box.shapeColor="green";
}
if (orangeb.isTouching(box) && box.bounceOff(orangeb)){
box.shapeColor="orange";
}
if (pinkb.isTouching(box) && box.bounceOff(pinkb)){
    box.shapeColor="pink";
    music.play();
}    
    //add condition to check if box touching surface and make it box

    drawSprites();
}

