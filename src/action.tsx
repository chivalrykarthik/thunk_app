import axios from 'axios';
const action = {
add:(data:any)=>{
	
	return (dispatch:any,getState:any)=>{
		dispatch({type:"INPROGRESS"});		
		axios({
		  method: 'post',		  
		  url:'https://jsonplaceholder.typicode.com/posts',
		  data: data
		})
		.then(function (response) {			
			dispatch({type:"SHOWUSER",data:response.data});
			dispatch({type:"DONE"});
		})
		.catch(function (error) {
			console.log(error);
		});
		
		
		
	}
},
sub:()=>{
	return (dispatch:any,getState:any)=>{
		dispatch({type:"INPROGRESS"})
		setTimeout(()=>{
			let {a} = getState();
			if(a<=0){
				dispatch({type:"ERROR"});				
			}else{				
			dispatch({type:"SUB"});
			dispatch({type:"DONE"});			
			}
		},1000)
		
		
	}
},
showUser:(data:any)=>{
	let useID = data[0];
	let url = 'https://jsonplaceholder.typicode.com/posts/'
	if(useID){
		url+=useID;
	}
	return (dispatch:any,getState:any)=>{
		dispatch({type:"INPROGRESS"});		
		axios({
		  method: 'get',		  
		  url:url,
		  data: data
		})
		.then(function (response) {			
			dispatch({type:"SHOWUSER",data:response.data});
			dispatch({type:"DONE"});
		})
		.catch(function (error) {
			console.log(error);
		});	
		
	}
}
};


export default action;
