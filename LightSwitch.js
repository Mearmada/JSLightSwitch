var button = document.getElementById("button");

button.addEventListener("click", function(){
	if(button.innerHTML === "Lights Off") {
		document.body.classList.toggle("lightsOff");
		button.innerHTML = "Lights On";
	} else {
		document.body.classList.toggle("lightsOff");
		button.innerHTML = "Lights Off";		
	}
});
