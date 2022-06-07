import axios from 'Interceptor/axios';
import { useEffect,useState } from "react"
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import {useNavigate,Link} from "react-router-dom"
import Pagination from 'react-paginate';
import '../Cart/cart.css'
// import { Rating } from 'react-simple-star-rating'


const Product=()=>{
    const navigate = useNavigate()

    const[allproduct,setdata] = useState([]);
    const [totalcount,settotal]= useState(0);
    const [searchdata,setsearch]=useState('');
    // const[rating,setRating]=useState(null)
    const limit = 4;

// const alldata1=()=>{
//     store.dispatch(fetchAllPosts());

// }

    useEffect(()=>{
        productdata(0);
    },[])

    const productdata = async (page) => {
        await axios.get("/product/getproduct1/?page="+page+'&limit='+limit).then(res=>{
            console.log('data',res)
        
            setdata(res.data.result[0]);
            settotal(res.data.result[1])
        })
        .catch(err=>console.log(err));
    }
 
    let cardStyle = {
        width: '21.5vw',
        height: "20vw"
      };

      const paginate = async(data) => {
        productdata(data.selected);
    }


    // const handleRating = (rate) => {
    //     setRating(rate)
    //     console.log('rate',rate)
    //   }


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
        <div>     

                <Container>
                <div className='row'>
                <div className="d-flex justify align-items-center container ">  
                    <input type='text' className='w-25 p-3 h-25' placeholder='search' onChange={(event)=>{setsearch(event.target.value)}}/>
                   </div>
                   <br/>
                    {
        allproduct.filter((e)=>{
if(searchdata == ''){
    return e
}else if(e.product_name.toLowerCase().includes(searchdata.toLowerCase())){
return e
}
        }).map(e => {
return(
    <div className='col-md-3'>
    <Card style={cardStyle}>
        <div key={e.id}>
            <p className='product'>{e.product_name}</p>
            <Link to={"/singleprod/"+e.id} className="nav-link">
            <div className="text-center">
            <img src={'/Images/'+e.product_image} width='200px' height='150px' />
            </div> 
            {/* <Rating onClick={handleRating} ratingValue={rating} /> */}
            </Link>
            
            <h3>Price:₹{e.product_price}</h3>
                <button className='btn btn-primary button3' onClick={event=>{addcart(e)}}>Add Cart</button>
        </div>

    </Card>
</div>
)
        })
    }
    </div>
</Container>
<br/>
<Pagination 
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={Math.ceil(totalcount/limit)}
        marginPagesDisplayed={2}
        onPageChange={paginate}
        containerClassName={'pagination ml-5 justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        />
      </div>
    )

}

export default Product;