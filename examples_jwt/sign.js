const { readFileSync } = require('fs');
const path = require('path')
// Libreria para firmar y hacer decode del token
const jwt = require('jsonwebtoken')

// Obteniendo llaves para firmar el token
const filePath = path.join(path.resolve('.'), 'keys', 'stage.txt');
const privateKey = readFileSync(filePath, 'utf8');

const payload = {
    _id: 2134,
    encryptMessage: 'Hell world from JWT Token!',
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
}

const token = jwt.sign(payload, privateKey)

console.log('key: ', privateKey);
console.log('Token: ', token);