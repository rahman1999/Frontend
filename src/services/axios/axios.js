import axios from 'axios';


let instance = axios.create({
    baseURL:"http://localhost:8000"
});


instance.interceptors.request.use(function (request) {
    const token = localStorage.getItem('token');
    request.headers.Authorization =  token ? `Bearer ${token}` : '';
    console.log("headers" , request.headers);
    return request;
  })


  export default instance;