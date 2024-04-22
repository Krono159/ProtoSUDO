const fs = require('fs');
const path = require('path');
const getTime = require('./datetime.js');

// Directorio donde se almacenarán los archivos de registro
const logsDirectory = path.join('./logs/');

// Asegúrate de que el directorio de registros exista
if (!fs.existsSync(logsDirectory)) {
	fs.mkdirSync(logsDirectory);
}

// Función para escribir en el archivo de registro
function writeToLog(message, directory, logtype) {
	// Obtener el nombre base del archivo
	let logFileName = !directory || directory === 'index' ? `${getTime().slice(0, 10)}.log` : `${directory}_${getTime().slice(0, 10)}.log`;

	// Append log type to the file name if it's provided
	if (logtype) {
		logFileName = !directory || directory === 'index' ? `${getTime().slice(0, 10)}_${logtype.toUpperCase()}.log` : `${directory}_${logtype.toUpperCase()}_${getTime().slice(0, 10)}.log`;
	}


	const logFilePath = path.join(logsDirectory, logFileName);
	const logMessage = `[${getTime()}] ${message}\n`;

	fs.appendFile(logFilePath, logMessage, (err) => {
		if (err) {
			console.error('Error al escribir en el archivo de registro:', err);
		}
	});
}

// Exportar la función writeToLog para que esté disponible para otros módulos
module.exports = writeToLog;
