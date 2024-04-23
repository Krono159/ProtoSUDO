// killswitch.js

const { exec } = require('child_process');

function AKS() {
	exec('killon', (error, stdout, stderr) => {
		if (error) {
			console.error('Error:', error.message);
			interaction.reply('cant exec');
			return;
		}
		if (stderr) {
			console.error('Error en la salida estándar:', stderr);
			return;
		}
		console.log('Comando ejecutado con éxito:', stdout);
	});
}

module.exports = AKS;
