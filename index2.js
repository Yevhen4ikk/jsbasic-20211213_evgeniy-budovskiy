function isValid(name) {
  return !!name && !name.includes(' ') && name.length >= 4;
}