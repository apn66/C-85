canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_img_array=["nasa_img_1.jpeg","nasa_img_2.jpg","nasa_img_3.jpg","nasa_img_4.jpg"];
randomnumber=Math.floor(Math.random()*4);
background_img=nasa_img_array[randomnumber];
console.log("background image="+background_img);
var rover_width=100;
var rover_height=90;
var rover_x=10;
var rover_y=10;
var rover_img="rover.png";

function add(){
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_img;

rover_imgTag=new Image();
rover_imgTag.onload=uploadrover;
rover_imgTag.src=rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='38') {
        up();
        console.log("up");
    }

    if (keypressed=='40') {
        down();
        console.log("down");
    }

    if (keypressed=='37') {
        left();
        console.log("left");
    }

    if (keypressed=='39') {
        right();
        console.log("right");
    }
}
function up(){
    if (rover_y >=0) {
        rover_y= rover_y-10;
        console.log("when up arrow is pressed,x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if (rover_y <=500) {
        rover_y= rover_y+10;
        console.log("when down arrow is pressed,x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left(){
    if (rover_x >=0) {
        rover_x= rover_x-10;
        console.log("when left arrow is pressed,x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right(){
    if (rover_x <=700) {
        rover_x= rover_x+10;
        console.log("when right arrow is pressed,x="+rover_x+"y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}