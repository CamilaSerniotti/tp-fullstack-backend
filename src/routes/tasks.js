import { Router } from 'express';
import { createTask, getTasks, deleteTask, updateTask } from '../controllers/taskController.js';
// ✅ CORRECCIÓN CLAVE: Se usa './../' para mejorar la resolución de la ruta en Render.
import authMiddleware from './../middleware/auth.js'; 

const r = Router();

// Todas las rutas protegidas con token
r.use(authMiddleware);

r.post('/', createTask);
r.get('/', getTasks);

// Rutas que usan las funciones del Controller
r.put('/:id', updateTask); 
r.delete('/:id', deleteTask);

export default r;