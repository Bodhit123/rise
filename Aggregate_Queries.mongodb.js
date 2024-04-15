// db.getCollection("students").insertOne({
//   name: "Dhvanan",
//   age: 22,
//   subject: "maths",
//   college: "svnit",
//   hobbies: ["singing", "gaming"],
// });

// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("college");

// Create a new document in the collection.
db.students.updateOne(
  { college: "svit" },
  { $set: { scores: [20, 40, 30, 40] } }
);

//find average score of all student's scores in svit whose age less than 20.
db.students.aggregate([
  { $match: { age: { $lte: 20 } } },
  { $unwind: "$scores" },
  {
    $group: {
      _id: null,
      averageScore: {
        $avg: "$scores",
      },
    },
  },
]);

//find average score for all students in svit whose age less than 20 and sort result by name in descending.
db.students.aggregate([
  { $match: { age: { $lte: 20 } } },
  { $unwind: "$scores" },
  {
    $group: {
      _id: "$name",
      averageScore: {
        $avg: "$scores",
      },
    },
  },
  {
    $sort: { _id: -1 },
  },
]);

db.students.find({ college: "svit", age: { $lte: 20 } });

//aggregation pipeline is aimed at finding students from the college "svit" who have the hobby of "singing", and
//then grouping them by age and calculating the total scores of each age group and also total score per each age group.

db.students.aggregate([
  {
    $match: {
      college: "svit",
      hobbies: { $exists: true },
      hobbies: "singing",
    },
  },
  {
    $group: {
      _id: "$age",
      TotalNum_of_ScoresOfEachAgeGroup: { $sum: { $size: "$scores" } },
      TotalScore_perEachAgeGroup: { $sum: { $sum: "$scores" } }
    }
  },
]);

//unwind is easier
//If you want average to0 than follow this..
db.students.aggregate([
  {
    $match: {
      college: "svit",
      hobbies: { $exists: true },
      hobbies: "singing",
    },
  },
  {
    $unwind: "$scores",
  },
  {
    $group: {
      _id: "$age",
      TotalNum_of_ScoresOfEachAgeGroup: { $sum: 1 },
      TotalScore_perEachAgeGroup: { $sum: "$scores" },
    },
  },
  {
    $project: {
      _id: 1,
      TotalNum_of_ScoresOfEachAgeGroup: 1,
      TotalScore_perEachAgeGroup: 1,
      AverageScore_perEachAgeGroup: {
        $divide: [
          "$TotalScore_perEachAgeGroup",
          "$TotalNum_of_ScoresOfEachAgeGroup",
        ],
      },
    },
  },
  {
    $sort: { TotalScore_perEachAgeGroup: -1 },
  },
]);
