# Component Driven Development with GraphQL and Apollo

This application intends to demonstrate a few things:

- The power of design systems `[material-ui](http://www.material-ui.com/)`
- The power of component systems (the separation of data fetching & presentational, as outlined by [dan abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0))
- The power of domain driven design based on a GraphQL schema

## Technology stack

This application integrates the following technologies:
- [Apollo Client 2.0](http://dev.apollodata.com) to communicate with GraphQL Server
- [Create React App](https://github.com/facebookincubator/create-react-app)
- [Material-UI](http://www.material-ui.com/)

## Install

First, clone the repo via git:

```bash
$ git clone https://github.com/ryansydnor/todo-apollo-v2-react.git
```

And then install dependencies:

```bash
$ npm install
```

And then run the dev server:

```bash
$ npm start
```

Navigate to `http://localhost:3000`. The app will automatically reload if you change any of the source files.


## GraphQL

This app is using a mock GraphQL endpoint by leveraging [Apollo's link-schema](https://www.npmjs.com/package/apollo-link-schema). 
This means all GraphQL related functionality is located within the `graphql` folder.

If you want to add new data, follow these steps:

1. Add a `typeDef` in `graphql/graphql.js`
2. Add to an existing `fragment` or `query` (or create a new one)
3. Ensure the `mocks` in `graphql/client.js` have an appropriate resolver
4. Update `graphql/mocks.js` with the data you'd like returned


