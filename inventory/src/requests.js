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

export const singleItem =async (params)=>{
  let response;
   await  Api.get('api/singleItem/'+params.params.obj+'/'+params.params.id).then((res)=>{
     response=res.data.data;
   }).catch((error)=> {
    localStorage.removeItem('auth');
    response={error:error};
   })
  return {'type':params.params.obj,'response': response};
}