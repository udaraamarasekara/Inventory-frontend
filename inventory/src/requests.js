import Api from './Api';

export const goodsCount =async ()=>{
    let response;
     await  Api.get('api/goodsCount').then((res)=>{

       response={success:res.data};
     }).catch((error)=> {
      response={error:error};
      localStorage.removeItem('auth');
     })
     return response;
}


export const logOut =async ()=>{
  let response;
   await  Api.post('api/logout').then((res)=>{
     response={success:res.data};
   }).catch((error)=> {
    response={error:error};
   })
   console.log(response);
   localStorage.removeItem('auth');
}