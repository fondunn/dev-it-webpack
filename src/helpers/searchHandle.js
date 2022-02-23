export const handleFilters = [
    {
        key: 'any',
        value: 'A-z',
        func: function resetFilter(arr){
            return arr.map(e => e)
        }
    },
    {
        key: 'male',
        value: 'A-z',
        func: function filterMale(arr){
            return arr.filter(person => person.gender === 'male')
        }
    },
    {
        key: 'female',
        value: 'A-z',
        func: function filterFemale(arr){
            return arr.filter(person => person.gender === 'female')
        }
    },
    {
        key: 'reservist',
        value: 'A-z',
        func: function filterReservist(arr){
            return arr.filter(person => {
                if(person.gender === 'male') {
                  if(person.age > 18 && person.age < 27) {
                    return person
                  }
                }
              })
        }
    },
    {
        key: 'A-z',
        value: 'A-z',
        func: function filterReservist(arr){
            console.log('A-z')
        }
    },
    {
        key: 'Z-a',
        value: 'A-z',
        func: function filterReservist(arr){
            console.log('Z-a')
        }
    },
]