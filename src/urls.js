import axios from "axios"

const http = axios.create({
  baseURL:'http://localhost:8000',
  headers:{
    'X-Requested-With':'XmlHttpRequest',
    'Access-Control-Allow-Credentials':true,
  },
withCredentials:true,
}
);

const getCookie=async ()=>{
    await http.get('/sanctum/csrf-cookie')
  //  document.cookie=
   user();
}

const user=async()=>{
  http.post('/api/logout',{
        "email":"cd@iy.dg",
        "password":"efefeeee"
  });
}

export {getCookie,user};

