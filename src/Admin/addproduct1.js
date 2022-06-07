import axios from '../Interceptor/axios';
import { useEffect,useState } from "react"
import {useNavigate,Link} from 'react-router-dom'
import  './add.css'

const Admin = () =>{


    const navigate = useNavigate()

    const[image,setimage] = useState()
    const[name,setname] = useState()
    const[price,setprice] = useState()
    const[product_id,setid] = useState()
    const[product,setproduct] = useState([]);
    const[productOrderdata,setOrderdata] = useState([]);
    const[productOrder,setOrder] = useState();
    const[category,setcategory] = useState([]);
    const[user,setuser] = useState([]);
    const[id,setedit] = useState()





    useEffect(()=>{
        productdata();
        categorydata()
        userdata()
        dataorder()
        // editdata();
    },[])
    console.log(product)
    const productdata = async () => {
        await axios.get("/product/getproduct").then(res=>{
            console.log('getdata',res)
            setproduct(res.data.result);
        })
        .catch(err=>console.log(err));
    }

    const dataorder = async () => {
        await axios.get("/product/ordering").then(res=>{
            console.log('getdata',res)
            setOrderdata(res.data.result);
        })
        .catch(err=>console.log(err));
    }


    const categorydata = async () => {
        await axios.get("/category/getcategory").then(res=>{
            console.log('getdata',res)
            setcategory(res.data.result);
        })
        .catch(err=>console.log(err));
    }




    const userdata = async () => {
        await axios.get("/user/getuser").then(res=>{
            console.log('getdata',res)
            setuser(res.data.result);
        })
        .catch(err=>console.log(err));
    }



    function delcategory(id){
        axios.post('/category/delcategory/'+id).then(res=>{
            console.log('response',res.data.result)
            categorydata();
        })
     }



    function deldata(id){
        axios.post('/product/delproduct/'+id).then(res=>{
            console.log('response',res.data.result)
            productdata();
        })
     }



     function deluser(id){
        axios.post('/user/deluser/'+id).then(res=>{
            console.log('response',res.data.result)
            userdata();
        })
     }


     function editdata(data){
         console.log('editdata',data)
        setname(data.product_name)
        setimage(data.product_image)
        setprice(data.product_price)
        setid(data.product.id)
        setedit(data.id)

     }

function editorder(value){
    // productOrderdata.map((item,index)=>{
    // if(orderid==index){
console.log(value)
setOrder(value)
console.log(productOrder)

    // }
// })
}
function reorder(value,updateid){
    console.log(value,updateid)
    axios.post('/product/updateorder',{"id":updateid,"product_order":value}).then(res=>{
        console.log('response',res)
    })
            // dataorder();
    window.location.reload()

}
    const handleSubmit = async (e) =>{

        e.preventDefault();
        if(id){
console.log('editproduct')
const formdata = new FormData();
        formdata.append('image',image);
        formdata.append('name',name);
        formdata.append('price',price);
        formdata.append('product_id',product_id);
        formdata.append('id',id)
        console.log('alldata',image,name,price,product_id,id);
        const response = await axios.post("/product/updateproduct",
        formdata ,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
        );
    
        console.log(JSON.stringify(response.data));
        navigate("/product");
        }else{
        console.log('addproduct')
        
        const formdata = new FormData();
        formdata.append('image',image);
        formdata.append('name',name);
        formdata.append('price',price);
        formdata.append('product_id',product_id);
        console.log(image,name,price,product_id);
    
        const response = await axios.post("/product/addproduct",
        formdata ,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
        );
    
        console.log(JSON.stringify(response.data));
        navigate("/product");

        }
    }

    return(
        <>
      
         <div className="d-flex justify-content-center align-items-center container ">  

<div className='col-md-6 col-md-offset-3'>
        <div className="card-body">
            <div className='card'>
        <div className='formContainer'>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <h1>Add Product</h1>
                
                <input 
                    type="text" 
                    className="form-control"
                    placeholder='Enter product name'
                    value={name}
                    onChange={(e)=>{setname(e.target.value)}} />
                <br />
                <input 
                    type="number"
                    className="form-control"
                    placeholder="Enter Product price"
                    value={price}
                    onChange={(e)=>{setprice(e.target.value)}} />  
                <br />
                <input
                    type="file" 
                    className="form-control" 
                    // value={image}
                    onChange={(e)=>{setimage(e.target.files[0])}} />

                <br />
                <input 
                    type="number"
                    className="form-control"
                    placeholder="Enter Category id"
                    value={product_id}
                    onChange={(e)=>{setid(e.target.value)}} />  <br/> 
                <button type="submit" className="form-control btn btn-primary">Submit</button>
                
            </form></div>
            </div></div>       </div></div>

            <br></br>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Order</th>
                        <th>Re-Order</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                        
                            {
                                
                                productOrderdata.map((e,index)=>
                                        <tr key={e.id}>
                                         <td>{e.id}</td>
                                            <td>{e.product_name}</td>
                                            <td>{e.product_price}</td>
                                            <td><img src={"/Images/"+e.product_image} width="100" height="100" /></td>
                                           <td><input type="number" className="form-control w-25 p-3 h-25" value={e.product_order}/></td>
                                          <td><input type="number" className="form-control w-25 p-3 h-25"  onChange={(event)=>{setOrder(event.target.value)}} /></td>                                        
                                          <td><button className='btn btn-primary'
                                            onClick={event=>{
                                                reorder(productOrder,e.id)
                                            }}>Create</button></td>

                                        </tr>
                                    ) 
                                
                               
                            }
                       
                </tbody>
                </table>
                <br/>
                
            <h1>Category Table</h1> 
<Link to={"/addcategory"} className="nav-link"><button className='btn btn-primary'>Add Category</button></Link>
<table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Category ID</th>
                        <th>Category Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                        
                            {
                                
                                category.map(e=>
                                        <tr key={e.id}>
                                         <td>{e.id}</td>
                                            <td>{e.category_name}</td>
                                            <td><Link to={"/editcategory/"+e.category_name} className="nav-link">
                                                <button className='btn btn-primary'>
                                              Edit</button>
                                            </Link></td>
                                            <td><button className='btn btn-primary' 
                                            onClick={event=>{
                                            delcategory(e.id)
                                            }}>Delete</button></td>

                                        </tr>
                                    ) 
                                
                               
                            }
                       
                </tbody>
                </table>
                <br></br>
            <h1>Products Table</h1>
<table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                        
                            {
                                
                                product.map(e=>
                                        <tr key={e.id}>
                                         <td>{e.id}</td>
                                            <td>{e.product_name}</td>
                                            <td>{e.product_price}</td>
                                            <td><img src={"/Images/"+e.product_image} width="100" height="100" /></td>
                                            <td><button className='btn btn-primary'
                                            onClick={event=>{
                                                editdata(e)
                                            }}>Edit</button></td>
                                            <td><button className='btn btn-primary' 
                                            onClick={event=>{
                                            deldata(e.id)
                                            }}>Delete</button></td>

                                        </tr>
                                    ) 
                                
                               
                            }
                       
                </tbody>
                </table>
                <br/>
                <h1>User Table</h1>
<table className='table table-dark'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                        
                            {
                                
                                user.map(e=>
                                        <tr key={e.id}>
                                         <td>{e.id}</td>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td><button className='btn btn-primary' 
                                            onClick={event=>{
                                            deluser(e.id)
                                            }}>Delete</button></td>

                                        </tr>
                                    ) 
                                
                               
                            }
                       
                </tbody>
                </table>
        </>
    )
}
export default Admin;