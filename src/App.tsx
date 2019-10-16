import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import action from './action';
//import { stateSelector } from './reducer';
import User from './User';
function App(props: any) {
	return (
		<div className="App">
			Title: {props.state.title}
			<br />
			Body: {props.state.body}
			<br />
			status: {props.state.status}
			<hr />
			<User />
		</div>
	);
}

const mapStateToProps = (state: any) => {
	return {
		state: state
	}
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		add: (state: any) => dispatch(action.add(state))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);