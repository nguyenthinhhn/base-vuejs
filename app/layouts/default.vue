<template>
    <ElContainer direction="vertical" class="min-h-screen">
        <ElHeader class="shadow flex items-center">
            <Navbar />
        </ElHeader>

        <ElMain>
            <nuxt />
        </ElMain>

        <ElFooter class="flex items-center">
            <Footer />
        </ElFooter>
    </ElContainer>
</template>

<script>
    import Footer from '~/components/_share/_layouts/client/Footer.vue';
    import Navbar from '~/components/_share/_layouts/client/Navbar.vue';

    export default {
        components: {
            Footer,
            Navbar,
        },

        middleware: 'auth',
    };
</script>
