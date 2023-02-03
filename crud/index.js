const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');

const MONGODB = "mongodb+srv://demo:Demo_123@cluster0.w2hpa44.mongodb.net/test?retryWrites=true&w=majority"

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const server = new ApolloServer({
    typeDefs,
    resolvers,
    persistedQueries: false, 
});

mongoose.connect(MONGODB, {useNewUrlParser:true})
    .then(() => {
        console.log("connected successfully");
        return server.listen({port:1234});

    })
    .then((res) => {
    console.log(`server is running at ${res.url}`);    
});