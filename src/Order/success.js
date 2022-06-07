import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import {Navigate,Outlet} from 'react-router-dom' 


const Success = () =>{
        alert('Payment Successful')
       return <Navigate to="/order" replace={true} />

}

export default Success;