const {
    readFileSync,
    writeFile
} = require('fs');
const path = require('path')
    // Libreria para firmar y hacer decode del token
const jwt = require('jsonwebtoken')

// Obteniendo llaves para firmar el token
const filePath = path.join(__dirname, '../keys/stage.pem');
const privateKey = readFileSync(filePath, 'utf8');

const timeInSeconds = 1800;

const payload = {
    _id: 21345589,
    encryptMessage: 'Hell world from JWT Token!',
    exp: Math.floor(Date.now() / 1000) + timeInSeconds,
}

const token = jwt.sign(payload, privateKey, {
    algorithm: 'RS256'
})

console.log('Token: ', token);

//Guardando tokenString en token.json
const tokenPath = path.join(__dirname, '/token.json');
writeFile(tokenPath, JSON.stringify({
    token: token
}), (err) => {
    if (err) throw err;
    console.log('File with token was created!')
})