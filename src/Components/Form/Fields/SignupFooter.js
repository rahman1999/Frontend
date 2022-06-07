import {Link} from 'react-router-dom'
import {Grid} from '@mui/material'
const SignupFooter = ({LinkUrl , LinkHelperText, LinkName}) => {
    return (
            <div className='ml-5'>
                <Grid >
                     {LinkHelperText} <Link to={LinkUrl} className="btn btn-primary">{LinkName}</Link> 
                </Grid>
            </div> 
            ) 
}

export default SignupFooter;