import React from 'react';
// import Login from 'User/login'
import Login from 'Pages/login'
import App from 'Category/app'
import Protected from 'Navbar/protected'
// import Signup from 'User/signup'
import Signup from 'Pages/signup'
import Phonenum from 'excer/phone'
import Home from 'Home/home'
import Product from 'Allproduct/products'
import SingleProduct from 'Allproduct/singleproduct'
import Cancel from 'Cart/cancel'
import Admin from 'Admin/addproduct1'
// import Admin from 'Pages/addproduct'
import Order from 'Order/order'
import  Cart from 'Cart/cart'
import { gettoken }   from 'tokenauth/auth';
import Logout from 'User/logout'
import { Routes, Route} from 'react-router-dom'
import Editcategory from 'Admin/editcategory';
import Addcategory from 'Admin/addcategory';
import { useState } from 'react';
import Success from 'Order/success';
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from 'Reducer/productreducer'
import Role from 'tokenauth/role';
import {Login_Page,Signup_Page,Root,Logouturl,Cart_Page,Category_Page,Product_Page,
        Single_Product,Admin_Page,Edit_Category,Order_Page, Add_Category, Payment_Cancel, 
        Payment_Success,Phone} from './CONSTANTS'

const store = createStore(reducer, applyMiddleware(thunk));


const Routemodule=()=> {
  // const log = (bool) =>{
  //   setnav(bool);
  //   console.log(bool)
  // }
  // const [nav,setnav] = useState(false);
  return (
    <>    


      <Routes>        
      <Route path={Root} element={<Role/>}>
      <Route path ={Login_Page} element={<Login />} />
      <Route path ={Signup_Page} element={<Signup />} />
        <Route element={<Protected token={gettoken}/>}> 
        <Route path={Logouturl} element={ <Logout /> } />
        <Route path={Cart_Page} element={<Cart/>}/>
        <Route path={Category_Page} element={<App store={store}/>} />
          <Route path={Product_Page} element={<Product/>}/>
          <Route path={Admin_Page} element={<Admin/>} />
          <Route path={Root} element={<Home />} />

        </Route>      
        <Route path={Order_Page} element={<Order/>}/>
        <Route path={Single_Product} element={<SingleProduct/>}/>
        <Route path={Edit_Category} element={<Editcategory/>}/>
        <Route path={Add_Category} element={<Addcategory/>}/>
      <Route path={Payment_Cancel} element={<Cancel/>} />
      <Route path={Payment_Success} element={<Success/>} />
      <Route path={Phone} element={<Phonenum/>}/>
</Route>
</Routes>
</>

  );
}

export default Routemodule;
