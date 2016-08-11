import { INCREASE, DECREASE } from '../actions/count'

const initialState = {
  number: 1
}

export default function count(state = initialState, action) {

	switch (action.type) {
		case "INCREASE":
			return (
				{ number: state.number + 1 })
			
		case "DECREASE":
			return (
				{ number: state.number - 1 } 
			)
		default:
      		return state;
  	}
}