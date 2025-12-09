import {
  getTasksByUser,
  createTask,
  deleteTaskById,
  updateTaskById
} from '../repositories/taskRepository.js';

// Obtener todas las tareas del usuario
export async function listUserTasks(userId) {
  return await getTasksByUser(userId);
}

// Crear una tarea con validación
export async function createUserTask(userId, title) {
  if (!title || title.trim() === "") {
    throw new Error("El título no puede estar vacío");
  }

  return await createTask(userId, title.trim());
}

// Editar tarea
export async function editTask(userId, taskId, newTitle) {
  if (!newTitle || newTitle.trim() === "") {
    throw new Error("El título no puede estar vacío");
  }

  return await updateTaskById(taskId, userId, newTitle.trim());
}

// Eliminar tarea
export async function removeTask(userId, taskId) {
  return await deleteTaskById(taskId, userId);
}

import Task from '../models/Task.js';

// Service para actualizar una tarea
export const updateTaskService = async (id, data) => {
  const { title, completed } = data;

  // Validación mínima dentro del service
  if (!title && completed === undefined) {
    throw new Error("No se enviaron datos para actualizar");
  }

  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { title, completed },
    { new: true }
  );

  if (!updatedTask) {
    throw new Error("Tarea no encontrada");
  }

  return updatedTask;
};
