import Home from "../pages/home";
import About from "../pages/about";
import Detail from "../pages/detail";
import My from "../pages/my";

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        component: About,
        // routes:[ 配置子路由
        //     //... 写法一样
        // ]
    },
    {
        path: '/my',
        component: My
    },
    {
        path: '/detail',
        component: Detail
    },
]

export default routes;