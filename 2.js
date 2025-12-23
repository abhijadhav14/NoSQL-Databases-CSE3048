
db.students.insertMany([
  {studentId: 1, name: 'Alex', age: 17, grade: 12, subject:"Math", marks: 85},
  {studentId: 2, name: 'Bella', age: 16, grade: 11, subject:"Math", marks: 78},
  {studentId: 3, name: 'Chris', age: 17, grade: 12, subject:"Science", marks: 92},
  {studentId: 4, name: 'Diana', age: 16, grade: 11, subject:"Science", marks: 88},
  {studentId: 5, name: 'Ethan', age: 17, grade: 12, subject:"Math", marks: 90}
  
]);

db.teachers.insertMany([
  {subject: "Math", teacher:"Mr.Smith"},
  {subject: "Science", teacher:"Ms.Johnson"}
]);




db.students.aggregate([
  {$match:{marks:{$gt:85}}}
  ])
  
  
  
  
db.students.aggregate([
  {
    $group:{
      _id:"$subject",
      averageMarks:{$avg:"$marks"},
      totalStudents:{$sum: 1}
    }
  }
  ])
  
  
  
db.students.aggregate([
  {
    $project:{
      _id: 0,
      name: 1,
      subject: 1,
      marks: 1
    }
  }
  ])  
  
  
  
db.students.aggregate([
  {$sort:{marks: -1}}
  ])
  
  
  
db.students.aggregate([
  {$sort:{marks: -1}},
  {$limit: 3}
  ])  
  
  
  
db.students.aggregate([
  {
    $addFields:{
      status:{
        $cond:{if:{$gte:["$marks",85]},then:"Pass", else:"Fail"}
      }
    }
  }
  ])  
  
  
  
db.students.aggregate([
  {$count: "totalStudents"}
  ])  
  
  
  
db.students.aggregate([
  {
    $lookup:{
      from:"teachers",
      localField:"subject",
      foreignField:"subject",
      as:"teacherDetails"
    }
  }
  ])  
  
  
db.students.aggregate([
  {$match:{marks:{$gte:85}}},
  {$out:"topStudents"}
])   
