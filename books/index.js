import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import User from './resolvers/User'
import Book from './resolvers/Book'
import Review from './resolvers/Review'

const server = new GraphQLServer({
    typeDefs: '../books/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        User,
        Book,
        Review
    },
    context: {
        db
    }
})

server.start(() => {
    console.log('The server is up!')
})