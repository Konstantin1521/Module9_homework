const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`

const xmlDom = parser.parseFromString(xmlString, 'text/xml')

// Получение всех DOM-нод
let student = xmlDom.querySelectorAll('student');

let result = []

student.forEach(item => {
  result.push({
      name: item.querySelector('first').textContent + ' ' + item.querySelector('second').textContent,
      age: item.querySelector('age').textContent,
      prof: item.querySelector('prof').textContent,
      attr: item.querySelector('name').getAttribute('lang')
  })
});

console.log(result)