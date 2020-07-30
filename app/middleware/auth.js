export default function ({ store, redirect }) {
    if (!store.state.auth.user) {
        redirect(`/login?continue=${window.location.href}`);
    }
}
