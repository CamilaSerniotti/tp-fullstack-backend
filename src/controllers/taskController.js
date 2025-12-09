// Editar tarea (PUT)
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    // Validación básica
    if (!title && completed === undefined) {
      return res.status(400).json({ message: "No se enviaron datos para actualizar" });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true } // devuelve el documento actualizado
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar la tarea",
      error: error.message,
    });
  }
};

