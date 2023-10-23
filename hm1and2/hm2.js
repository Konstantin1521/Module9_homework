const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`

const data = JSON.parse(jsonString)

const listONE = data.list

let resArr = []

const resultOne = {
    name: listONE[0].name,
    age: listONE[0].age,
    prof: listONE[0].prof
}

const resultTwo = {
    name: listONE[1].name,
    age: listONE[1].age,
    prof: listONE[1].prof
}


resArr.push(resultOne)
resArr.push(resultTwo)
console.log(resArr)