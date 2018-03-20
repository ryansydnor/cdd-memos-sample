import { SchemaLink } from 'apollo-link-schema';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';


const typeDefs = gql`
type User {
  id: ID!
  createdAt: String!
  updatedAt: String!
}

type File {
  id: ID!
  createdAt: String!
  updatedAt: String!
  contentType: String!
  name: String!
  secret: String!
  size: Int!
  url: String!
}

type Todo {
  id: ID!
  text: String!
  complete: Boolean!
}

type Query {
  allTodoes: [Todo]
}

type Mutation {
  createTodo(text: String!, complete: Boolean!): Todo
  updateTodo(id: ID!, complete: Boolean!): Todo
}

`;

const mocks = {
  Query: () => ({
    allTodoes: () => [
      { 
        id: '1',
        text: 'omg',
        complete: false
      },
      {
        id: '2',
        text: 'two',
        complete: false
      }
    ]
  }),
  Mutation: () => ({
    createTodo: (root, { text, complete }) => ({ id: '3', text, complete }),
    updateTodo: (root, { id, complete }) => ({ id, complete })
  })
};

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema, mocks });

export const client = new ApolloClient({
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache()
});