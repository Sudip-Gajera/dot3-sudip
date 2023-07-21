import * as ActionType from "../ActionType";

export const getMyData = () => (dispatch) => {
    try {
        fetch("http://localhost:3004/my_data")
            .then((res) => res.json())
            .then((data) => dispatch({ type: ActionType.GET_DATA, payload: data }))
            .catch((err) => console.log(err))
    } catch (error) {
        console.log(error);
    }
}

export const addMyData = (data) => (dispatch) => {
    try{
        fetch("http://localhost:3004/my_data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => dispatch({ type: ActionType.ADD_DATA, payload: data }))
            .catch((err) => console.log(err))
    }catch(error){
        console.log(error);
    }
}

export const deleteMyData = (id) => (dispatch) => {
    try{
        fetch("http://localhost:3004/my_data/" + id, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(dispatch({ type: ActionType.DELETE_DATA, payload: id }))
            .catch((err) => console.log(err))
    }catch(error){
        console.log(error);
    }
}

export const updateMyData = (data) => (dispatch) => {
    try{
        fetch("http://localhost:3004/my_data/" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(dispatch({ type: ActionType.UPDATE_DATA, payload: data }))
            .catch((err) => console.log(err))
    }catch(error){
        console.log(error);
    }
}