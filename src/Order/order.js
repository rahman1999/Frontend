import React, { Component } from 'react';
import axios from '../Interceptor/axios';
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import '../Cart/cart.css';


class Order extends Component {
    cardStyle = {
        width: '21.5vw',
        height: "32vw"
      };
    constructor()
    {
        super();
        this.state={
            collection:'',
            
        }

    }



    componentDidMount(){
        this.getdata();
            }
        
            getdata(){
        axios.get('/order/orderrel').then(res=>{
            console.log(res.data[0].orderid)
            this.setState({
                collection:res.data[0].orderid
            })
        
        })
            } 
           

            

    render() { 
        return(
        <Container>
            <h1>Orders</h1>
<hr></hr>
            <div className='row'>
            {this.state.collection.length > 0 ? (
               this.state.collection.map(e => {
                return (
                    <div className='col-md-3'>

                    <Card style={this.cardStyle}>
                        <div key={e.id}>
                            <p className='product'>{e.order_name}</p>
                            <div className="text-center">
                            <img src={'/Images/'+e.order_image} width='150px' height='150px'/>
                            </div> 
                            <br/><br/>
                            <h3>Total:₹{e.order_total}</h3>
                            <h6>Phone Number:{e.order_phone}</h6>
                            <h6>Email:{e.order_email}</h6>
                            <h5>Shipping Address:{e.address.line1+e.address.line2+","+e.address.city+"-"+e.address.postal_code+","+e.address.state+'.'}</h5>

                        </div>

                    </Card>
                </div>
             
                )
                              })
                          ) : (
                              <h3>No Orders</h3>
                          )}
            </div>
            </Container>
        )
    }
}
 
export default Order;
