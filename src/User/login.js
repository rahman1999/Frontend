import React from 'react';
import axios from '../Interceptor/axios';
import { Link,useNavigate,useHistory,Navigate } from 'react-router-dom';
import {useFormik} from 'formik';
import { useDispatch } from 'react-redux';
import { loginrole } from '../Action/index'

import './login.css';





const Login=({state})=>{
    
    const navigate = useNavigate()
   const formik=useFormik({
        initialValues:{
            
            name:'',
            password:'',
            email:'',
        },
        validate:values=>{
            var errors={};
        if(!values.name){
            errors.name='Name is required'
        }else  if(!values.password){
            errors.password='Password is required'
        }else  if(!values.email){
            errors.email='Email is required'
        }
        return errors;
        },



    onChange:e=>{
        const{name,value}=e.target;
        this.setState({
            [name]:value
        })
    },

    onSubmit:(data)=>{
        console.log(data);
            axios.post('/user/login',data).then(res=>{
                console.log(JSON.stringify(res.data.usertoken));
                state(true)
                localStorage.setItem("token",JSON.stringify(res.data.usertoken));
                localStorage.setItem('Admin',res.data.role)
               navigate('/')

            })
            
    }
   })
    
        return(
            <div className="d-flex justify-content-center align-items-center container ">  

                    <div className='col-md-6 col-md-offset-3"'>
                    <div className="card" >
        <div className="card-body">
          <h1 >Login</h1>
<form onSubmit={formik.handleSubmit} autoComplete="off">
  <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control" placeholder="Enter name" name='name' 
    onChange={formik.handleChange}
            value={formik.values.name}/>
            {formik.errors.name?<div className='text-danger'>{formik.errors.name}</div>:null}
  </div>
  

  <div className="form-group">
    <label>Password</label>
    <input type="text" className="form-control" placeholder="Enter pasword"     name='password'

    onChange={formik.handleChange}
            value={formik.values.password}/>
                        {formik.errors.password?<div className='text-danger'>{formik.errors.password}</div>:null}

  </div>


  <div className="form-group">
    <label>Email</label>
    <input type="text" className="form-control" placeholder="Enter Email"  name='email'
    onChange={formik.handleChange}
            value={formik.values.email}/>
                        {formik.errors.email?<div className='text-danger'>{formik.errors.email}</div>:null}

  </div>
  <br></br>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/signup" className='alt'>New User</Link>

</form>
</div>
</div></div></div>
        )

}

export default Login;