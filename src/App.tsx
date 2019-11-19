import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import action from './action';
//import { stateSelector } from './reducer';
//import TableCmp from './TableCmp';
import TableCmp from './table/TableCmp';
import User from './User';
import Modal from './Modal';
interface IProps{
	state:any
}
const App:React.FC<IProps> = (props)=>{
	return (
		<div className="App">
			Title: {props.state.title}
			<br />
			Body: {props.state.body}
			
			
			<hr />
			<User />
			<hr />
			<TableCmp />
			
			
			{props.state.loading ? <Modal /> :  null}
			
		</div>
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
