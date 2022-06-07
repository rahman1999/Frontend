import { useFormikContext } from "formik";
import {Button} from '@mui/material';
import { useEffect } from "react";

const ButtonWrapper = ({
    children,
    setStat, 
    ...otherProps
}) => {
    const {submitForm  } = useFormikContext();

    
    const handleSubmit =  () =>{
        submitForm();
    }
    
    const configButton = {
        variant:'contained',
        color:'primary',
        fullWidth:true,
        onClick : handleSubmit
    }

    return(
        <Button
            {...configButton}
            >
            {children}
        </Button>
    )
} 
export default ButtonWrapper;