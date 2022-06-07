import * as Yup from 'yup';


export const USER_SIGNUP_FORM_VALIDATION = Yup.object().shape({
    name: Yup.string()
    .min(4,"Please Enter atleast 4 characters")
    .required("Required"),
    email:Yup.string().email("Please Enter a Valid Email").required("Required"),
    password: Yup.string()
    .min(8,"Please Enter atleast 8 characters")
    .required("Required"),
    
})


export const LOGIN_FORM_VALIDATION = Yup.object().shape({
    email:Yup.string().email("Please Enter a Valid Email").required("Required"),
    password: Yup.string()
    .min(5,"Please Enter atleast 5 characters")
    .required("Required"),
    name: Yup.string()
    .required("Required"),
    
})
