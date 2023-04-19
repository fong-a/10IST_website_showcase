//ChatGPT generated code to make stars, with a few changes
for (var i = 0; i < 200; i++) {
	var star = document.createElement("div");
	var time = Math.random() + 1;
	star.classList.add("star");
	star.style.left = Math.random() * window.innerWidth + "px";
	star.style.top = Math.random() * window.innerHeight + "px";
	star.style.setProperty('--animation-time', time +'s');//my changes to chatGPT code- randomized star flicker duration
	document.body.appendChild(star);
}


//history page svg generators

//random dust
for (var i = 0; i < 3000; i++) { 
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	var randomX = Math.floor(Math.random()*500 - 250).toString();
	var randomY = Math.floor(Math.random()*500 - 250).toString();
	var randomR = Math.floor(Math.random()*3 + 1).toString();
	document.getElementById("dustcloud").insertAdjacentHTML('beforeend', "<g transform=\"translate(" + randomX + ", " + randomY + ")\"><circle fill=\"#" + randomColor + "\" r=\"" + randomR + "\"/><g/>")
}


//collapsing dust
for (var i = 0; i < 1000; i++) {
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	var randomX = Math.floor(Math.random()*500 - 250).toString();
	var randomSpeed = (Math.random() * 2 + 1).toString();
	var randomR = Math.floor(Math.random()*6 + 1).toString();
	document.getElementById("groupingdust").insertAdjacentHTML('beforeend', "<g><AnimateTransform attributeName=\"transform\" atrributeType=\"XML\" type=\"rotate\" from=\"360\" to=\"0\" dur=\" " + randomSpeed + "s\" repeatCount=\"indefinite\"/><g transform=\"translate(" + randomX + ", 0)\"><circle fill=\"#" + randomColor + "\" r=\"" + randomR + "\"/><g/><g/>")
}

//formation of sun
for (var i = 0; i < 1000; i++) {
	var randomX = Math.floor(Math.random()*500 - 250).toString();
	var randomSpeed = (Math.random() * 2 + 1).toString();
	var randomR = Math.floor(Math.random()*6 + 1).toString();
	if (Math.abs(randomX) < 50){
		var randomColor = "FFFF00"
	}
	else{
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
	}
	document.getElementById("sunforming").insertAdjacentHTML('beforeend', "<g><AnimateTransform attributeName=\"transform\" atrributeType=\"XML\" type=\"rotate\" from=\"360\" to=\"0\" dur=\" " + randomSpeed + "s\" repeatCount=\"indefinite\"/><g transform=\"translate(" + randomX + ", 0)\" id=" + i.toString() + "><circle fill=\"#" + randomColor + "\" r=\"" + randomR + "\"/><g/><g/>")
}
document.getElementById("sunforming").insertAdjacentHTML('afterbegin', "<circle fill=\"#FFAA00\" r=\"50\" id=\"forming_sun\"/>")

//planets forming

for (var i = 0; i < 100; i++) {
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	var randomX = Math.floor(Math.random()*20 - 170).toString();
	var randomSpeed = (Math.random()*3+2).toString();
	var randomR = Math.floor(Math.random()*6 + 1).toString();
	document.getElementById("planetformation").insertAdjacentHTML('beforeend', "<g><AnimateTransform attributeName=\"transform\" atrributeType=\"XML\" type=\"rotate\" from=\"360\" to=\"0\" dur=\" " + randomSpeed + "s\" repeatCount=\"indefinite\"/><g transform=\"translate(" + randomX + ", 0)\"><circle fill=\"#" + randomColor + "\" r=\"" + randomR + "\"/><g/><g/>")
}
document.getElementById("planetformation").insertAdjacentHTML('afterbegin', "<circle fill=\"#FFAA00\" r=\"50\"/>")

const planetR = [4,5,5,6,10,9,6,6]
const planetColor = ["999999","FFCC00","002299","FF0000","FFAA55","FFAA66","AAFFFF","5555FF"]
const planetSpeed = [1,2,3,4,5,6,7,8]
const planetX = [80,90,100,130,200,210,230,250]

