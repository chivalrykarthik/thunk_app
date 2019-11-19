export const stateSelector = (state:any) =>({...state});


let initialState = { a: 1, loading: false, title: "", body: "" };
interface Action {
	type: string,
	data?: any

}
const reducer = (state=initialState,action:Action)=>{
	let finalState;
	switch(action.type){
		case "ADDUSER":
			finalState = {...state,...action.data};
		break;
		case "SHOWUSER":		
			if(action.data instanceof Array)
				finalState = {...state,userList:action.data};
			else
				finalState = {...state,userList:[action.data]};
		break;
		case "SUB":
			finalState = {...state,a:state.a-1};
		break;
		case "DONE":
			finalState = { ...state, loading: false };
			break;
		case "INPROGRESS":
			finalState = { ...state, loading: true };
			break;
		case "ERROR":
			finalState = { ...state, loading: false };
			break;

		default:
			finalState = state;
		break;
	}
	return finalState;
}

export default reducer;
