const accentRegEx = /[\u0300-\u036f]/g

export function removeAccents(str) {
  return str.normalize('NFD').replace(accentRegEx, '')
}
