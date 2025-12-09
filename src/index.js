import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js'; // ✅ OK: Ruta relativa con extensión .js

import authRoutes from './routes/auth.js'; // ✅ OK: Ruta relativa con extensión .js
import taskRoutes from './routes/tasks.js'; // ✅ OK: Ruta relativa con extensión .js

const app = express();

// Middlewares
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// ------------------------------------------------------------------
// ✅ RUTA DE VERIFICACIÓN DE SALUD (HEALTH CHECK) PARA RENDER
// ------------------------------------------------------------------
app.get('/healthz', (req, res) => {
    // Render usará esta ruta simple para confirmar que el servidor Express está respondiendo.
    res.status(200).send('OK');
});

// Rutas de la API
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 4000;

// ✅ Arranque seguro para Render
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`🚀 API running on port ${PORT}`));
  } catch (error) {
    console.error('❌ Error connecting to DB:', error);
  }
};

startServer();