import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const client = new ApolloClient({
    request: operation => {
        const token = localStorage.getItem('id_token');

        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    },
    uri: '/graphql'
});

function App() {

    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="App">
                    <Header />
                    <div className='container'>
                        <Switch>
                            
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
