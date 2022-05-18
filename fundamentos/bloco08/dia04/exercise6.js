const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const nameAndAverage = students.map((student, index) => ({
      ['name']: student,
      ['average']: (grades[index].reduce((acc, number) => acc + number) / grades[index].length)
  }))

  return nameAndAverage;
}

console.log(studentAverage())