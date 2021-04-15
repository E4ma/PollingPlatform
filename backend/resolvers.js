const { testSubjects } = require("./testSubjects");

const totalSubjects = () => testSubjects.length;

const getSubjects = async (parent, args, { req }) => {
  //incase query fails
  try {
    const subjects = await testSubjects.find();
    return subjects;
  } catch (err) {
    throw new Error(err);
  }
};

//mutation
const newSubject = (parent, args, context) => {
    //create new post object
    // console.log(args.input);
    // const { title, description } = args.input;
  
    const subject = {
      id: subject.length + 1,
      // title,
      // description,
      ...args.input,
    };
  
    subjects.push(subject);
    return subject;
  };
  
  module.exports = {
    Query: {
      totalSubjects,
      getSubjects,
    },
  
    Mutation: {
      newSubject,
    },
  };