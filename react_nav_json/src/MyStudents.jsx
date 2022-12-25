let students = [
  {
    name: "itay",
    number: 1995,
    age: 12,
    img: "p1.jpg",
  },
  {
    name: "maya",
    number: 2000,
    age: 15,
    img: "p2.jpg",
  },
  {
    name: "aviel",
    number: 2003,
    age: 22,
    img: "p3.jpg",
  },
  {
    name: "shelly",
    number: 1997,
    age: 32,
    img: "p1.jpg",
  },
  {
    name: "yoed",
    number: 1998,
    age: 122,
    img: "p2.jpg",
  },
  {
    name: "jacob",
    number: 2005,
    age: 62,
    img: "p3.jpg",
  },
];

export function getStudents() {
  return students;
}

export function getStudent(name) {
  return students.find((stu) => stu.name === name);
}

export function deleteStudent(name) {
  students = students.filter((stu) => stu.name !== name);
}
