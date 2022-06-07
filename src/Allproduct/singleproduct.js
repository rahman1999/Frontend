import axios from 'Interceptor/axios';
import { useEffect,useState } from "react"
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import {useNavigate,Link,useParams} from "react-router-dom"
import '../Cart/cart.css'
import { Rating } from 'react-simple-star-rating'


const SingleProduct=()=>{
    const navigate = useNavigate()

    const[product,setdata] = useState([]);
    const[review,setreview]=useState([]);
    const[rating,setRating]=useState()
    const[orgrating,setOrgrating]=useState()
    const[comment,setcomment]=useState();

    const {name}=useParams()


    useEffect(()=>{
        productdata(name);
    },[])

    const productdata = async (name) => {
        await axios.get("/product/singleproduct/"+name).then(res=>{
            console.log('data',res)
            setdata(res.data.result[0]);
            setOrgrating(res.data.rating.rating)
            setreview(res.data.result[0].reviewid)
            // setRating(res.data.result[0].reviewid.review_rating)

        })
        .catch(err=>console.log(err));
    }
 
    let cardStyle = {
        width: '21.5vw',
        height: "22vw"
      };

      
      const handleSubmit = async(e) =>{

        e.preventDefault();
        const formdata = new FormData();
            formdata.append('rating',rating);
            formdata.append('comment',comment);
            formdata.append('reviewid',product.id);
            console.log('datas',comment,rating,product.id)
            const response = await axios.post("/review/addreview",formdata);
            console.log(JSON.stringify(response.data));
            productdata(name)
    }

    const handleRating = (rate) => {
        setRating(rate)
        console.log('rate',rate)
      }


    function addcart(data){
        const data1={};
    console.log('last',data)
    data1.name=data.product_name
    data1.price=data.product_price
    data1.image=data.product_image
    console.log('final',data1)
    axios.post('/cart/addcart',data1).then(res=>{
        console.log(res)
        navigate('/cart')

    })
    }
    return(
        
        <div key={product.id}>    
         <div className='container '>       
             <div className='row'>
             <div className="col-4">
            <img src={'/Images/'+product.product_image}  height='300px'  width='300px' />
            </div>
            <div className='col-5'>
            <p className='fs-2'>{product.product_name}</p>
            {/* <div className="text-center">
            <img src={'/Images/'+e.product_image} width='200px' height='150px' />
            </div>  */}
            
            <p className='fs-2'>Price:₹{product.product_price}</p>
            <Rating ratingValue={orgrating} size='24'/><br/><br/>
                <button className='btn btn-primary button3' onClick={event=>{addcart(product)}}>Add Cart</button>
        
    <br/>
<hr></hr>
<form onSubmit={handleSubmit}>
                  
                    <Rating onClick={handleRating} size='24'/>
                    <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter comments"
                    value={comment}
                    onChange={(e)=>{setcomment(e.target.value)}} /> 
                    <br/> 
                    <button type="submit" className="form-control btn btn-primary">Submit</button>

</form>
        {review.map(e=>{

            return(
                <div key={e.id}>    
<ul><li>
<textbox>{e.review_comment}</textbox><br/>
 <Rating ratingValue={e.review_rating} size='24'/>

</li></ul>
        

            </div>
            )
                    })
        }
        </div>
       
</div>
</div>
</div>
)
  

}

export default SingleProduct;