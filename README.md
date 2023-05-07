## Vue3 GraphQL login application

Vue3 frontend and GraphQL API mocked with json-graphql-server

User details for Login: email - user@name.com., password - password [or anything from  server_mock/graphql-server.json]

Login and User components covered with basic Unit tests [form validation, user info displaying]

## Required dependencies


- Node >= 14.20
- NPM >= 6.14

***

## Quick start

0. make sure you got node and npm of the required versions
1. Clone git repository
2. Run `npm install`
3. Run `npm run serve`
4. [in separate console TAB] start GrapgQL mocking server by `json-graphql-server ./server_mock/graphql-server.json --p 5000` 