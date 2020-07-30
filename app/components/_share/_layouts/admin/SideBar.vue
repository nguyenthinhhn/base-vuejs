<template>
    <div>
        <el-aside width="250px">
            <el-menu
                :default-active="activeMenu"
                :default-openeds="['puzzles', 'contests']"
                class="el-menu-demo sidebar-custom"
                background-color="#304156"
                text-color="#bfcbd9"
                active-text-color="#ffd04b"
            >
                <side-bar-item v-for="router in routers" :key="router.index" :router="router" />
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
    import { split, join } from 'lodash';

    import SideBarItem from './SideBarItem.vue';

    export default {
        name: 'SideBar',
        components: {
            SideBarItem,
        },
        data() {
            return {
                routers: [
                    {
                        path: '/',
                        title: 'Dashboard',
                        icon: 'el-icon-s-home',
                    },
                    {
                        path: 'users',
                        title: 'Users',
                        icon: 'el-icon-user-solid',
                        children: [
                            {
                                path: 'admin',
                                title: 'Admin',
                            },
                            {
                                path: 'foreigner',
                                title: 'Foreigner',
                            },
                        ],
                    },
                ],
            };
        },
        computed: {
            activeMenu() {
                const { currentRoute } = this.$router;
                const routerAr = split(currentRoute.fullPath, '/');

                return join(routerAr, '/');
            },
        },
    };
</script>
