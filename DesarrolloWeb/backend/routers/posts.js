const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Obtener todas las publicaciones
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM publicaciones ORDER BY fecha_creacion DESC');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crear una nueva publicación
router.post('/create', async (req, res) => {
    const { usuario_id, tipo, referencia, mensaje } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO publicaciones (usuario_id, tipo, referencia, mensaje, fecha_creacion) VALUES (?, ?, ?, ?, NOW())',
            [usuario_id, tipo, referencia, mensaje]
        );
        res.json({ message: 'Publicación creada', id: result[0].insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
