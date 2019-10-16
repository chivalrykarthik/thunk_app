//export const stateSelector = (state: any) => ({ ...state });

let initialState = { a: 1, status: "COMPLETED", title: "", body: "" };
interface Action {
	type: string,
	data?: any
}
const reducer = (state = initialState, action: Action) => {
	let finalState;
	switch (action.type) {
		case "ADDUSER":
			finalState = { ...state, ...action.data };
			break;
		case "DONE":
			finalState = { ...state, status: "COMPLETED" };
			break;
		case "INPROGRESS":
			finalState = { ...state, status: "LOADING..." };
			break;
		case "ERROR":
			finalState = { ...state, status: "No Valid response" };
			break;
		default:
			finalState = state;
			break;
	}
	return finalState;
}

export default reducer;