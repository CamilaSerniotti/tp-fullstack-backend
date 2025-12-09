export function success(res, data, status = 200) {
  return res.status(status).json({ ok: true, data });
}

export function error(res, message = "Error inesperado", status = 400) {
  return res.status(status).json({ ok: false, message });
}
