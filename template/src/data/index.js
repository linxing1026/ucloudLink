import request from './../utils/request';

export default function getData(obj){
    return new Promise((resolve,reject)=>{
        request(obj).then((res)=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    });
}