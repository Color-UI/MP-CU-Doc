import * as vueRouter from 'vue-router'
import routes from './routers'

const router = vueRouter.createRouter({
    history: vueRouter.createWebHashHistory(),
    routes: routes,
});

//路由拦截
/*router.beforeEach((to, from, next) => {
    next();
})*/

export function setupRouter(app : any){
    app.use(router)
    return router
}

export default router;
