import { axiosapi } from "./api/createAPI";
import { POST  , SIGNUP , LOGIN, ADD_PRODUCT } from "./CONSTANTS";
export const login = ( obj ) => {
     return axiosapi({
        method : POST,
        url    : LOGIN,
        data   : obj.data,
        headers: { 'Content-Type': 'application/json' }
    });
};


export const signUp = (obj) => {
    return axiosapi({
        method : POST,
        url    : SIGNUP,
        data   : obj.data,
        headers: { 'Content-Type': 'application/json' }
    })
}


export const addproduct = (obj) => {
    return axiosapi({
        method : POST,
        url    :ADD_PRODUCT ,
        data   : obj.data,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}


