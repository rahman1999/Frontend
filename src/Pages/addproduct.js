import { FormControl } from '@mui/material';


import FormLayout from 'Components/Form/Layout/FormLayout';
import  {TextInputField , PasswordInputField , SubmitButton , SignupFooter}  from 'Components/Form';
// import { LOGIN, USER_SIGNUP } from 'services/CONSTANTS';
// import {LOGIN_HELPER_TEXT,  SIGNUP_DISPLAY } from './CONSTANTS';
import { ADD_PRODUCT} from './CONSTANTS';
import { CREATE} from './CONSTANTS';
import { PRODUCT_INITIAL_FORM_STATE } from 'utils/initialFormState/auth';
// import { LOGIN_FORM_VALIDATION } from 'utils/validation/formValidation';
import {addproduct} from 'services/AuthServices';

const INITITAL_FORM_STATE = PRODUCT_INITIAL_FORM_STATE;
// const FORM_VALIDATION = LOGIN_FORM_VALIDATION;


const AddProduct = () => {

    return( 
        <div className=' container w-50'>

            <FormLayout
            
            key={ADD_PRODUCT}
            INITITAL_FORM_STATE = {INITITAL_FORM_STATE}
            // FORM_VALIDATION = {FORM_VALIDATION}
            data={INITITAL_FORM_STATE}
            apicall={addproduct}  
            end={ADD_PRODUCT}
            >
                <FormControl
                    margin='normal'
                    >
                    <div className='h2'>
                        {ADD_PRODUCT}
                    </div>
                </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <TextInputField 
                            name='name'
                            label='Name'
                            margin='normal'
                        />
                    </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <TextInputField 
                            name='price'
                            label='Price'
                            margin='normal'
                            type='number'
                        />
                    </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <TextInputField 
                            name='product_id'
                            label='Product Id'
                            type='number'
                            
                        />
                    </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <TextInputField 
                            name='image'
                            type='file'
                            
                        />
                        </FormControl>
                    <FormControl 
                        fullWidth={true}
                        margin='normal'
                        >
                        <SubmitButton>
                            {CREATE}
                        </SubmitButton> 
                    </FormControl>
                
            </FormLayout>
            
        
            
            
            
        </div>
    )
}
export default AddProduct;