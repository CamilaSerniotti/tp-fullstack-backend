export function isEmpty(value) {
  return !value || value.trim() === "";
}

export function isEmail(value) {
  // Validación simple para trabajos prácticos
  const regex = /\S+@\S+\.\S+/;
  return regex.test(value);
}
