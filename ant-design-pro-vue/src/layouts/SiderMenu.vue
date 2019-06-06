<template>
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <template v-for="item in menuData">
            <a-sub-menu
            v-if="item.children"
            :key = "item.path">
                <span slot="title"><a-icon v-if="item.meta.icon" :type="item.meta.icon" />
                <span>{{item.meta.title}}</span></span>
<!--                <template v-for="i in item.children">-->
<!--                <a-menu-item-->
<!--                    :key="i.path">-->
<!--                    <a-icon v-if="i.meta.icon" :type="i.meta.icon" />-->
<!--                    <span>{{i.meta.title}}</span>-->
<!--                </a-menu-item>-->
<!--                </template>-->
            </a-sub-menu>
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
  //  import SubMenu from "./SubMenu";
    export default {
        // components: {
        //     "sub-menu": SubMenu
        // },
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

