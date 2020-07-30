<template>
    <div class="container mx-auto min-h-screen flex items-center">
        <Login :continue-url="$route.query.continue" />
    </div>
</template>

<script>
    import Login from '~/components/Login.vue';

    export default {
        layout: 'blank',

        middleware: ['guest'],

        components: {
            Login,
        },
    };
</script>
