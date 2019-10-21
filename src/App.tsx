import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import action from './action';
import {stateSelector} from './reducer';
import User from './User';
import Checkbox from './CheckBox';
function App(props:any) {
  return (
    <div className="App">
	Title:{props.state.title} Body:{props.state.body}
	<br />
	status:{props.state.status}
	<br />
	
	<User />
	<br />
	<Checkbox />
    </div>
  );
}

const mapStateToProps = (state:any)=>{
	return{
		state:stateSelector(state)
	}
};

const mapDispatchToProps = (dispatch:any)=>{
	return {
		add:(state:any)=>dispatch(action.add(state)),
		sub:()=>dispatch(action.sub())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
