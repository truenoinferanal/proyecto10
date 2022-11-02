// Crea la variable de referncia del lienzo usando fabric.Canvas()

var canvas= new fabric.Canvas('myCanva');
pleyer_x=40;
pleyer_y=60;

block_image_width=30;
block_image_heigth=30;
var player_object = "";
var block_image_object = "";

function player_update(){
    fabric.img.fromURL("player.png",
    function(img){
    player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});


function new_image(get_image){
    fabric.Image.fromURL(get_image,
        function(Img){

        block_image_object = Img;
    
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_image_object);
    
        });
}
window.addEventListener("keyow", my_keydown);
function my_keydown(){
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("Se presiona p y shift al mismo tiempo");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("Se presiona m y shift al mismo tiempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}
if(keyPressed ==  '38'){
    up();
    console.log("up");
}
if(keyPressed ==  '40'){
    down();
    console.log(down);
}
}

//Define el ancho inicial y el alto del cloque de imágenes 


//Define el inicio de las coordenadas  y Y del jugador 



// Define una variable llamada player_object para almacenar la imagen del jugador


// Agrega una función llamada player_update() para agregar la imagen del jugador 







// Agrega una función llamada new_image() para agregar las diferentes imágene al presionar teclas específicas.

