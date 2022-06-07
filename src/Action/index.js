import axios from '../Interceptor/axios';



// export const fetchPosts = (posts) => {
//     return {
//       type: FETCH_POST,
//       posts
//     }
//   };
//   export const fetchData = () => {

//     return (dispatch) => {
//         return fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.json())
//             .then(json => dispatch(
//                 { type: "FetchData", data: json }))
//             .catch(err => dispatch(
//                 { type: "ERROR",msg: "Unable to fetch data" }))
//     }

// }
  export const fetchData = () => {
    return (dispatch) => {
      return axios.get('/category/relation')
  
      .then(json =>
         dispatch(
         { type: "FetchData", data: json }))
        .catch(err => dispatch(
          { type: "ERROR",msg: "Unable to fetch data" }))
    };
  };


  export const loginrole=(role)=>{
    return(dispatch)=>{
      dispatch(
        {type:'ROLE',payload:{roledata:role}}
      )
    }
  }