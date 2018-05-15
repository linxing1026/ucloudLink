import Vue from 'vue'
import axios from 'axios'
import router from './../router'
import { getCookie } from './cookie'
import getConfig from './../config/config'

const service = axios.create({
    timeout: 10 * 1000
});

service.interceptors.request.use(
    config =>{
        let authParams = {
            //公共参数
        }
        if(config.method === 'get'){
            config.data && Object.keys(config.data).forEach((val) =>{
                if(config.data[val] === ''){
                    delete config.data[val]
                }
            })
            config.params = {
                ...config.data,
                ...authParams
            }
        }else{
            config.data && Object.keys(config.data).forEach((val) =>{
                if(config.data[val] === ''){
                    delete config.data[val]
                }
            })
            config.data = {
                ...config.data,
                ...authParams
            }
        }

        return config
    },
    error =>{
        Promise.reject(error)
    }
);

service.interceptors.response.use(
    response =>{
        return response
    },
    error =>{
        Promise.reject(error)
    }
);

export default service;
