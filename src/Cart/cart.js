import React, { Component } from 'react';
import axios from '../Interceptor/axios';
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import './cartstyle.css';


class Cart extends Component {
    cardStyle = {
        width: '21.5vw',
        height: "22vw"
      };
    constructor()
    {
        super();
        this.state={
            collection:'',
            
        }

    }

quantity=1
    infochange=e=>{
        const{name,value}=e.target;
        this.setState({
            [name]:value
        })
    }

    componentDidMount(){
        this.getdata();
        this.gettotal()
            }
        
            getdata(){
        axios.get('/cart/cartrel').then(res=>{
            console.log(res.data[0].userid)
            this.setState({
                collection:res.data[0].userid
            })
        
        })
            } 

            addcart(){
console.log(this.state.collection)
axios.post("/payment/order",this.state.collection)
.then(response=>{
    if (response.data.url) {
        window.location.href = response.data.url;

      }
})
.catch(err=>console.log(err));

            }

            inc(data){
              let update={
                    id:data.id,
                    quantity:data.cart_quantity+1
                }
                console.log('up',update)
                axios.post('/cart/incupdate',update).then(res=>{
                    console.log(res);
                    this.getdata();
            })
             }

             dec(data){
                let update={
                      id:data.id,
                      quantity:data.cart_quantity-1
                  }
                  console.log('up',update)
                  axios.post('/cart/decupdate',update).then(res=>{
                      console.log(res);
                      this.getdata();
              })
               }


               deletecart(id){
                   console.log(id)
                   axios.post('/cart/delcart/'+id).then(res=>{
                    console.log('response',res.data.result)
                    this.getdata();
                })
               }

               gettotal(data){
                   let total=0
                {this.state.collection.length > 0 ? (
                    data.map(e=>{
                     total+=e.cart_quantity*e.cart_price
                   }))
                   : (
                       console.log(this.state.collection)
                )}
                return total;
            }

    render() { 
        return(
            <>
            <h1>Cart</h1>
<hr></hr>
<table className='table table-light'>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>        
                 {this.state.collection.length > 0 ? (
               this.state.collection.map(e => {
                return (
                        <tr key={e.id}>
                            <td>{e.cart_name}</td>
                           <td><img src={'/Images/'+e.cart_image} width='100px' height='50px'/></td>
                            <td><button onClick={event=>{this.dec(e)}}>-</button>
                            <input type='number' name='quantity'  
                            onChange={this.infochange}
                             value={e.cart_quantity}/>
                             <button onClick={event=>{this.inc(e)}}>+</button></td>
                            <td>{e.cart_price*e.cart_quantity}</td>
                              {/* <td>
                                  <button className='btn btn-primary button1' onClick={event=>{this.addcart(e)}}>Buy</button>
                               </td> */}
                               <td>
                               <button className='btn btn-danger' onClick={event=>{this.deletecart(e.id)}}>Remove</button>
                                </td>
                        </tr>

             
                )
                              })
                          ) : (
                              <h3>product unavailable</h3>
                          )}
                          <tr>
                            <td colSpan={2}></td>
                            <td>Total:</td>
                            <td>{(this.gettotal(this.state.collection))}</td>
                            <td><button className='btn btn-primary button1' onClick={event=>{this.addcart()}}>Buy</button></td>
                        </tr>
                        </tbody>
                          </table> 



        </>
        )
    }
}
 
export default Cart;
