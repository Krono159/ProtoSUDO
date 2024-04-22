const { exec } = require('child_process');

function ping(url, callback) {
	const command = process.platform === 'win32' ? `ping ${url}` : `ping -c 4 ${url}`;

	exec(command, (error, stdout, stderr) => {
		if (error) {
			callback(error);
			return;
		}

		// Extraer la latencia de la salida
		const lines = stdout.split('\n');
		const latencyLine = lines[lines.length - 2]; // La penúltima línea contiene la información de latencia
		const latencyMatch = /\d+.\d+/.exec(latencyLine); // Buscar el número de la latencia en la línea

		if (latencyMatch) {
			const latency = parseFloat(latencyMatch[0]);
			callback(null, latency);
		}
		else {
			callback(new Error('No se pudo obtener la latencia. errorr desconocido.'));
		}
	});
}

module.exports = ping;
