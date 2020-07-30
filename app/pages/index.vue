<script>
    export default {
        layout: 'blank',

        middleware: ['guest'],

        fetch({ redirect }) {
            redirect('/dashboard');
        },
    };
</script>
