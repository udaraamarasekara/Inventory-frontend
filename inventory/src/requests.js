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
  if(response===1){
    sessionStorage.setItem('auth',true);
  }
 return response;
}

export const allGoodsPaginate=async(link)=>{
  let response;
   await  Api.get('api/good/'+link).then((res)=>{
     response=res.data;
   }).catch((error)=> {
    sessionStorage.removeItem('auth');
    response={error:error};
   })
  return response;
}

export const allTimeGrns=async()=>{
  let response;
   await  Api.get('api/allTimeGrns').then((res)=>{
     response=res.data;
   }).catch((error)=> {
    sessionStorage.removeItem('auth');
    response={error:error};
   })
  return response;
}

export const allTimeGrnsPaginate=async(link)=>{
  let response;
   await  Api.get('api/allTimeGrns/'+link).then((res)=>{
     response=res.data;
   }).catch((error)=> {
    sessionStorage.removeItem('auth');
    response={error:error};
   })
  return response;
}
export const allTimeSales=async()=>{
  let response;
   await  Api.get('api/allTimeSales').then((res)=>{
     response=res.data;
   }).catch((error)=> {
    sessionStorage.removeItem('auth');
    response={error:error};
   })
  return response;
}

export const allTimeSalesPaginate=async(link)=>{
  let response;
   await  Api.get('api/allTimeSales/'+link).then((res)=>{
     response=res.data;
   }).catch((error)=> {
    sessionStorage.removeItem('auth');
    response={error:error};
   })
  return response;
}

export const allGoodsWithTime=async(from,to)=>{
  let response;
   await  Api.get('api/allGoodsWithinPeriod/?to='+to+'&from='+from).then((res)=>{
     response=res.data;
   }).catch((error)=> {
    sessionStorage.removeItem('auth');
    response={error:error};
   })
  return response;
}

export const allGoodsWithTimePaginate=async(page,from,to)=>{
  let response;
   await  Api.get('api/allGoodsWithinPeriod/'+page+'&to='+to+'&from='+from).then((res)=>{
     response=res.data;
   }).catch((error)=> {
    sessionStorage.removeItem('auth');
    response={error:error};
   })
  return response;
}

export const allSales=async(from,to)=>{
  let response;
   await  Api.get('api/sales/?to='+to+'&from='+from).then((res)=>{
     response=res.data;
   }).catch((error)=> {
    sessionStorage.removeItem('auth');
    response={error:error};
   })
  return response;
}

export const allSalesPaginate=async(page,from,to)=>{
  let response;
   await  Api.get('api/sales/'+page+'&to='+to+'&from='+from).then((res)=>{
     response=res.data;
   }).catch((error)=> {
    sessionStorage.removeItem('auth');
    response={error:error};
   })
  return response;
}

export const allGrns=async(from,to)=>{
  let response;
   await  Api.get('api/grns/?to='+to+'&from='+from).then((res)=>{
     response=res.data;
   }).catch((error)=> {
    sessionStorage.removeItem('auth');
    response={error:error};
   })
  return response;
}
export const allGrnsPaginate=async(page,from,to)=>{
  let response;
   await  Api.get('api/grns/'+page+'&to='+to+'&from='+from).then((res)=>{
     response=res.data;
   }).catch((error)=> {
    sessionStorage.removeItem('auth');
    response={error:error};
   })
  return response;
}
