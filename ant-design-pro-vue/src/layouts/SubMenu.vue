<template>
<!--    <a-sub-menu key="sub1">-->
<!--        <span slot="title"><a-icon type="appstore" /><span>Navigation Three</span></span>-->
<!--        <a-menu-item key="3">Option 3</a-menu-item>-->
<!--        <a-menu-item key="4">Option 4</a-menu-item>-->
<!--        <a-sub-menu key="sub1-2" title="Submenu">-->
<!--            <a-menu-item key="5">Option 5</a-menu-item>-->
<!--            <a-menu-item key="6">Option 6</a-menu-item>-->
<!--        </a-sub-menu>-->
<!--    </a-sub-menu>-->
    <a-sub-menu :key="menuInfo.path">
        <span slot="title">
<!--            <a-icon-->
<!--                    v-if="menuInfo.meta.icon"-->
<!--                    :type="menuInfo.meta.icon" />-->
            <span>xxx</span>
        </span>
        <template v-for="item in menuInfo.children">
            <a-menu-item
                    v-if="!item.children"
                    :key="item.path">
                <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
                <span>{{item.meta.title}}XXXXXX</span>
            </a-menu-item>
            <sub-menu v-else :key="item.path" :menu-info="item" />
        </template>
    </a-sub-menu>
</template>
<script>
export default {
    props: ["menu-info"],
    created() {
        console.log(this.menuInfo);
    }
};
</script>
<style></style>
