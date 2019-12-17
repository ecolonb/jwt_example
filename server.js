
const app = require('./app.js')
const PORT = process.env.PORT || 2786


app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Server on http://localhost:' + PORT)
})