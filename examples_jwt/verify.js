const jwt = require('jsonwebtoken')
const path = require('path')
const {
    readFileSync
} = require('fs');

const filePath = path.join(__dirname, '../keys/certificate.pem');
const privateKey = readFileSync(filePath, 'utf8');
console.log(privateKey)
const {
    token
} = require('./token.json');

try {
    console.log('token: ', token)
    jwt.verify(token, privateKey, (err, decoded) => {
        if (err) throw err;
        console.log('decoded: ', decoded)
    });
} catch (err) {
    // err
    if (err) throw err;
}