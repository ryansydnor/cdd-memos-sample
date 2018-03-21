import gql from 'graphql-tag';

export const ADD_TODO = gql`
  mutation addTodo($text: String!) {
    createTodo(text: $text, complete: false) { id text complete }
  }
`;

export const TOGGLE_TODO = gql`
  mutation toggleTodo($id: ID!, $complete: Boolean!) {
    updateTodo(id: $id, complete: $complete) { id complete }
  }
`;

export const AVATAR_FRAGMENT = gql`
  fragment AvatarFields on Avatar {
    url
  }
`;

export const USER_FRAGMENT = gql`
  fragment UserFields on User {
    id
    name
    url
    avatar {
      ...AvatarFields
    }
  }
  ${AVATAR_FRAGMENT}
`;

export const TODO_FRAGMENT = gql`
  fragment TodoFields on Todo {
    id
    text
    complete
  }
`;

export const TODO = gql`
  query todo($id: ID!) {
    todo(id: $id) {
      ...TodoFields
      user {
        ...UserFields
      }
    }
  }
  ${USER_FRAGMENT}
  ${TODO_FRAGMENT}
`;

export const TODOS = gql`
  query todos {
    allTodos { 
      ...TodoFields
    }
  }
  ${TODO_FRAGMENT}
`


export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    url: String!
    avatar: Avatar
  }

  type Avatar {
    url: String!
  }

  type Todo {
    id: ID!
    text: String!
    complete: Boolean!
    user: User
  }

  type Query {
    allTodos: [Todo]
    todo(id: ID!): Todo
  }

  type Mutation {
    createTodo(text: String!, complete: Boolean!): Todo
    updateTodo(id: ID!, complete: Boolean!): Todo
  }
`;