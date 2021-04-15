const { gql } = require("apollo-server-express");

module.exports = gql`
    type Subject{
        id: ID!
        subjectName: String!
        createdAt: String!
        username: String!
    }
    type Query{
        getSubjects: [Subject]
    }
`