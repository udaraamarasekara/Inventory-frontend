import Api from './Api';

export const goodsCount =async ()=>{
    let response;
     await  Api.get('api/goodsCount').then((res)=>{

       response={success:res.data};
     }).catch((error)=> {
      response={error:error};
      sessionStorage.removeItem('auth');
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
   sessionStorage.removeItem('auth');
}

export const singleItem =async (params)=>{
  let response;
   await  Api.get('api/singleItem/'+params.params.obj+'/'+params.params.id).then((res)=>{
     response=res.data.data;
   }).catch((error)=> {
    sessionStorage.removeItem('auth');
    response={error:error};
   })
  return {'type':params.params.obj,'response': response};
}

export const productTransactions=async()=>{
  let response;
   await  Api.get('api/productTransactionCount').then((res)=>{
     response=res.data;
   }).catch((error)=> {
    sessionStorage.removeItem('auth');
    response={error:error};
   })
  return response;
 
}

export const allGoods=async()=>{
  let response;
   await  Api.get('api/good').then((res)=>{
     response=res.data;
   }).catch((error)=> {
    sessionStorage.removeItem('auth');
    response={error:error};
   })
   console.log(response);
  return response;
}
export const testRequest =async()=>{
  let response;
  await  Api.get('api/test').then((res)=>{
    response=res.data;
  }).catch((error)=> {
   sessionStorage.removeItem('auth');
   response={error:error};
  })
  console.log(response);
  if(response===1){
    sessionStorage.setItem('auth',true);
  }
 return response;
}