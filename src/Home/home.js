// import React, { Component } from 'react';
// import Card from "@material-ui/core/Card";
// import Container from '@material-ui/core/Container';


// class Home extends Component {
//     cardStyle = {
//         width: '21.5vw',
//         height: "16.5vw"
//       };
//     render() { 
//         return (
//             <Container>             <br></br>

/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={'/Images/sports1.jpg'}  width='1500px' height='350px' alt="..." />
    </div>
    <div className="carousel-item">
      <img src={'/Images/sports2.jpg'}   width='1500px' height='350px'alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={'/Images/1652090599063.jpg'}   width='1500px' height='350px' alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  <br/>
</div> */
//                                     <div className='row'>
//                                 <div className='col-md-3'>
//                                     <Card style={this.cardStyle}>
//                                          <div className="text-center">
//                                         <img src={'/Images/sports1.jpg'} width='200px' />
//                                         </div> 
//                                         <br></br>
//                                         <h3 className='product'>Price:₹30</h3>
//                                     </Card>
//                                         </div>      


//                                         <div className='col-md-3'>
//                                     <Card style={this.cardStyle}>
//                                         <div className="text-center">
//                                         <img src={'/Images/sports2.jpg'} width='200px' />
//                                         </div> 
//                                         <br></br>
//                                         <h3 className='product'>Price:₹30</h3>
//                                         </Card>
//                                         </div>

//                                         <div className='col-md-3'>
//                                         <Card style={this.cardStyle}>
//                                         <div className="text-center">
//                                         <img src={'/Images/sports3.jpg'} width='200px' />
//                                         </div> 
//                                         <br></br>
//                                         <h3 className='product'>Price:₹30</h3>       
//                                     </Card>
//                                     </div>

                            
//                                     <div className='col-md-3'>
//                                     <Card style={this.cardStyle}>
//                                         <div className="text-center">
//                                         <img src={'/Images/sports1.jpg'} width='200px' />
//                                         </div> 
//                                         <br></br>
//                                         <h3 className='product'>Price:₹30</h3> 
//                                         </Card>
//                                         </div>


//                                         <div className='col-md-3'>
//                                         <Card style={this.cardStyle}>
//                                         <div className="text-center">
//                                         <img src={'/Images/sports5.jpg'} width='200px' />
//                                         </div> 
//                                         <br></br>
//                                         <h3 className='product'>Price:₹40</h3>
//                                         </Card>
//                                         </div>



//                                         <div className='col-md-3'>
//                                         <Card style={this.cardStyle}>
//                                         <div className="text-center">
//                                         <img src={'/Images/sports3.jpg'} width='200px' />
//                                         </div> 
//                                         <br></br>
//                                         <h3 className='product'>Price:₹40</h3> 
//                                         </Card>
//                                         </div>


//                                         <div className='col-md-3'>
//                                         <Card style={this.cardStyle}>
//                                         <div className="text-center">
//                                         <img src={'/Images/sports7.webp'} width='200px' />
//                                         </div> 
//                                         <br></br>
//                                         <h3 className='product'>Price:₹40</h3> 
//                                         </Card>
//                                         </div>


//                                         <div className='col-md-3'>
//                                         <Card style={this.cardStyle}>
//                                         <div className="text-center">
//                                         <img src={'/Images/sports2.jpg'} width='200px' />
//                                         </div> 
//                                         <br></br>
//                                         <h3 className='product'>Price:₹40</h3> 
//                                         </Card>
//                                         </div>
                                        
                            
//                             </div>
//         </Container>
//         );
//     }
// }
 
// export default Home;
import axios from '../Interceptor/axios';
import { useEffect,useState } from "react"
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import {useNavigate,Link} from "react-router-dom"
import '../Cart/cart.css'


const Home=()=>{
    const navigate = useNavigate()

    const[allproduct,setdata] = useState([]);
    

    useEffect(()=>{
        productdata();
    },[])

    const productdata = async (page) => {
        await axios.get("/product/ordering").then(res=>{
            console.log('data',res)
        
            setdata(res.data.result);
        })
        .catch(err=>console.log(err));
    }
 
    let cardStyle = {
        width: '21.5vw',
        height: "20vw"
      };



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
                  <br></br>
                <div className='row'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={'/Images/sports1.jpg'}  width='1500px' height='350px' alt="..." />
    </div>
    <div className="carousel-item">
      <img src={'/Images/sports2.jpg'}   width='1500px' height='350px'alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={'/Images/1652090599063.jpg'}   width='1500px' height='350px' alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  <br/>
</div>
                    {
        allproduct.map(e => {
return(
    <div className='col-md-3'>
    <Card style={cardStyle}>
        <div key={e.id}>
            <p className='product'>{e.product_name}</p>
            <Link to={"/singleprod/"+e.id} className="nav-link">
            <div className="text-center">
            <img src={'/Images/'+e.product_image} width='200px' height='150px' />
            </div> 
            </Link>
            
            <h3>Price:₹{e.product_price}</h3>
                <button className='btn btn-primary button3' onClick={event=>{addcart(e)}}>Add Cart</button>
        </div>

    </Card>
    <br/>
</div>

)
        })
    }
    </div>
</Container>

      </div>
    )

}

export default Home;