var now = new Date()
var currentDate = `${now.getFullYear()}-${('0'+(now.getMonth()+1)).slice(-2)}-${('0'+now.getDate()).slice(-2)}`

const INITIAL_STATE = {
  date: currentDate
}

function pickerReducer(state = INITIAL_STATE, action){
  switch (action.type) {
    case 'CHANGE': {
      return {
        ...state,
        date: action.payload
      }
    }
  }
  return state
}

export default pickerReducer;

