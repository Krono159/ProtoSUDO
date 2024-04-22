// datetime.js

// Función para obtener la fecha y hora actual en GMT-5
function getTime() {
	const now = new Date();
	// Offset de GMT-5
	const utcOffset = 0;
	// Ajuste de utcOffset en milisegundos
	const utcOffsetMilliseconds = utcOffset * 60 * 60 * 1000;
	const gmtMinus5 = new Date(now.getTime() + utcOffsetMilliseconds);
	const year = gmtMinus5.getFullYear();
	const month = String(gmtMinus5.getMonth() + 1).padStart(2, '0');
	const day = String(gmtMinus5.getDate()).padStart(2, '0');
	const hour = String(gmtMinus5.getHours()).padStart(2, '0');
	const minute = String(gmtMinus5.getMinutes()).padStart(2, '0');
	const second = String(gmtMinus5.getSeconds()).padStart(2, '0');
	return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

// Exportar la función getTime para que esté disponible para otros módulos
module.exports = getTime;
