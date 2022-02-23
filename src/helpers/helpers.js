export const searchByName = (arr, value) => {
  return arr.filter(person =>
    person.name.toLowerCase().includes(value)
  )
}

export const searchByGender = (arr, value) => {
  if (value === 'any') return arr
  if (value === 'army') {
    return arr.filter(person => {
      return (person.gender === 'male' && person.age >= 18 && person.age <= 27)
    })
  }
  return arr.filter(person => {
    return person.gender === value
  })
  
}

export const searchByLetter = (arr, value) => {
  if (value === 'any') return arr
  if (value === 'A-z') {
    const sorted = [...arr].sort((a, b) => {
      if (a.name.toLowerCase().slice(0, 1) < b.name.toLowerCase().slice(0, 1)) {
        return - 1
      }
      if (a.name.toLowerCase().slice(0, 1) > b.name.toLowerCase().slice(0, 1)) {
        return 1
      }
      return 0
    })
    return sorted
  }
  if (value === 'Z-a') {

    const sorted = [...arr].sort((a, b) => {
      if (b.name.toLowerCase().slice(0, 1) < a.name.toLowerCase().slice(0, 1)) {
        return - 1
      }
      if (b.name.toLowerCase().slice(0, 1) > a.name.toLowerCase().slice(0, 1)) {
        return 1
      }
      return 0
    })
    return sorted
  }
  
}