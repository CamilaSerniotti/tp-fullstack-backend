import mongoose from 'mongoose';

export async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/todoapp');
    console.log('📦 MongoDB conectado');
  } catch (err) {
    console.error('❌ Error al conectar a MongoDB:', err);
    process.exit(1); // corta el servidor si la DB falla
  }
}
