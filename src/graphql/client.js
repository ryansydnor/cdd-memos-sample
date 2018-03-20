import { SchemaLink } from 'apollo-link-schema';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { typeDefs } from './graphql';
import { todo1, todo2, allTodos } from './mocks';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const mocks = {
  Query: () => ({
    allTodos: () => allTodos,
    todo: (root, { id }) => allTodos.find((x) => x.id === id)
  }),
  Mutation: () => ({
    createTodo: (root, { text, complete }) => {
      const newTodo = {
        id: allTodos.length + 1,
        text,
        complete
      };
      allTodos.push(newTodo);
      return newTodo;
    },
    updateTodo: (root, { id, complete }) => ({ id, complete })
  })
};

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema, mocks });

export const client = new ApolloClient({
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache()
});