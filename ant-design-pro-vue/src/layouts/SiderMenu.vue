<template>
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <template v-for="item in menuData">
            <a-menu-item
            v-if="item.children"
            :key = "item.path">
                <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
                <span>{{item.meta.title}}</span>
            </a-menu-item>
        </template>
    </a-menu>
</template>
<script>
    import SubMenu from "./SubMenu";
    export default {
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

