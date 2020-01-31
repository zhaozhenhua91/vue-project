import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      hideInMenu: true,
      component: () =>
         import("./layouts/UserLayout"),
      children: [
        {
          path: "/user",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () =>
             import("./views/User/Login")   
        },
        {
          path: "/user/register",
          name: "register",
          component: () => 
            import("./views/User/Register")
        }
      ]
    },
    {
      path: "/",
      meta: {authority: ['user','admin']},
      component: () =>
          import("./layouts/BasicLayout.vue"),
      children: [
        {
          path: '/',
          redirect: "/dashboard/analysis"
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          meta: {icon: "dashboard", title: '仪表盘',authority: ['user']},
          component: {render: h => h('router-view')},
          children: [{
            path: '/dashboard/analysis',
            name: 'analysis',
            meta: {title: '分析页'},
            component: () =>
                import("./views/Dashboard/Analysis.vue")
          }]
        }
      ]
    },
    {
      path: "/form",
      name: "form",
      component: {render: h => h("router-view")},
      meta: {icon: "form", title: "表单",},
      children: [{
        path: "/form/basic-form",
        name: "basicform",
        meta: {title: "基础表单"},
        component: () => 
        import("./views/Forms/BasicForm")
      }]
    }
  ]
});
