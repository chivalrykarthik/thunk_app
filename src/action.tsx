import axios from 'axios';

const addUser = (data: any) => {
	return axios({
		method: 'post',
		url: 'https://jsonplaceholder.typicode.com/posts',
		data: data
	});
}
const action = {
	add: (data: any) => {
		return async (dispatch: any, getState: any) => {
			dispatch({ type: "INPROGRESS" });
			try {
				let response = await addUser(data);
				dispatch({ type: "ADDUSER", data: response.data });
				dispatch({ type: "DONE" });
			} catch (e) {
				console.log(e)
				dispatch({ type: "ERROR" });
			}
		}
	}
};


export default action;