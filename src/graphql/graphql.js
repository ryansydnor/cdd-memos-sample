import gql from 'graphql-tag';

export const TODOS = gql`
  query todos {
    allTodos { id text complete }
  }
`

export const TODO = gql`
  query todo {
    todo(id: $id) {
      id
      text
      author {
        name
        url
        avatar {
          url
          height
          width
        }
      }
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo($text: String!) {
    createTodo(text: $text, complete: false) { id text complete }
  }
`

export const TOGGLE_TODO = gql`
  mutation toggleTodo($id: ID!, $complete: Boolean!) {
    updateTodo(id: $id, complete: $complete) { id complete }
  }
`



export const typeDefs = gql`
  type User {
    id: ID!
    createdAt: String!
    updatedAt: String!
  }

  type Todo {
    id: ID!
    text: String!
    complete: Boolean!
  }

  type Query {
    allTodos: [Todo]
  }

  type Mutation {
    createTodo(text: String!, complete: Boolean!): Todo
    updateTodo(id: ID!, complete: Boolean!): Todo
  }
`;