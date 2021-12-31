/*
* @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-11-13 04:06:00
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-13 04:06:02
 * @FilePath: \test\prototype.d.ts
*/

import { AxiosInstance } from 'axios';
declare module 'vue/types/vue' {
    interface Vue {
        $axios: AxiosInstance
    }
}