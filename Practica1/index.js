'use strict'

function dibuja(){



}

window.onload = function() {
	var canvas2 = document.getElementById("linea2");
		if (canvas2 && canvas2.getContext) {
		var ctx = canvas2.getContext("2d");
			if (ctx) {
				ctx.lineWidth =7;
				ctx.strokeStyle = "#f00";
				//dibuja la primera línea 
				ctx.beginPath();
				ctx.moveTo(500, 500);
				ctx.lineTo(200, 500);//x,y
				ctx.lineTo(230, 50);
				ctx.lineTo(500, 500);
                ctx.stroke();

                //punto interior
                //contexto.arc(X,Y,r,0,2*Math.PI);
                ctx.beginPath();
				ctx.moveTo(300, 400);
                ctx.arc(300,400,10,0,2*Math.PI);
                
                ctx.stroke();
				
                ctx.beginPath();
				ctx.moveTo(500, 500);
				ctx.lineTo(300, 400);//x,y
                ctx.stroke();

                ctx.beginPath();
				ctx.moveTo(200, 500);
				ctx.lineTo(300, 400);//x,y
                ctx.stroke();

                ctx.beginPath();
				ctx.moveTo(230, 50);
				ctx.lineTo(300, 400);//x,y
                ctx.stroke();

                //demas lineas


			}
		}
}