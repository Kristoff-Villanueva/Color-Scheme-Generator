let colorInput = document.getElementById("colorInput");
const test = document.getElementById("test");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const modeSelector = document.getElementById("modeSelector");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");
const color5 = document.getElementById("color5");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	let colorValue = colorInput.value.slice(1, 7);
	let scheme = modeSelector.value;
	fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${scheme}`)
		.then((res) => res.json())
		.then((data) => {
			color1.style.backgroundColor = data.colors[0].hex.value;
			color2.style.backgroundColor = data.colors[1].hex.value;
			color3.style.backgroundColor = data.colors[2].hex.value;
			color4.style.backgroundColor = data.colors[3].hex.value;
			color5.style.backgroundColor = data.colors[4].hex.value;
		});
});
