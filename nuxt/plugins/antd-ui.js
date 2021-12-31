/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-06-28 00:58:47
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-09 05:08:27
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-11-07 09:06:49
 * @FilePath: \myBlog\plugins\antd-ui.js
 */
import Vue from 'vue'
// import Antd from 'ant-design-vue/lib'
import {
    Col, Row, Skeleton, Spin, Modal, Anchor,
    Form, Button, Layout, Icon, BackTop, Tag, Space, Tabs, Input, FormModel, Upload, Radio, dropdown,
    Breadcrumb, Comment, Avatar, Menu, Affix, message, Tooltip, notification, Tree, List, Select, Switch
} from 'ant-design-vue';

const AntdList = [Col, Row, Skeleton, Spin, Modal, Anchor,
    Form, Button, Layout, Icon, BackTop, Tag, Space, Tabs, Input, FormModel, Upload, Radio, dropdown,
    Breadcrumb, Comment, Avatar, Menu, Affix, message, Tooltip, notification, Tree, List, Select, Switch];

for (let i of AntdList) {
    Vue.use(i)
}

Vue.prototype.$message = notification;
Vue.prototype.$message = message;