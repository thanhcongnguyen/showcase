import React from 'react'
import ReactDOM from 'react-dom'

// import react-router
import { HashRouter as Router } from 'react-router-dom'

// import components
import { Header } from 'Components/headers'
import { Main } from 'Components/mains'
import { Footer } from 'Components/footers'

// import apollo
import { ApolloProvider } from 'react-apollo'
import ApolloClient, { createNetworkInterface } from 'apollo-client';

// import redux-form
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


// define rootReducer
const rootReducer = combineReducers({
  form: formReducer 
})

// define endpoint
const networkInterface = createNetworkInterface({
    uri: '/graphql'
})

const client = new ApolloClient({
    networkInterface: networkInterface
})


// define store
const store = createStore(rootReducer)

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <ApolloProvider store={store} client={client} >
        <App/>
    </ApolloProvider>,
    document.getElementById('root')
)
