import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';

import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';

const app = express();

// CORS
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// 🔥 Conectar a la base de datos
await connectDB();

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

app.listen(4000, () => console.log('API running on port 4000'));
