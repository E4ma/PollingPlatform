//Relative Imports

//bring apollo server
const { ApolloServer } = require('apollo-server');
//needed for typedef
const gql = require('graphql-tag');
//connect to db
const mongoose = require('mongoose');

//Dependency Imports
const Subject = require('./models/Subject');
//bring mongodb connection string
const { MONGODB } = require('./config');

//type definition
const typeDefs = gql`
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


const resolvers = {
    Query: {
        async getSubjects() {
            //incase query fails
            try {
                const subjects = await Subject.find();
                return subjects;
            } catch (err) {
                throw new Error(err);
            }
        }
    }
};

//my apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

//mongoclient constructor. db connects + server starts
mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected')
        return server.listen({ port: 5000 });
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    })
