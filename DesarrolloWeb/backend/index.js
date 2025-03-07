const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Importar rutas
const userRoutes = require('./routers/users.js');
const postRoutes = require('./routers/posts.js');

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});


// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);

});
