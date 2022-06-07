import {Navigate,Outlet} from 'react-router-dom' 
import Role from 'tokenauth/role';

const Protected = ({ token }) => {

    let valid;
    valid = token();
    console.log(valid)
    if (!valid) {
      return <Navigate to="/login" replace={true} />;

    }
  
    return <Outlet />;
};

  export default Protected;