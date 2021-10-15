import React from 'react'
import AppRouter from './routers/AppRouter';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import 'jquery/dist/jquery';
import 'popper.js/dist/popper.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles/index.scss';

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider  client={client}>
      <AppRouter />
    </ApolloProvider>
  )
}

export default App
