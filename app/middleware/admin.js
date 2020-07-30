import _get from 'lodash/get';

export default function ({ store, error }) {
    if (!_get(store.state, 'auth.user.is_admin', false)) {
        error(404);
    }
}
