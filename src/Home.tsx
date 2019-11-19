import React from 'react';
import TableCmp from './table/TableCmp';
import User from './User';
import Modal from './Modal';
interface IProps{
	state:any
}
const Home:React.FC<IProps> = props=>{
	return(
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
	)
}


export default Home;