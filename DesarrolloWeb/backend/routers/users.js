const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener todos los cursos
router.get('/cursos', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM cursos');
        res.json(rows);
        //console.log(rows[0].nombre_curso);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Registrar un usuario
router.post('/register', async (req, res) => {
    const { registro, nombre, apellido, correo, password } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO usuarios (registro, nombre, apellido, correo, password) VALUES (?, ?, ?, ?, ?)',
            [registro, nombre, apellido, correo, password]
        );
        res.json({ message: 'Usuario registrado', id: result[0].insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
