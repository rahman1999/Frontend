import {Grid } from '@mui/material' 
import { Formik , Form} from 'formik';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {logintoken} from 'Reducer/statevalue'
import { useSelector } from "react-redux";

const FormLayout = ({INITITAL_FORM_STATE , FORM_VALIDATION  , apicall , children ,end}) =>{
    // const tokenvalue=useSelector(state=>state.tokenvalue.value.role)

   const navigate=useNavigate()
   const dispatch=useDispatch();
    return(
        <Grid container >
            <Formik
                initialValues={{
                    ...INITITAL_FORM_STATE
                }}
                
                validationSchema={FORM_VALIDATION}
                onSubmit={async(values) => {
                    console.log(' data ',values);
                    // if(end=='Add Product'){
                    // console.log("data",values)
                    // return
                    //
                    let formdata = new FormData();

                    for ( var key in values ) {

                        formdata.append(key, values[key]);

                    } 
                    console.log("formdata",formdata)
                
                    // const {data : dataConfig} = {...rest }; 
                    const errHandler = (res) =>{
                        console.log("err",res)
                        switch(res.status){
                            case 400 :
                                return ("Bad Request");
                                
                            case 404 :
                                return ("Not Found");
                                
                            case null :
                                return ("Unknown Error")
                                
                            default:
                                return ("No Server Response")
                        }
                    } 
                function success(res){
                    Promise.resolve(res).then(function(value){
                        if(end=='LOGIN'){
                        console.log(value,"response");
                         localStorage.setItem("token",JSON.stringify(value.data.usertoken));
                        localStorage.setItem('Admin',value.data.role)
                        dispatch(logintoken({token:JSON.stringify(value.data.usertoken),role:value.data.role}))
                        navigate('/')
                        }else{
                            navigate('/login')
                        }
                    })
                   
                }
                    const DataObj = {
                        // ...rest ? dataConfig : {},
                        data:formdata
                    }
                    try {
console.log("api",end)
                        const response = apicall(DataObj);
                        toast.promise(response , {

                            pending:"saving",
                            error: errHandler(response),
                            success:success(response)
                        })
                      
                        console.log(response)
                    } catch (err) {
                        console.log(err);
                        if (!err.response) {
                            toast.info('No Server Response',{
                                position: toast.POSITION.TOP_CENTER
                              });
                        } else if (err.response.status === 409) {
                            toast.info('Username Taken');
                        } else {
                            toast.danger('Registration Failed')
                        }
                    }
                }}
                >
                <Form >
                    <Grid container >
                        {children}
                    </Grid>
                </Form>
            </Formik>
            <ToastContainer />
        </Grid>
    )
}
export default FormLayout;