import _ from "lodash"
import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchPostandUsers =()=>async (dispatch,getState)=>{
    await dispatch (fetchPosts());

    _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id)=>dispatch(fetchUser(id)))
    .value.apply();
};

export const fetchPosts = (id)=>async (dispatch)=>{
    const response = await jsonPlaceholder.get("/posts");
    dispatch({type:"FETCH_USER",payload:response.data})
}

export const fetchUser = (id)=>async (dispatch)=>{
    const response = await jsonPlaceholder.get(`/users ${id}`);
    dispatch({type:"FETCH_USER",payload:response.data})
}

