import { Router } from 'express';
import { createTask, getTasks, deleteTask, updateTask } from '../controllers/taskController.js';
import authMiddleware from '../middleware/auth.js';

const r = Router();

// Todas las rutas protegidas con token
r.use(authMiddleware);

r.post('/', createTask);
r.get('/', getTasks);

// 🔥 RUTA NUEVA: editar tarea (PUT)
r.put('/:id', updateTask);

r.delete('/:id', deleteTask);

export default r;

// PUT /tasks/:id - Editar una tarea
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    // Validaciones básicas
    if (!title && completed === undefined) {
      return res.status(400).json({ message: "No se enviaron cambios" });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true } // devuelve la tarea actualizada
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar la tarea",
      error: error.message,
    });
  }
});
