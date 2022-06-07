import axios from '../Interceptor/axios';
import { useEffect,useState } from "react"
import {useNavigate,Link,useParams} from 'react-router-dom'

const Editcategory = () =>{
    const navigate = useNavigate()

    const[category,setcategory] = useState([]);
    const[categoryname,setname] = useState();
    const[categoryid,setid]= useState();



const {name}=useParams()

useEffect(()=>{
   Edit(name)
},[])

function Edit(name){
        axios.get("/category/editcategory/"+name).then(res=>{
        console.log('getdata',res)
        setcategory(res.data.result);
        setname(res.data.result[0].category_name)
        setid(res.data.result[0].id)
    })
    .catch(err=>console.log(err));
}


const handleSubmit = async(e) =>{

    e.preventDefault();
    const formdata = new FormData();
        formdata.append('category_name',categoryname);
        formdata.append('id',categoryid);
        console.log('datas',categoryid)
        const response = await axios.post("/category/updatecategory",formdata);
        console.log(JSON.stringify(response.data));
        navigate("/admin");
}

return(
    
     <div className="d-flex justify-content-center align-items-center container ">  

<div className='col-md-6 col-md-offset-3'>
    <div className='card '>

    <div className='formContainer'>
        <form onSubmit={handleSubmit}>
            <h1>Edit Category</h1>
            <br/>
            <label>Category Id:</label>
            <br/>
            <input 
                type="number" 
                className="form-control"
                value={categoryid}
                onChange={(e)=>{setid(e.target.value)}} />
            <br />
            <label>Category Name:</label>
            <input 
                type="text"
                className="form-control"
                value={categoryname}
                onChange={(e)=>{setname(e.target.value)}} />  
            <br />
            <br/><br/>
            <button type="submit" className="form-control btn btn-primary">Submit</button>
            
        </form></div>
        </div></div>        </div>
)

}

export default Editcategory