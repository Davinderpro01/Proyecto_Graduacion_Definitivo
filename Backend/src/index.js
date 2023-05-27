const express = require('express');
const cors = require('cors');
const conectarDB = require('./database');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());

conectarDB();

app.use('/', routes);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});





















































































// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const cors = require('cors');
// const jwt = require('jsonwebtoken');

// const app = express();
// const claveSecreta = 'secretKey';

// // Conectar a la base de datos de MongoDB
// mongoose
//   .connect('mongodb+srv://dsolorzanom1:Devin01@usuarios.ijnb0li.mongodb.net/Almacenar_usuarios?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Conexión exitosa a la base de datos');
//   })
//   .catch((error) => {
//     console.error('Error al conectar a la base de datos', error);
//   });

// // Definir el esquema del usuario
// const userSchema = new mongoose.Schema({
//   nombre: String,
//   email: String,
//   password: String,
// });

// // Crear el modelo de usuario
// const User = mongoose.model('User', userSchema);

// // Middleware para procesar datos en formato JSON
// app.use(express.json());
// app.use(cors());

// // Middleware para verificar el token de autenticación
// function validarToken(req, res, next) {
//   // Obtener el token de la cabecera de autorización
//   const token = req.headers.authorization;

//   try {
//     // Verificar si el token existe
//     if (!token) {
//       return res.status(401).json({ message: 'Acceso no autorizado' });
//     }

//     // Verificar y decodificar el token
//     const decodedToken = jwt.verify(token, claveSecreta);

//     // Agregar el usuario decodificado al objeto de solicitud para usarlo en las rutas protegidas
//     req.usuario = decodedToken;

//     // Continuar con la siguiente función de middleware
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Acceso no autorizado' });
//   }
// }

// // Ruta para el registro de usuarios
// app.post('/registro', async (req, res) => {
//   try {
//     const { nombre, email, password } = req.body;

//     // Verificar si el usuario ya existe en la base de datos
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'El email ya está registrado' });
//     }

//     // Generar el hash de la contraseña
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Crear un nuevo usuario en la base de datos
//     const newUser = new User({
//       nombre,
//       email,
//       password: hashedPassword,
//     });
//     await newUser.save();

//     res.status(201).json({ message: 'Usuario registrado correctamente' });
//   } catch (error) {
//     console.error('Error en el registro de usuario', error);
//     res.status(500).json({ message: 'Error en el servidor' });
//   }
// });

// // Ruta para el inicio de sesión de usuarios
// app.post('/ingreso', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Buscar al usuario en la base de datos por su email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Credenciales de inicio de sesión inválidas' });
//     }

//     // Verificar la contraseña
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Credenciales de inicio de sesión inválidas' });
//     }

//     // Generar el token de autenticación
//     const token = jwt.sign({ email: user.email }, claveSecreta, { expiresIn: '1h' });

//     // Autenticación exitosa
//     res.json({ message: 'Inicio de sesión exitoso', token });
//   } catch (error) {
//     console.error('Error en el inicio de sesión', error);
//     res.status(500).json({ message: 'Error en el servidor' });
//   }
// });

// // Ruta protegida que requiere autenticación
// app.get('/perfil', validarToken, async (req, res) => {
//   try {
//     // Obtener el usuario decodificado del token
//     const usuario = req.usuario;

//     // Hacer cualquier operación necesaria con el usuario autenticado
//     // Por ejemplo, buscar el usuario en la base de datos
//     const user = await User.findOne({ email: usuario.email }).exec();
//     if (!user) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }

//     // El usuario está autenticado y se puede acceder a la información protegida
//     res.json({ message: 'Acceso autorizado a la ruta protegida', user });
//   } catch (error) {
//     console.error('Error al buscar el usuario en la base de datos', error);
//     res.status(500).json({ message: 'Error en el servidor' });
//   }
// });

// // Iniciar el servidor
// app.listen(3000, () => {
//   console.log('Servidor iniciado en el puerto 3000');
// });

// index.js



