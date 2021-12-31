/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-06-28 09:57:48
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-13 03:04:47
 * @FilePath: \test\nuxt\plugins\http.ts
 */
import { message } from "ant-design-vue";

message.config({
    top: `200px`,
    duration: 2,
    maxCount: 3,
});

interface HttpRequest {
    store: any;
    redirect: any;
    req: any;
    router: any;
    app: any;
}
interface AxiosRequestConfig {
    [x: string]: any;
    config: any;
}

export default function ({
    store,
    redirect,
    req,
    router,
    app: {
        $axios,
    }
}: HttpRequest) {
    /**响应拦截器 */
    $axios.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            // console.log(config.url)
            // if(config.url=="/postFileImg"){
            //     config.headers['Content-Type'] = 'multipart/form-data';
            // }
            // let token = store.getters.token
            // if (token) {
            //     config.headers['Authorization'] = `${token}`;
            // }
            return config
        },
        (error: any) => {
            return Promise.reject(error)
        }
    );

    $axios.interceptors.response.use(
        (response: any) => {
            return response
        },
        (error: { response: { status: any; config: { url: any; }; }; message: string; }) => {
            if (error && error.response) {
                console.log(error.response.status);
                switch (error.response.status) {
                    case 400:
                        error.message = '请求错误'
                        message.error('请求错误');
                        break
                    case 401:
                        error.message = '登录状态已失效,请重新登录'
                        message.error('登录状态已失效,请重新登录');
                        // redirect('/user/login');
                        break
                    case 403:
                        error.message = '拒绝访问'
                        message.error('拒绝访问');
                        break
                    case 404:
                        error.message = `请求地址出错: ${error.response.config.url}`
                        message.error(`请求地址出错: ${error.response.config.url}`);
                        break
                    case 408:
                        error.message = '请求超时'
                        message.error('请求超时');
                        break
                    case 500:
                        error.message = '服务器内部错误'
                        message.error('服务器内部错误');
                        break
                    case 501:
                        error.message = '服务未实现'
                        message.error('服务未实现');
                        break
                    case 502:
                        error.message = '网关错误'
                        message.error('网关错误');
                        break
                    case 503:
                        error.message = '服务不可用'
                        message.error('服务不可用');
                        break
                    case 504:
                        error.message = '网关超时'
                        message.error('网关超时');
                        break
                    case 505:
                        error.message = 'HTTP版本不受支持'
                        message.error('HTTP版本不受支持');
                        break
                    default:
                        break
                }
            }
            return Promise.reject(error)
        }
    )
}