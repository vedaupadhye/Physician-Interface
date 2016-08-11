import {LOGIN_START} from '../actions/login' 

const initialState={
	token:null,
	doctor_id:null,
	isFetching:false
}

export default function auth(state=initialState,action){
	switch(action.type){
		case "LOGIN_START":
			return(
				{
					isFetching:true,
					token:null,
					doctor_id:null
				}
				)
		case "LOGIN_SUCCESS":
			return(
			{
				isFetching:false,
				token:action.token,
				doctor_id:action.doctor_id
			})
		case "LOGIN_FAIL":
			return(
			{
				isFetching:false,
				token:null,
				doctor_id:null

			})	
		default:
			return state;	

	}
}