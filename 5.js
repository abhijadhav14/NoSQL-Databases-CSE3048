db.Students.insertMany([
    {
        "name": "Amit",
        "age": 22,
        "course": "DMBS",
        "marks": 78,
        "skills": ["SQL", "MongoDB"],
        "attendance": 85
    },
]);

// 1. write a mongoDB query to increase the marks of all students by 5 using an update operator.
db.Students.updateMany(
    {},
    { $inc: { marks: 5 } }
);




// 2. Write a MongoDB query to add a new field "grade" with value "A" to all students who have marks greater than 80.
db.Students.updateMany(
    { marks: { $gt: 80 } },
    { $set: { grade: "A" } }
);

// 3. write a mongoDB query to add "Python" to the skills array of the student whose name is "Amit".(do not allow duplicates)
db.Students.updateOne(
    { name: "Amit" },
    { $addToSet: { skills: "Python" } }
);

// 4. write a mongoDB query to find students whose marks are greater than 70 and less than 90 using query operators.
db.Students.find(
    { marks: { $gt: 70, $lt: 90 } }
);

// 5. write a mongoDB query to display students enrolled in the "DMBS" course or "OS" courses.
db.Students.find(
    { course: { $in: ["DMBS", "OS"] } }
);

// 6. write a mongoDB query to find students who have "MongoDB" listed in their skills array

db.Students.find(
    { skills: "MongoDB" }
);

// Display the updated documents
db.Students.find().pretty();
