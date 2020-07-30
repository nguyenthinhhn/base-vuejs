<template>
    <nav class="w-full flex items-center justify-between">
        <nuxt-link to="/">
            <img src="" :class="$style.logo">
        </nuxt-link>

        <div>
            <UserMenu />
        </div>
    </nav>
</template>

<script>
    import UserMenu from './UserMenu.vue';

    export default {
        components: {
            UserMenu,
        },
    };
</script>

<style module lang="scss">
    .logo {
        height: 40px;
    }
</style>
