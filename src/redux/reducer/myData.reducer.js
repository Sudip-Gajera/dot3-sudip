import * as ActionType from "../ActionType";

const initState = {
    myData: []
}

export const dataReducer = (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionType.GET_DATA:
            return {
                ...state,
                myData: action.payload
            }
        case ActionType.ADD_DATA:
            return {
                ...state,
                myData: state.myData.concat(action.payload)
            }
        case ActionType.DELETE_DATA:
            return {
                ...state,
                myData: state.myData.filter((v) => v.id != action.payload)
            }
        case ActionType.UPDATE_DATA:
            return {
                ...state,
                myData: state.myData.map((v) => {
                    if(v.id === action.payload.id) {
                        return action.payload
                    }else{
                        return v
                    }
                })
            }
        default:
            return state;
    }
}