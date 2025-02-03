const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const livrosRoutes = require('./routes/livros');
app.use('/livros', livrosRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
