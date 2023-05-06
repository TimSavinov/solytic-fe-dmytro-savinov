import gql from 'graphql-tag'

export const LOGIN_QUERY = gql`
  query loginQuery($email: String!, $password: String!) {
    allUsers(filter: { email: $email, password: $password }) {
      id
      Tokens {
        token
        token_type
      }
    }
  }
`

export const USER_QUERY = gql`
  query userQuery($id: ID!) {
    User(id: $id) {
      id
      email
    }
  }
`