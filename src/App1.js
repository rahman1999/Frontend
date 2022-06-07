import React,{Fragment} from 'react';
import Login from './User/login'
import App from './Category/app'
import Protected from './Navbar/protected'
import Signup from './User/signup'
import Phonenum from './excer/phone'
import Navbar from './Navbar/navbar'
import Root from './Navbar/root'
import Home from './Home/home'
import Product from './Allproduct/products'
import SingleProduct from './Allproduct/singleproduct'
import Cancel from './Cart/cancel'
import Admin from './Admin/addproduct1'
import Order from './Order/order'
import  Cart from './Cart/cart'
import { gettoken }   from './tokenauth/auth';
import Logout from './User/logout'
import { Routes, Route} from 'react-router-dom'
import Editcategory from './Admin/editcategory';
import Addcategory from './Admin/addcategory';
import { useState } from 'react';
import Success from './Order/success';
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducer from './Reducer/productreducer'
import Test from './test'
import Role from './tokenauth/role';


const store = createStore(reducer, applyMiddleware(thunk));


const Routemodule=()=> {
  const log = (bool) =>{
    setnav(bool);
    console.log(bool)
  }
  const [nav,setnav] = useState(false);
  return (
    <>    

    {/* <Navbar store={store}></Navbar> */}

      <Routes>        

        {/* <Route path="/" element={<Root/>}> */}
      <Route path='/' element={<Role/>}>
      <Route path ="/login" element={<Login state={log} />} />
      <Route path ="/signup" element={<Signup />} />
        <Route element={<Protected token={gettoken}/>}> 
        <Route path="/logout" element={ <Logout /> } />
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/cate' element={<App store={store}/>} />
          <Route path="/product" element={<Product/>}/>
          <Route path='/admin' element={<Admin/>} />
          <Route path="/" element={<Home />} />

        </Route>      
        <Route path="/order" element={<Order/>}/>

        <Route path="/singleprod/:name" element={<SingleProduct/>}/>
        <Route path="/editcategory/:name" element={<Editcategory/>}/>
        <Route path ="/test" element={<Test store={store} />} />
        <Route path="/addcategory" element={<Addcategory/>}/>
      <Route path='/payment/cancel' element={<Cancel/>} />
      <Route path='/payment/success' element={<Success/>} />

      <Route path="/phone" element={<Phonenum/>}/>
</Route>
{/* </Route> */}
</Routes>
</>

  );
}

export default Routemodule;
