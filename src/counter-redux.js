import { fromJS } from 'immutable'

const ADD = 'ADD'
const MINUS = 'MINUS'
const RESET = 'RESET'

export const addToCounter = () => (
  {
    type: ADD
  }
)

export const minusToCounter = () => (
  {
    type: MINUS
  }
)

export const resetCounter = () => (
  {
    type: RESET
  }
)

const defaultState = fromJS(
  {
    counter: 0
  }
)

const reducer = (state=defaultState, action={}) => {
  switch(action.type){
    case ADD:
      console.log("ADD")
      let newStateAdd = state.setIn(["counter"], state.getIn(["counter"])+1) 
      return newStateAdd
    case MINUS:
      console.log("MINUS")   
      let newStateMinus = state.setIn(["counter"], state.getIn(["counter"])-1) 
      return newStateMinus
    case RESET:
      console.log("RESET")
      return defaultState
    default:
      return state
  }
}

export default reducer