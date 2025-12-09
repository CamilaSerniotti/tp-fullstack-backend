// repositories/taskRepository.js
import Task from '../models/Task.js';

// Crear tarea
export function createTaskDB(data) {
    return Task.create(data);
}

// Obtener tareas por usuario
export function getTasksDB(userId) {
    return Task.find({ userId });
}

// Actualizar tarea
export function updateTaskDB(id, userId, data) {
    return Task.findOneAndUpdate(
        { _id: id, userId },
        data,
        { new: true } // devuelve la tarea actualizada
    );
}

// Eliminar tarea
export function deleteTaskDB(id, userId) {
    return Task.findOneAndDelete({ _id: id, userId });
}
