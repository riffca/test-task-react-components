// IMPORT PACKAGES

import React from 'react';
import { Provider } from 'react-redux';

// IMPORT STORE

import { createAppStore } from '../components/state/stores/AppStore';

// IMPORT COMPONENTS

import AppRouter from './routers/AppRouter';


// COMPONENT

export default class App extends React.Component {

	render(){
		return (
		    <Provider store={createAppStore()}>
		        <div className="main_wrap">
		            <AppRouter />
		        </div>
		    </Provider>
		);
	}

} 

	