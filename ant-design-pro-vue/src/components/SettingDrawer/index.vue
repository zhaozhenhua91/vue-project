<template>
    <div>
        <a-drawer
                placement="right"
                :closable="false"
                @close="onClose"
                :visible="visible"
                width="300px"
        >
            <template v-slot:handle>
                <div class="setting-drawer-handle" @click="visible = !visible">
                    <a-icon type="setting"></a-icon>
                </div>
            </template>
            <div>
                <div>
                    <h2>整体风格定制</h2>
                    <a-radio-group name="radioGroup"
                                   :value="$route.query.navTheme || 'dark'"
                                   @change="e => handleSettingChange('navTheme',e.target.value)">
                        <a-radio value="dark">黑色</a-radio>
                        <a-radio value="light">白色</a-radio>
                    </a-radio-group>
                    <h2>导航模式</h2>
                    <a-radio-group name="radioGroup"
                                   :value="$route.query.navLayout || 'left'"
                                   @change="e => handleSettingChange('navLayout',e.target.value)">
                        <a-radio value="left">左侧</a-radio>
                        <a-radio value="top">顶部</a-radio>
                    </a-radio-group>
                </div>
            </div>
        </a-drawer>
    </div>
</template>
<script>
    export default {
        data () {
            return {
               visible: false
            };
        },
        methods: {
            showDrawer() {
                this.visible = true
            },
            onClose() {
                this.visible = false
            },
            handleSettingChange(type, value) {
                this.$router.push({ ...this.$route.query,query: {[type]:value}});
                console.log(this.$router);
                console.log(this.$route);
            }
        }
    };
</script>
<style lang="less" src="./index.less">

</style>
