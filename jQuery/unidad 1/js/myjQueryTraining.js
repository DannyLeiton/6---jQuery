//Esto es como el window.onload()
$(document).ready(iniciar);

function iniciar(){
    $("#hallo").click(resaltar); //Funciones de callback 
    $("#euterpe").click(onDisappear); 
    $("#cheers").click(onCheers);
    $("#afrodita").click(onAfrodita);
    $("#poseidon").click(onPoseidon);
    $("#zeus").click(onZeus);
    $("h2").click(colorado);
}

function resaltar() {
    $("#hallo").css("color","red");
    $("#hallo").css("background-color","yellow");
}

function onDisappear(){
	$("#euterpe").hide();
}

function onCheers(){
	if($("#Strings").text() == "")
		$("#Strings").text("Cheers ma fren!");
	else
		$("#Strings").text("");		
}

function onAfrodita(){
	//$(".afrodita").css("border","10px");	
	//$(".afrodita").css("border-style","dotted");
	//$(".afrodita").css("border-color","pink");
	
	$("img[height='100px']").css("border", "10px");
	$("img[height='100px']").css("border-color", "red");
}

function onPoseidon(){
	$(".poseidon").css("border","10px");	
	$(".poseidon").css("border-style","solid");
	$(".poseidon").css("border-color","brown");
}

function onZeus(){
	$(".zeus").css("border","10px");	
	$(".zeus").css("border-style","solid");
	$(".zeus").css("border-color","blue");
}

function colorado(){
	$("h2").css("color", "red");
	$("h2").css("font-size", "200%");
	//una etiqueta 2 en particular
	$(this).css("background-color","yellow");
}
