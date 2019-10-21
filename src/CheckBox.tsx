import React from 'react';
import {connect} from 'react-redux';
import action from './action';
import {stateSelector} from './reducer';
interface Props{
	state:{
		a:string,
		title:string,
		body:string,
		userList:[]
	},
	add:any,
	showUser(data:any):any
}

const tempArray = [
{
	id:1,
	value:"Post1"
},
{
	id:2,
	value:"Post2"
},
{
	id:3,
	value:"Post3"
},
{
	id:4,
	value:"Post4"
}

]
function UserList(props:any){
	return (
		<ul>
			{props.list.map((value:any)=>{
				return (
					<>
						<li>{value.title}</li>
					</>
				)
			})}
		</ul>
	)
}
class CheckBox extends React.Component<Props>{
	state = {checkedValues:[]}
	constructor(props:Props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount(){
		this.props.showUser(this.state.checkedValues);
	}
	handleChange(e:any){
		let checkBoxValue = e.target.value,
		checkAttr = e.target.checked;
		if(checkAttr){
			let checkboxAr : string[] = this.state.checkedValues.slice(0);
			checkboxAr.push(e.target.value);
			this.setState({checkedValues:checkboxAr},()=>{
				this.props.showUser(this.state.checkedValues);
			})		
		} else{
			let checkboxAr : string[] = this.state.checkedValues.slice(0);
			let index: number = checkboxAr.indexOf(checkBoxValue);
			checkboxAr.splice(index,1);
			this.setState({checkedValues:checkboxAr},()=>{
				this.props.showUser(this.state.checkedValues);
			})		
		}
		
	}
	render(){		
		return(
			<>
			{
			tempArray.map((value,key)=>(
					
						<span key = {key}>
							<input 
								type = "checkbox"
								name = "title"
								value = {value.id} 
								
								onChange = {this.handleChange}
							/> {value.value}							
						</span>
						
					
			))
			
			
			}
			
			<UserList list = {this.props.state.userList}/>
			
					
			</>
		)
	}
}

const mapStateToProps = (state:any)=>{
	return{
		state:stateSelector(state)
	}
};

const mapDispatchToProps = (dispatch:any)=>{
	return {
		add:(state:any)=>dispatch(action.add(state)),
		sub:()=>dispatch(action.sub()),
		showUser:(data:any)=>dispatch(action.showUser(data))
	}
};
export default connect(mapStateToProps,mapDispatchToProps)(CheckBox);
