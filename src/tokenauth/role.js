
import Navbar from '../Navbar/navbar'
import React,{ useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const getrole=React.createContext();
export const gettoken=React.createContext();

const Role=()=>{
    const [role,setRole]= useState(false);

    useEffect(()=>{
        setRole(localStorage.getItem("Admin"));
        console.log('rolecalled')
    },[])
    console.log('role',typeof(role))


return(

<getrole.Provider value={localStorage.getItem('Admin')}>
<gettoken.Provider value={localStorage.getItem('token')}>
<Navbar/>
<Outlet />
</gettoken.Provider>
</getrole.Provider>
)
}
export default Role;