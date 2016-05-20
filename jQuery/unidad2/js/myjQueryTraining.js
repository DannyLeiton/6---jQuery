//Esto es como el window.onload()
$(document).ready(iniciar);

function iniciar(){
    $("#afrodita").dblclick(onAfrodita);
}


function onAfrodita(){
	$("#afrodita").css("background-image","url(../imagenes/damocles.jpg)");	
}