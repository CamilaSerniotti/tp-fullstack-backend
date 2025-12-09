import { Router } from 'express';
// ✅ AJUSTE DE RUTA: Volvemos a un solo nivel ('../') para el Controller
import { createTask, getTasks, deleteTask, updateTask } from '../controllers/taskController.js'; 
// ✅ AJUSTE DE RUTA: Volvemos a un solo nivel ('../') para el Middleware
import authMiddleware from '../middleware/auth.js'; 

const r = Router();

// Todas las rutas protegidas con token
r.use(authMiddleware);

r.post('/', createTask);
r.get('/', getTasks);

// Rutas que usan las funciones del Controller
r.put('/:id', updateTask); 
r.delete('/:id', deleteTask);

export default r;