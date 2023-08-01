const express = require('express')

const app = express()

app.set('views', /** Pasta raiz + view */)

app.listen(3000, function() {
    console.log('A')
});