for (var i = 0; i < 8; i++) {
	var colour = planetColor[i];
	var x = planetX[i].toString();
	var speed = planetSpeed[i].toString();
	var r = planetR[i].toString();
	document.getElementById("planetformation").insertAdjacentHTML('beforeend', "<g><AnimateTransform attributeName=\"transform\" atrributeType=\"XML\" type=\"rotate\" from=\"360\" to=\"0\" dur=\" " + speed + "s\" repeatCount=\"indefinite\"/><g transform=\"translate(" + x + ", 0)\"><circle fill=\"#" + colour + "\" r=\"" + r + "\"/><g/><g/>")
}

//planet buttons

var selected_box

function showInfo(info) {
	var x = document.getElementById(info);
	if (x.style.display == "none") {
	  x.style.display = "grid";
	  if (selected_box != null){
		selected_box.style.display = "none";
	  }
	  selected_box = x;
	}
	else {
	  x.style.display = "none";
	  selected_box = null;
	}
  }

//satellite select menu

function nextMenu(menu) {
	var x = document.getElementById(menu);
	var new_x = document.getElementById((Number(menu)+1).toString());
	if (Number(menu) >= 3) {
		new_x = document.getElementById("0")
		x.style.display = "none"
	  	new_x.style.display = "block"
	}
	else {
	  x.style.display = "none";
	  new_x.style.display = "block"
	}
	document.getElementById("content_scroller").scrollTop = 0;
}

function prevMenu(menu) {
	var x = document.getElementById(menu);
	var new_x = document.getElementById((Number(menu)-1).toString());
	if (Number(menu) <= 0) {
		new_x = document.getElementById("3")
		x.style.display = "none"
	  	new_x.style.display = "block"
	}
	else {
	  x.style.display = "none";
	  new_x.style.display = "block"
	}
	document.getElementById("content_scroller").scrollTop = 0;
}

//missions

function voyager_show(){
	var voyager1 = document.getElementById("voyager1");
	var voyager2 = document.getElementById("voyager2");
	var pioneer10 = document.getElementById("pioneer10");
	var pioneer11 = document.getElementById("pioneer11");
	var galileo1 = document.getElementById("galileo1");
	var voyager_info = document.getElementById("voyager_info");
	var pioneer_info = document.getElementById("pioneer_info");
	var galileo_info = document.getElementById("galileo_info");
	voyager1.style.opacity = 1;
	voyager2.style.opacity = 1;
	pioneer10.style.opacity = 0;
	pioneer11.style.opacity = 0;
	galileo1.style.opacity = 0;
	voyager_info.style.display = "block"
	pioneer_info.style.display = "none"
	galileo_info.style.display = "none"
}

function pioneer_show(){
	var voyager1 = document.getElementById("voyager1");
	var voyager2 = document.getElementById("voyager2");
	var pioneer10 = document.getElementById("pioneer10");
	var pioneer11 = document.getElementById("pioneer11");
	var galileo1 = document.getElementById("galileo1");
	var voyager_info = document.getElementById("voyager_info");
	var pioneer_info = document.getElementById("pioneer_info");
	var galileo_info = document.getElementById("galileo_info");
	voyager1.style.opacity = 0;
	voyager2.style.opacity = 0;
	pioneer10.style.opacity = 1;
	pioneer11.style.opacity = 1;
	galileo1.style.opacity = 0;
	voyager_info.style.display = "none"
	pioneer_info.style.display = "block"
	galileo_info.style.display = "none"
}

function galileo_show(){
	var voyager1 = document.getElementById("voyager1");
	var voyager2 = document.getElementById("voyager2");
	var pioneer10 = document.getElementById("pioneer10");
	var pioneer11 = document.getElementById("pioneer11");
	var galileo1 = document.getElementById("galileo1");
	var voyager_info = document.getElementById("voyager_info");
	var pioneer_info = document.getElementById("pioneer_info");
	var galileo_info = document.getElementById("galileo_info");
	voyager1.style.opacity = 0;
	voyager2.style.opacity = 0;
	pioneer10.style.opacity = 0;
	pioneer11.style.opacity = 0;
	galileo1.style.opacity = 1;
	voyager_info.style.display = "none"
	pioneer_info.style.display = "none"
	galileo_info.style.display = "block"
}