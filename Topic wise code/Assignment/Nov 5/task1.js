const student = {
    name: "John Doe",
    age: 20,
    grade: "A"
  };
  
  // 2. Read and display properties
  console.log("Student Name:", student.name);
  console.log("Student Age:", student.age);
  console.log("Student Grade:", student.grade);
  
  // 3. Update the grade property
  student.grade = "B+";
  console.log("Updated Grade:", student.grade);
  
  // 4. Delete the age property
  delete student.age;
  console.log("Student after deleting age:", student);
  