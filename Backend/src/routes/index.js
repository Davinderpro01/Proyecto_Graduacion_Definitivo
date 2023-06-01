const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
require("dotenv").config();

const router = express.Router();


function validarToken(req, res, next) {
    // Obtener el token de la cabecera de autorización
    const token = req.headers.authorization;
  
    try {
      // Verificar si el token existe
      if (!token) {
        return res.status(401).json({ message: 'Acceso no autorizado' });
      }
  
      // Verificar y decodificar el token
      const decodedToken = jwt.verify(token, process.env.claveSecreta);
  
      // Agregar el usuario decodificado al objeto de solicitud para usarlo en las rutas protegidas
      req.usuario = decodedToken;
  
      // Continuar con la siguiente función 
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Acceso no autorizado' });
    }
  }


router.post('/registro', async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El email ya está registrado' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      nombre,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('Error en el registro de usuario', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

router.post('/ingreso', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales de inicio de sesión inválidas' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales de inicio de sesión inválidas' });
    }

    const token = jwt.sign({ email: user.email }, process.env.claveSecreta, { expiresIn: '1h' });

    res.json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    console.error('Error en el inicio de sesión', error);
    res.status(500).json({ message: 'Error en el servidor' });
  } 
});

router.get('/perfil', validarToken, async (req, res) => {
  try {
    const usuario = req.usuario;

    const user = await User.findOne({ email: usuario.email }).exec();
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ message: 'Acceso autorizado a la ruta protegida', user });
  } catch (error) {
    console.error('Error al buscar el usuario en la base de datos', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

module.exports = router;
