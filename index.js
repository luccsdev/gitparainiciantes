const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.status(200).send({ message: 'Olá mundo esse é meu repositorio clonado visual code remover.'})
})

app.listen(4001, () => {
    console.log('Api Inicianlizada na porta 4001');
})
