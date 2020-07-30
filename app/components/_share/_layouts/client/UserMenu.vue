<template>
    <ElPopover
        :append-to-body="false"
        transition="el-zoom-in-top"
        placement="bottom-end"
        popper-class="user-menu__popper"
    >
        <ElAvatar
            slot="reference"
            class="cursor-pointer"
            :src="auth.user.profile_picture"
        />

        <div class="user-menu__top flex">
            <ElAvatar :src="auth.user.profile_picture" :size="40" class="mr-4" />

            <div class="overflow-hidden">
                <div class="user-menu__info">
                    <div class="text-blue-700 font-bold truncate">
                        {{ auth.user.name }}
                    </div>

                    <div class="text-gray-600 truncate">
                        @{{ auth.user.username }}
                    </div>
                </div>
            </div>
        </div>

        <hr>

        <ul>
            <li class="user-menu__menu-item">
                <nuxt-link to="/admin">
                    <ion-icon name="cog" size="md" />
                    Site Administration
                </nuxt-link>
            </li>
        </ul>

        <hr>

        <div class="user-menu__menu-item" @click="logout">
            <a>
                <ion-icon name="log-out" size="md" />
                Sign out
            </a>
        </div>
    </ElPopover>
</template>

<script>
    import { mapState } from 'vuex';
    import axios from '~/libs/axios';

    export default {
        computed: {
            ...mapState(['auth']),
        },

        methods: {
            async logout() {
                await axios.post('/logout');
                window.location.href = '/';
            },
        },
    };
</script>

<style lang="scss">
    .user-menu {
        &__popper {
            padding: 0 !important;
            min-width: 250px !important;
            max-width: 300px;

            hr {
                margin: 0;
            }

            .popper__arrow {
                &:after {
                    border-bottom-color: #f0f0f0 !important;
                }
            }
        }

        &__top {
            padding: .75rem 1rem;
            background-color: #f0f0f0;
            overflow: hidden;

            .ElAvatar {
                margin-right: 1rem;
            }
        }

        &__info {
            margin-bottom: .5rem;
        }

        &__edit-btn {
            padding: 6px 12px !important;
        }

        &__menu-item {
            font-size: 1rem;
            display: block;
            color: inherit;
            cursor: pointer;

            a {
                outline: none;
                display: flex;
                align-items: center;
                padding: .75rem 1rem;
            }

            &:hover {
                color: inherit;
                text-decoration: none;
            }

            .ion {
                margin-right: .75rem;
            }

            &:hover {
                background-color: #f6f6f7;
            }
        }
    }
</style>
