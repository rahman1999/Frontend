import React from 'react';
import axios from '../Interceptor/axios';
import { Link,useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';


import './login.css';
const Signup=()=>{
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
            errors.Name='Name is required'
        }else  if(!values.password){
            errors.Password='Password is required'
        }else  if(!values.email){
            errors.Email='Email is required'
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
            axios.post('/user/signup',data).then(res=>{
                console.log(res);
                navigate('/login')
            })
    }
})
    
        return(
            <div className="d-flex justify-content-center align-items-center container ">  
                    <div className='col-md-6 col-md-offset-3"'>
                    <div className="card" >
        <div className="card-body">
          <h1 >Signup</h1>
<form onSubmit={formik.handleSubmit} autoComplete="off">
  <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control" placeholder="Enter name" name='name'
    onChange={formik.handleChange}
    value={formik.values.name}/>
    {formik.errors.Name?<div className='text-danger'>{formik.errors.Name}</div>:null}

  </div>
  

  <div className="form-group">
    <label>Password</label>
    <input type="text" className="form-control" placeholder="Enter pasword" name='password'
    onChange={formik.handleChange}
    value={formik.values.Password}/>
    {formik.errors.Password?<div className='text-danger'>{formik.errors.Password}</div>:null}
  </div>


  <div className="form-group">
    <label>Email</label>
    <input type="text" className="form-control" placeholder="Enter Email" name='email'
    onChange={formik.handleChange}
    value={formik.values.email}/>
    {formik.errors.Email?<div className='text-danger'>{formik.errors.Email}</div>:null}
  </div>

  <br></br>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/login" className='alt'>Already have an account? </Link>
</form>
</div>
</div></div></div>
        )

        
}
export default Signup;