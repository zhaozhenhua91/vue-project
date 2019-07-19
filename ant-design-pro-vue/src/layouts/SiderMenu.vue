<template>
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <template v-for="item in menuData">
            <a-menu-item
            v-if="!item.children"
            :key = "item.key"
            @click="() => $router.push({ path: item.path, query: $route.query })">
                <span slot="title"><a-icon type="pie-chart"/>
                <span>{{item.title}}</span></span>
<!--                <template v-for="i in item.children">-->
<!--                <a-menu-item-->
<!--                    :key="i.path">-->
<!--                    <a-icon v-if="i.meta.icon" :type="i.meta.icon" />-->
<!--                    <span>{{i.meta.title}}</span>-->
<!--                </a-menu-item>-->
<!--                </template>-->
            </a-menu-item>
            <sub-menu v-else :menu-info="item" :key="item.key" />
<!--            <sub-menu v-else :menu-info="item" :key="item.path" />-->
<!--            <a-sub-menu key="sub1">-->
<!--                <span slot="title"><a-icon type="appstore" /><span>Navigation Three</span></span>-->
<!--                <a-menu-item key="3">Option 3</a-menu-item>-->
<!--                <a-menu-item key="4">Option 4</a-menu-item>-->
<!--                <a-sub-menu key="sub1-2" title="Submenu">-->
<!--                    <a-menu-item key="5">Option 5</a-menu-item>-->
<!--                    <a-menu-item key="6">Option 6</a-menu-item>-->
<!--                </a-sub-menu>-->
<!--            </a-sub-menu>-->
        </template>
    </a-menu>
</template>
<script>
    import SubMenu from "./SubMenu";
    export default {
        components: {
            SubMenu
        },
        data () {
            return {
                current: ['mail'],
                openKeys: ['sub1'],
            }
        },
        computed: {
            menuData : function () {
                return this.getMenuData(this.$router.options.routes);
            }
        },
        methods: {
            handleClick (e) {
                console.log('click', e)
            },
            titleClick (e) {
                console.log('titleClick', e)
            },
            getMenuData(routes) {
                console.log(routes);
                //const menuData = routes;
                const menuData = routes[0].children;
                console.log(menuData);
                return menuData;
            }
        },
        watch: {
            openKeys (val) {
                console.log('openKeys', val)
            },
        }
    }
</script>

<!--<template>-->
<!--    <div style="width: 256px">-->
<!--        <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">-->
<!--            <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />-->
<!--        </a-button>-->
<!--        <a-menu-->
<!--                :defaultSelectedKeys="['1']"-->
<!--                :defaultOpenKeys="['2']"-->
<!--                mode="inline"-->
<!--                theme="dark"-->
<!--                :inlineCollapsed="collapsed"-->
<!--        >-->
<!--            <template v-for="item in list">-->
<!--                <a-menu-item v-if="!item.children" :key="item.key">-->
<!--                    <a-icon type="pie-chart" />-->
<!--                    <span>{{item.title}}</span>-->
<!--                </a-menu-item>-->
<!--                <sub-menu v-else :menu-info="item" :key="item.key"/>-->
<!--            </template>-->
<!--        </a-menu>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    /*-->
<!--     * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue-->
<!--     * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue-->
<!--     * */-->
<!--    import SubMenu from './SubMenu'-->
<!--    export default {-->
<!--        components: {-->
<!--            'sub-menu': SubMenu,-->
<!--        },-->
<!--        data () {-->
<!--            return {-->
<!--                collapsed: false,-->
<!--                list: [-->
<!--                    {-->
<!--                        key: '1',-->
<!--                        title: 'Option 1',-->
<!--                    }, {-->
<!--                        key: '2',-->
<!--                        title: 'Navigation 2',-->
<!--                        children: [-->
<!--                            {-->
<!--                                key: '2.1',-->
<!--                                title: 'Navigation 3',-->
<!--                                children: [-->
<!--                                    { key: '2.1.1',-->
<!--                                        title: 'Option 2.1.1',-->
<!--                                    },-->
<!--                                ],-->
<!--                            },-->
<!--                        ],-->
<!--                    }],-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            toggleCollapsed () {-->
<!--                this.collapsed = !this.collapsed-->
<!--            },-->
<!--        },-->
<!--    }-->
<!--</script>-->
