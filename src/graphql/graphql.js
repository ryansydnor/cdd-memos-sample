import gql from 'graphql-tag';

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
    user {
      ...UserFields
    }
  }
  ${USER_FRAGMENT}
`;

export const TODO = gql`
  query todo($id: ID!) {
    todo(id: $id) {
      body
      ...TodoFields
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
    body: String!
    user: User
  }

  type Query {
    allTodos: [Todo]
    todo(id: ID!): Todo
  }
`;