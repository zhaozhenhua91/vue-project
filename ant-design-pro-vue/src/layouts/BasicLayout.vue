<template>
    <div>
        <a-layout style="min-height: 100vh;">
            <a-layout-sider>
                <menu />
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    ggggg
                </a-layout-header>
                <a-layout-content>
                    <router-view></router-view>
                </a-layout-content>
                <a-layout-footer>
                    <footer />
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>
<script>
    import Header from "./Header.vue";
    import Menu from "./Menu";
    import Footer from "./Footer.vue";
    export default {
        comments: {
            Header,
            Menu,
            Footer
        }
    }
</script>
<style>

</style>
