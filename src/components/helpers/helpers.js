export const searchBy = (arr, val) => {
  const ch = arr.filter(user => user.name.toLowerCase().includes(val))
  return ch.map(c => {
    if (c) return c
  })
}