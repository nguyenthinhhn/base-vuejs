<template functional>
    <i
        class="ion"
        :class="[
            typeof props.size === 'string' ? `ion--${props.size}` : null,
            `ion-${props.style}-${props.name}`
        ]"
    />
</template>

<script>
    export default {
        props: {
            name: String,

            style: {
                type: String,
                default: 'ios',
            },

            size: {
                type: [String, Number],
            },
        },
    };
</script>

<style lang="scss">
    .ion {
        &--sm {
            font-size: .75rem;
        }

        &--md {
            font-size: 1.25rem;
        }

        &--lg {
            font-size: 1.5rem;
        }

        &--xl {
            font-size: 1.75rem;
        }
    }
</style>
