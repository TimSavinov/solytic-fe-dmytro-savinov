import { createApp, provide, h } from 'vue'

import App from './App.vue'
import './assets/scss/_main.scss'

import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from "@vue/apollo-option";

import router from "./router"

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: '<http://localhost:5000/graphql>',
})

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

const app = createApp({
    render: () => h(App),
  })

app.use(apolloProvider);
app.use(router);
app.mount('#app');
  