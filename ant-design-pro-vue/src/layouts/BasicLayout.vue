<template>
    <div>
        <a-layout style="height:100vh;">
            <a-layout-sider
                    :trigger="null"
                    collapsible
                    v-model="collapsed"
            >
                <SiderMenu />
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    <a-icon
                            class="trigger"
                            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                            @click="()=> collapsed = !collapsed"
                    />
                    <Header />
                </a-layout-header>
                <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                    <router-view></router-view>
                </a-layout-content>
                <a-layout-footer style="text-align: center;">
                    <Footer />
                </a-layout-footer>
            </a-layout>
        </a-layout>
        <SettingDrawer />
    </div>
</template>
<script>
    import Header from "./Header";
    import SiderMenu from "./SiderMenu";
    import Footer from "./Footer";
    import SettingDrawer from "../components/SettingDrawer";
    export default {
        data() {
            return {
                collapsed: false
            };
        },
        components: {
            Header,
            SiderMenu,
            Footer,
            SettingDrawer
        }
    };
</script>
<style scoped>
    .trigger {
        padding: 0 20px;
        font-size: 20px;
    }
</style>
