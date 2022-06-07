import { FormControl } from '@mui/material';

// import  SubmitButton  from 'components/Layouts/Form/Fields/SubmitButton';

import {USER_LOGIN} from 'services/CONSTANTS';
import FormLayout from 'Components/Form/Layout/FormLayout';
import  {TextInputField , PasswordInputField , SubmitButton }  from 'Components/Form'
import {SignupFooter} from 'Components/Form';
import { USER_SIGNUP_LOGIN_HELPER_TEXT, 
         USER_SIGNUP_LOGIN_LINK_NAME ,
         USER_SIGNUP_SUBMIT_BUTTON_TEXT,
         SIGNUP_DISPLAY
        } from './CONSTANTS';
import { USER_SIGNUP_INITIAL_FORM_STATE } from 'utils/initialFormState/auth';
import { USER_SIGNUP_FORM_VALIDATION } from 'utils/validation/formValidation';
import {signUp} from 'services/AuthServices' 

const INITITAL_FORM_STATE = USER_SIGNUP_INITIAL_FORM_STATE;
const FORM_VALIDATION = USER_SIGNUP_FORM_VALIDATION;



const UserSignUp = () => {

    return( 
        <div className=' container w-50'>

            <FormLayout
            key={"signup"}
            INITITAL_FORM_STATE = {INITITAL_FORM_STATE}
            FORM_VALIDATION = {FORM_VALIDATION}
            data=  { INITITAL_FORM_STATE }
            apicall={signUp}    
            end={SIGNUP_DISPLAY}

            >
                <FormControl
                    margin='normal'
                    >
                    <div className='h2'>
                        {SIGNUP_DISPLAY}
                    </div>
                </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <TextInputField 
                            name='name'
                            label='username'
                            
                        />
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
                        <PasswordInputField  
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
                            {USER_SIGNUP_SUBMIT_BUTTON_TEXT}
                        </SubmitButton> 
                    </FormControl>
                
            </FormLayout>
            
        
            <SignupFooter
                LinkUrl = {USER_LOGIN}
                LinkHelperText = {USER_SIGNUP_LOGIN_HELPER_TEXT}
                LinkName = {USER_SIGNUP_LOGIN_LINK_NAME}
            />
        
            
        </div>
    )
}
export default UserSignUp;