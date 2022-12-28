//对于axios进行二次封装
import axios from "axios";


const requests=axios.create({
    //基础路径，发送请求的时候，路由中会出现api
    baseURL:"/mock",
    //代表请求超时的时间是5s
    timeout:5000,
});
//请求拦截器：在请求发送之前，请求拦截器可以检测到，并且可以在发送之前做一些事情
requests.interceptors.request.use((config)=>{
    //config:配置对象，对象里有一个属性很重要，headers请求头
    return config;
});
//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数：服务器响应数据回来后，响应拦截器可以检测到，可以做一些事情
    return res.data;
},(error)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('faile'));
});

export default requests;