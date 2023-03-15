export const test = function () {
	console.debug( "CLIIIIIIIIIIICK!" );
};

export const agregarPersona = function () {
	console.debug( "CLIIIIIIIIIIICK!" );
};

export const puntearMonto = function ( elmonto ) {
	console.debug( `Monto Recibido ${elmonto}` );
	const nuevomonto = String(elmonto).replaceAll(".", "").replaceAll(",", "");
	console.debug( `Monto Nuevo: ${nuevomonto}` );
	console.debug( `Monto Recibido: ${elmonto}` );
	return Number(nuevomonto);
};
