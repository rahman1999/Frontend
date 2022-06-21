import React from 'react'
import { useEffect} from 'react';
import TableLayout from 'Components/Form/Layout/TableLayout'
import {getProduct} from 'Reducer/statevalue'
import { useDispatch,useSelector } from 'react-redux';
import { PRODUCT } from '../CONSTANTS';


function Producttable() {
    // const [table,settable]= useState([])
const dispatch=useDispatch()
 
const column=[
  {field:'id',header:'Id'},
  {field:'product_name',header:'Product'},
 {header:'Action'}]
 useEffect(()=>{
dispatch(getProduct())
 },[dispatch]);

const product=useSelector((state)=>state.tokenvalue.value.productdata)
 console.log(product)
  return (
    <div style={{margin:"20px"}}>
      <TableLayout data={product} columns={column} api={PRODUCT}/>
    </div>
  )
}

export default Producttable
