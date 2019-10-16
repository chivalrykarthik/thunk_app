import React from 'react';
import { connect } from 'react-redux';
import action from './action';
//import { stateSelector } from './reducer';
interface Props {
	state: {
		a: string,
		title: string,
		body: string
	},
	add: any
}
class User extends React.Component<Props>{
	state = { title: '', body: '' }
	constructor(props: Props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e: any) {
		let field: any = {};
		field[e.target.name] = e.target.value;
		this.setState((state: any) => {
			//state = {title:"test",body:"1234"};
			return { ...state, ...field };
		})
		//console.log(field.target.name)
	}
	render() {
		return (
			<>
				Title:<input
					type="text"
					name="title"
					value={this.state.title}
					onChange={this.handleChange}
				/>
				Body:<input
					type="text"
					name="body"
					value={this.state.body}
					onChange={this.handleChange}
				/>

				<button onClick={this.props.add.bind(this, this.state)}> Add</button>
			</>
		)
	}
}

const mapStateToProps = (state: any) => {
	return {
		state: state
	}
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		add: (state: any) => dispatch(action.add(state)),
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(User);