<template>
    <div>
        <el-submenu v-if="router.children" :key="router.path" :index="router.path">
            <template slot="title">
                <i :class="router.icon" /> {{ router.title }}
            </template>
            <nuxt-link
                v-for="routerChild in router.children"
                :key="routerChild.path"
                :to="routerChild.path"
                class="a-link"
            >
                <el-menu-item :index="routerChild.path">
                    <template slot="title">
                        {{ routerChild.title }}
                    </template>
                </el-menu-item>
            </nuxt-link>
        </el-submenu>

        <nuxt-link v-else :key="router.path" :to="router.path" class="a-link">
            <el-menu-item :index="router.path">
                <i :class="router.icon" />{{ router.title }}
            </el-menu-item>
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        name: 'SideBarItem',
        props: {
            router: Object,
        },
    };
</script>
