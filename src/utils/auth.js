module.exports = {
    getToken() {
        return localStorage.token
    },

    logout(cb) {
        delete localStorage.token
        if (cb) cb()
        // this.onChange(false)
    },

    onChange() {

    },

    loginIn() {
        return !!localStorage.token
    }
}
