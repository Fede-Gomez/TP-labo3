corregir = function() {
// contiene los puntos de radio	
	for(var i =0; i < vecUnico.length; i++){
		vecUnico[i].type = "image";
		vecUnico[i].src = "cruz.jpg";
		if(vecUnico[i].value == "si"){
			vecUnico[i].type = "image";
			vecUnico[i].src = "tilde.jpg";
		}
		if(vecUnico[i].checked){
			vecUnico[i].nextElementSibling.style.border = "1px dashed black";
			if(vecUnico[i].value == "si"){
				puntaje += 0.5;
			}
		}
	}
// contiene los puntos de checkbox		
	for(var i =0, cont = 0; i < vecMulti.length; i++){
		vecMulti[i].type = "image";
		vecMulti[i].src = "cruz.jpg";
		if(vecMulti[i].value == "si"){
			vecMulti[i].type = "image";
			vecMulti[i].src = "tilde.jpg";
		}
		if(vecMulti[i].checked){
			vecMulti[i].nextElementSibling.style.border = "1px dashed black";
			if(vecMulti[i].value == "si"){
				puntaje += 0.25;
				cont++;
			}
			if(cont == vecMulti.length/2){
				puntaje += 0.5;
			}
		}
	}
//												pintar todas las opciones en rojo para despues marcar solo en verde la opcion correcta
	for(var i = 0; i < vecTablaCant.length; i++){
		vecTablaCant[i].style.background ="#FB2F2F"
	}
//												pintar todas las opciones en rojo para despues marcar solo en verde la opcion correcta						
	for(var i = 0; i < vecTablaAlim.length; i++){
		vecTablaAlim[i].style.background ="#FB2F2F"
	}

	for(var i = 0, cont = 0; i < vecTablaCant.length; i++) {
		if(parseInt(vecTablaCant[i].value) === solTablaCant[i]){
			puntaje += 0.14;
			cont++;
			vecTablaCant[i].style.background = "#7FFB2F"
			//el if es para redondear el puntaje del punto
			if(cont == vecTablaCant.length){
				puntaje += 0.02;
			}
		}
	}
//					revela las respuestas correctas	
	document.getElementById("respCorrecTabla").style.display = "table-cell"; 	
	for(var i = 0; i<respTabla.length; i++){
		respTabla[i].style.display = "table-cell";
	}

	for(var i = 0, cont = 0; i < vecTablaAlim.length; i++){
		if(vecTablaAlim[i].value.toLowerCase() == solTablaAlim[i]){
			puntaje += 0.14;
			cont++;
			vecTablaAlim[i].style.background = "#7FFB2F"
			//el if es para redondear el puntaje del punto
			if(cont == vecTablaAlim.length){
				puntaje += 0.02;
			}
		}
	}
//												pintar todas las opciones en rojo para despues marcar solo en verde la opcion correcta
	for(var i = 0; i < vecOrdenImg.length; i++){
		for(var j = 0; j < vecOrdenImg.length; j++){
			vecOrdenImg[i].options[j].style.background = "#FB2F2F"								
		}
		vecSelecIma[i].style.background = "#7FFB2F"		
	}
	for( var i = 0, cont = 0; i < vecSelecIma.length; i++){
		if(vecSelecIma[i].selected){
			puntaje += 0.15;
			cont++;
			//el if es para redondear el puntaje del punto
			if(cont == vecSelecIma.length){
				puntaje += 0.1;
			}
		}
	}
//												pintar todas las opciones en rojo para despues marcar solo en verde la opcion correcta
	for(var i = 0; i < vecDef.length; i++){
		vecDef[i].style.background = "#FB2F2F";
	}
	for(var i = 0; i < vecDef.length; i++){
		if(vecDef[i].value.toLowerCase() == solDef[i]){
			puntaje++;
			vecDef[i].style.background = "#7FFB2F";
		}	
		respDef[i].style.display = "inline";
	}


alert("Hola " + document.getElementById("nombre").value + " te sacaste: " + Math.round(puntaje) + "\nAhora apareceran las correcciones, las opciones elegidas apareceran en un cuadrado punteado");
};
