// get token from local storage

export function getToken() {
    const token = window.localStorage.getItem("token");

    if (!token) {
        return null
    }

    return token
}