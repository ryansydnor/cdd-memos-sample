import { SchemaLink } from 'apollo-link-schema';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { typeDefs } from './graphql';
import { allTodos } from './mocks';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const mocks = {
  Query: () => ({
    allTodos: () => allTodos,
    todo: (root, { id }) => allTodos.find((x) => x.id.toString() === id)
  })
};

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema, mocks });

export const client = new ApolloClient({
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache()
});