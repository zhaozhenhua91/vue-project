<template>
    <div class="header">
        <a-dropdown>
            <a-icon type="global" />
            <a-menu slot="overlay">
                <a-menu-item>
                    <a href="javascript:;">1st menu item</a>
                </a-menu-item>
                <a-menu-item>
                    <a href="javascript:;">2nd menu item</a>
                </a-menu-item>
                <a-menu-item>
                    <a href="javascript:;">3rd menu item</a>
                </a-menu-item>
            </a-menu>
        </a-dropdown>
    </div>
</template>
<style scoped>
    .header {
        float:right;
        margin-right: 20px;
        font-size: 20px;
    }
</style>
