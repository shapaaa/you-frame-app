import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import GlobalStyle from './styles/globalStyle';
import { ApolloProvider } from "@apollo/react-hooks";
import {client} from './apollo-client';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <GlobalStyle/>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
