export const test = function () {
	console.debug( "CLIIIIIIIIIIICK!" );
};

export const agregarPersona = function () {
	console.debug( "CLIIIIIIIIIIICK!" );
};

export const puntearMonto = function ( elmonto ) {
	let nuevomonto = String(elmonto).replaceAll(".", "").replaceAll(",", "");
	nuevomonto = Number(nuevomonto).toLocaleString("es-CL");
	return nuevomonto;
};
