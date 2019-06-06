import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
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
          meta: {icon: "dashboard", title: '仪表盘'},
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
    }
  ]
});
