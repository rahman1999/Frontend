import axios from '../Interceptor/axios';
import { useEffect,useState } from "react"
import {useNavigate,Link,useParams} from 'react-router-dom'

const Addcategory = () =>{
    const navigate = useNavigate()

    const[categoryname,setname] = useState();


const handleSubmit = async(e) =>{

    e.preventDefault();
    const formdata = new FormData();
        formdata.append('name',categoryname);
        console.log('datas',categoryname)
        const response = await axios.post("/category/addcategory",formdata);
        console.log(JSON.stringify(response.data));
        navigate("/admin");
}

return(
    
     <div className="d-flex justify-content-center align-items-center container ">  

<div className='col-md-6 col-md-offset-3'>
    <div className='card '>

    <div className='formContainer'>
        <form onSubmit={handleSubmit}>
            <h1>Add Category</h1>
            <br/><br/><br/>
            <label>Category Name:</label>
            <br/>
            <input 
                type="text"
                className="form-control"
                placeholder='Enter Category name'
                value={categoryname}
                onChange={(e)=>{setname(e.target.value)}} />  
            <br />
            <br/><br/>
            <button type="submit" className="form-control btn btn-primary">Submit</button>
            
        </form></div>
        </div></div>        </div>
)

}

export default Addcategory