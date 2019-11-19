import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import action from './action';
//import { stateSelector } from './reducer';
//import TableCmp from './TableCmp';
import Home from './Home';
import UserList from './UserList';
interface IProps{
	state:any
}


const App:React.FC<IProps> = (props)=>{
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home {...props} />
				</Route>
				<Route exact path="/users">
					<UserList />
				</Route>
			</Switch>
		</Router>
	);
}

const mapStateToProps = (state:any)=>{
	return{
		state:state
	}
};

const mapDispatchToProps = (dispatch:any)=>{
	return {
		add:(state:any)=>dispatch(action.add(state)),
		sub:()=>dispatch(action.sub())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
