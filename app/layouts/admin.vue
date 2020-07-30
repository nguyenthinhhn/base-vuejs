<template>
    <el-container>
        <side-bar />
        <el-container direction="vertical">
            <nav-bar />
            <el-main>
                <transition name="fade-transform" mode="out-in">
                    <nuxt />
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import SideBar from '~/components/_share/_layouts/admin//SideBar.vue';
    import NavBar from '~/components/_share/_layouts/admin/NavBar.vue';

    export default {
        middleware: 'admin',

        components: {
            SideBar,
            NavBar,
        },
    };
</script>
