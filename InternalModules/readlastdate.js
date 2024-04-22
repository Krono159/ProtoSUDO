const fs = require('fs');
const path = require('path');

const lastLoggedDateFilePath = path.join(__dirname, 'lastLoggedDate.txt');

function readLastLoggedDate() {
    try {
        return fs.readFileSync(lastLoggedDateFilePath, 'utf8').trim();
    } catch (err) {
        return null;
    }
}

module.exports = readLastLoggedDate;
