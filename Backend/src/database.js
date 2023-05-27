const mongoose = require('mongoose');

async function conectarDB() {
  try {
    await mongoose.connect('mongodb+srv://dsolorzanom1:Devin01@usuarios.ijnb0li.mongodb.net/Almacenar_usuarios?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos', error);
  }
}

module.exports = conectarDB;
