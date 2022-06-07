import { FormControl } from '@mui/material';


import FormLayout from 'Components/Form/Layout/FormLayout';
import  {TextInputField , PasswordInputField , SubmitButton , SignupFooter}  from 'Components/Form';
import { LOGIN, USER_SIGNUP } from 'services/CONSTANTS';
import {LOGIN_HELPER_TEXT,  SIGNUP_DISPLAY } from './CONSTANTS';
import { LOGIN_DISPLAY} from './CONSTANTS';
import { LOGIN_INITIAL_FORM_STATE } from 'utils/initialFormState/auth';
import { LOGIN_FORM_VALIDATION } from 'utils/validation/formValidation';
import {login} from 'services/AuthServices';

const INITITAL_FORM_STATE = LOGIN_INITIAL_FORM_STATE;
const FORM_VALIDATION = LOGIN_FORM_VALIDATION;


const Login = () => {

    return( 
        <div className=' container w-50'>

            <FormLayout
            
            key={LOGIN_DISPLAY}
            INITITAL_FORM_STATE = {INITITAL_FORM_STATE}
            FORM_VALIDATION = {FORM_VALIDATION}
            data={INITITAL_FORM_STATE}
            apicall={login}  
            end={LOGIN_DISPLAY}
            >
                <FormControl
                    margin='normal'
                    >
                    <div className='h2'>
                        {LOGIN_DISPLAY}
                    </div>
                </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <TextInputField 
                            name='email'
                            label='email'
                            margin='normal'
                        />
                    </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <TextInputField 
                            name='name'
                            label='name'
                            margin='normal'
                        />
                    </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <TextInputField
                            name='password'
                            label='password'
                            type='password'
                            
                        />
                    </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <SubmitButton>
                            {LOGIN_DISPLAY}
                        </SubmitButton> 
                    </FormControl>
                
            </FormLayout>
            
        
            <SignupFooter
                LinkUrl = {USER_SIGNUP}
                LinkHelperText = {LOGIN_HELPER_TEXT}
                LinkName = {SIGNUP_DISPLAY}
            />
            
            
        </div>
    )
}
export default Login;