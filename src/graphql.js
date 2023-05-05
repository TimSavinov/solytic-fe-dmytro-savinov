import gql from 'graphql-tag'

export const LOGIN_QUERY = gql`
  query loginQuery($email: String!, $password: String!) {
    allUsers(filter: { email: $email, password: $password }) {
      id
      Tokens {
        token
      }
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    allUsers(filter: { email: $email, password: $password }) {
      id
      Tokens {
        token
      }
    }
  }
`