import React, {Component} from 'react';
import { View, Text} from 'react-native';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyDU5kDu72xqtNoEAxUj8En_1lXTA7fbCME',
            authDomain: 'manager-c5bd9.firebaseapp.com',
            databaseURL: 'https://manager-c5bd9.firebaseio.com',
            projectId: 'manager-c5bd9',
            storageBucket: 'manager-c5bd9.appspot.com',
            messagingSenderId: '243287064536'
        };
        console.log("Connecting to firebase");
        firebase.initializeApp(config);
    }
    render(){
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                    <Router />
            </Provider>
        )
    }
}
export default App;