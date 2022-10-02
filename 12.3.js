const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [
        {
          id: 14,
          name: "Houston",
          age: 21,
        },
      ],
      capacityLeft: 7,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 0,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

// 1. A method called “findPerson” takes two arguments, a type
// (either a student or teacher), and an id. It will return a
// particular object of that person.

function findPerson(type, id) {
  let filtered = school.teachers.find((object) => object.id === id);
  if (!filtered) {
    filtered = school.students.find((object) => object.id === id);
  }
  return filtered.age;
}
// console.log(findPerson("teachers", 13));

// 2. A method called “assignStudent” that takes two
// arguments, a student’s id and a subject. Assign all of the
// students to the first available teacher who teaches that
// subject and who is not in full capacity. If all of the teachers
// are in the full capacity log to the console “Sorry, no
// available teachers left”.

function assignStudent(id, subjects) {
  let res = school.teachers.find((teacher) => teacher.subjects > subjects);
  if (res.capacityLeft > 0) {
    res.students.push(school.students);
  } else {
    console.log("Sorry, no available teachers left");
  }
}

// 3. A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, and a new subject. Assign the
// new subject to that particular teacher if that subject
// doesn’t exist in their array of subjects.

function assignTeachersSubject(id, newSub) {
  let TEACHER = school.teachers.find((teacher) => teacher.id === id);
  TEACHER.subjects.includes(newSub)
    ? console.log("hhg")
    : TEACHER.subjects.push(newSub);
}

// 4. Create a new method for anything you want.
