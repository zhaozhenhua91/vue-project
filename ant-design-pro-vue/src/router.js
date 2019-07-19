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
          redirect: "/dashboard/analysis",
          key: '1',
          title: 'Option 1'
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          key: '2',
          title: 'Navigation 2',
          meta: {icon: "dashboard", title: '仪表盘'},
          component: {render: h => h('router-view')},
          children: [{
            key: '2.1',
            title: 'Navigation 3',
            path: '/dashboard/analysis',
            name: 'analysis',
            meta: {title: '分析页'},
            component: () =>
                import("./views/Dashboard/Analysis.vue")
          },{
            key: '2.2',
            title: 'Navigation 4',
            path: '/dashboard/monitor',
            name: 'calculate',
            meta: {title: '监控页'},
            component: () =>
                import("./views/Dashboard/Monitor.vue")
          }]
        }
        // {
        //   key: '1',
        //   title: 'Option 1',
        // }, {
        //   key: '2',
        //   title: 'Navigation 2',
        //   children: [
        //     {
        //       key: '2.1',
        //       title: 'Navigation 3',
        //       children: [
        //         { key: '2.1.1',
        //           title: 'Option 2.1.1',
        //         },
        //       ],
        //     },
        //   ],
        // }
      ]
    }

  ]
});
