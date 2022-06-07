import IntlTelInput from 'react-intl-tel-input';
import {  useEffect, useState } from 'react';
import './phone.css'
const Phonenum=()=> {

    const [mobile,setMobile] = useState();

        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log(mobile);

        }
    
  return (
    <div className="d-flex justify-content-center align-items-center container ">  

    <div className='container top'>
<div className='col-md-8'>
<form onSubmit={handleSubmit}>
<IntlTelInput  
                    value={mobile}
                    inputClassName="form-control"
                    onPhoneNumberChange={(status, value, countryData, number, id) => {
                         
                        setMobile(number)
                      }}/>
                      <button type="submit" className="btn btn-success">Submit</button>

      </form></div></div></div>
  )
}
export default Phonenum