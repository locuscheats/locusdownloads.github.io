if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){

	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "% cheat database", "% cheat databas", "% cheat databa", "% cheat datab", "% cheat data", "% cheat dat", "% cheat da", "% cheat d", "% cheat ", "% cheat", "% chea", "% che", "% ch", "% c", "% ch", "% che", "% chea", "% cheat", "% cheat", "% cheat ", "% cheat d", "% cheat da", "% cheat dat", "% cheat data", "% cheat datab", "% cheat databa", "% cheat databas", "% cheat database"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
