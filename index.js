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
