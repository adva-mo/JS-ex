function gradeAssign(grade) {
  if (grade >= 90) {
    grade = "A";
  } else if ( grade >= 80) {
    grade = "B";
  } else if (grade >= 70) {
    grade = "C";
  } else if (grade >= 65) {
    grade = "D";
  } else {
    grade = "F";
  }
  return grade;
}

console.log(gradeAssign(65));