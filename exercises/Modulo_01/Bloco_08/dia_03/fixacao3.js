const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => listStudents.filter((student) => student !== name);

const newList = removeStudentByName('Wilson', arrayMyStudents);

console.log(newList);