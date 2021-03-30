

function calculateInsurance() {

	var calculation = document.getElementById("Country").value;

	switch (calculation) {
		case "Austria":
		cost= Math.ceil(Number(document.getElementById("horsepower_car").value)*100)/Math.ceil(Number(document.getElementById("age").value)+50);
			break;
		case "Hungary":
		cost= Math.ceil(Number(document.getElementById("horsepower_car").value)*120)/Math.ceil(Number(document.getElementById("age").value)+100)
			break;
		case "Greece":
		cost= Math.ceil(Number(document.getElementById("horsepower_car").value)*150)/Math.ceil(Number(document.getElementById("age").value+3)+50)
			break;
		default:
			cost = "No calculation";
	}

	cost = Math.ceil(cost);
	document.getElementById("Result").innerHTML = document.getElementById("name").value + ", your insurance costs " + cost + "€";
	
}






