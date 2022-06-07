import React from 'react';
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import axios from '../Interceptor/axios';
import '../Cart/cart.css';


class View extends React.Component
{
     cardStyle = {
        width: '21.5vw',
        height: "19vw"
      };
    constructor(){
        super();

    }


addcart=(data)=>{
    const data1={};
console.log('last',data)
data1.name=data.product_name
data1.price=data.product_price
data1.image=data.product_image
console.log('final',data1)
axios.post('/cart/addcart',data1).then(res=>{
    console.log(res)
})
}








    render(){
        return(

           <><div><Container>
      {/* <h3>Page of {this.props.pgnum + 1}</h3> */}

                <div className='row'>
                <h3>{this.props.cate}</h3>

                       { this.props.getdata && this.props.getdata.map(e => {
                            return (
                                <div className='col-md-3'>

                                    <Card style={this.cardStyle}>
                                        <div key={e.id}>
                                            <p className='product'>{e.product_name}</p>
                                            <div className="text-center">
                                            <img src={'/Images/'+e.product_image} width='200px' height='150px' />
                                            </div> 
                                            <h3>Price:₹{e.product_price}</h3>
                                                <button className='btn btn-primary button3' onClick={event=>{this.addcart(e)}}>Add Cart</button>
                                        </div>

                                    </Card>
                                </div>
                            );
                        })}
                 
                   
                </div>
            </Container>
            <br></br>
            <Container>

                    <div className='row'>
                    <h3>{this.props.cate1}</h3>
                    { this.props.getdata1 && this.props.getdata1.map(e => {

                                return (
                                    <div className='col-md-3'>

                                        <Card style={this.cardStyle}>
                                            <div key={e.id}>
                                                <p className='product'>{e.product_name}</p>
                                                <div className="text-center">
                                            <img src={'/Images/'+e.product_image} width='200px' height='150px'/>
                                            </div> 
                                            <h3>Price:₹{e.product_price}</h3>

                                            <button className='btn btn-primary button3' onClick={event=>{this.addcart(e)}}>Add Cart</button>
                                        </div>

                                        </Card>
                                    </div>
                                );
                            })
                        }
                    </div>
                    
                </Container>
                <br></br>
                <Container>

                    <div className='row'>
                    <h3>{this.props.cate2}</h3>
                    { this.props.getdata2 && this.props.getdata2.map(e => {

                                return (
                                    <div className='col-md-3'>

                                        <Card style={this.cardStyle}>
                                            <div key={e.id}>
                                                <p className='product'>{e.product_name}</p>
                                                <div className="text-center">
                                            <img src={'/Images/'+e.product_image} width='200px' height='150px'/>
                                            </div> 
                                            <h3>Price:₹{e.product_price}</h3>

                                            <button className='btn btn-primary button3' onClick={event=>{this.addcart(e)}}>Add Cart</button>
                                        </div>

                                        </Card>
                                    </div>
                                );
                            })
                       
                        }
                    </div>
                    
                        </Container>
                </div> 
                <br></br>
                </>
                
            
        )
            
    }
}
export default View;