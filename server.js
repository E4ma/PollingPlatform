const functions = require("firebase-functions");
const admin = require("firebase-admin");

const { ApolloServer, gql } = require("apollo-server-express");
const http = require("http");
const express = require("express");
require("dotenv").config();

const serviceAccount = require("./functions/voting-539ec-firebase-adminsdk-kk1yr-1fae415d6d.json");

//initialize firebase
admin.initializeApp({
    //to work locally
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://voting-539ec-default-rtdb.firebaseio.com"
})

const cors = require("cors");
const path = require("path");

const { makeExecutableSchema } = require("graphql-tools");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");
const bodyParser = require("body-parser");

//express server
const app = express();

db();
app.use(cors());
app.use(bodyParser.json({ limit: "5mb" }));

//graphql server
const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, "./backend/typeDefs"))
);

//resolvers
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "./backend/resolvers"))
);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  //request and response as context
  context: ({ req, res }) => ({ req, res }),
  // Enable graphiql gui
  introspection: true,
  playground: true,
});

//integrate with express
apolloServer.applyMiddleware({ app, path: "/", cors: true });

const httpServer = http.createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen(process.env.PORT, function () {
    console.log(`🚀 Server is running at http://localhost:${process.env.PORT}`);
  });


