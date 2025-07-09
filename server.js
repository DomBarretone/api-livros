require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const livrosRoutes = require('./routes/livros.routes');

const app = express();

app.use(express.json());
app.use('/livros', livrosRoutes);

sequelize.sync().then(() => {
  console.log('Banco sincronizado!');
  app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
  });
}).catch((error) => {
  console.error('Erro ao conectar no banco:', error);
});
