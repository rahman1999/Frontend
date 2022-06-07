const intialState = {
  product: null,
  category:null,
  product1: null,
  category1:null,
  product2: null,
  category2:null,
  Roledata:false,
  error: ""
}

// export const loginrole=(state=intialState,payload)=>{
// return {...state,Roledata:payload.payload.payload}
// }
const reducer = (state = intialState, action) => {

  switch (action.type) {
      
      case "FetchData":
        console.log(state)

          return { ...state, 
            product:action.data.data.result[0].categoryid,
          category:action.data.data.result[0].category_name,
          product1:action.data.data.result[1].categoryid,
          category1:action.data.data.result[1].category_name,
          product2:action.data.data.result[2].categoryid,
          category2:action.data.data.result[2].category_name,
          
          }

          case "ROLE":
            console.log(state)
            return{...state,
            Roledata:action.payload.roledata
            }

      case "ERROR":
          return { ...state, error: action.msg }
      default:
          return state
  }

}

export default reducer

