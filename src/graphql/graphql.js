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

export const MEMO_FRAGMENT = gql`
  fragment MemoFields on Memo {
    id
    text
    user {
      ...UserFields
    }
  }
  ${USER_FRAGMENT}
`;

export const MEMO = gql`
  query memo($id: ID!) {
    memo(id: $id) {
      body
      ...MemoFields
    }
  }
  ${USER_FRAGMENT}
  ${MEMO_FRAGMENT}
`;

export const MEMOS = gql`
  query memos {
    allMemos { 
      ...MemoFields
    }
  }
  ${MEMO_FRAGMENT}
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

  type Memo {
    id: ID!
    text: String!
    body: String!
    user: User
  }

  type Query {
    allMemos: [Memo]
    memo(id: ID!): Memo
  }
`;