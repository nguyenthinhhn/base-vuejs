import axios from '~/libs/axios';

export const actions = {
    async nuxtClientInit({ commit }) {
        const { data } = await axios.get('/web-init');
        const { user } = data;

        commit('auth/set', user);
    },
};
