const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});
