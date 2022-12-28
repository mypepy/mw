import Main from '@/pages/main'
import Edit from '@/pages/edit'

export default [
    {
        path: '/main',
        component: Main,
        meta: { show: true }
    },
    {
        path: '/edit',
        component: Edit,
        meta: { show: false }
    },
    //重定向
    {
        path: '*',
        redirect: "/main"
    }

]