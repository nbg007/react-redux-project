import queryString from 'query-string'
import { browserHistory } from 'react-router'

process.env.NODE_ENV === 'production'

function getServer() {
    switch (process.env.SERVER_ENV) {

        case 'local':
            return 'http://localhost:3000/'

        case 'production':
            return 'http://119.29.55.113:3000/'

        default:
            return 'http://119.29.19.250:3000/'

    }
}

function getUrl(path, query) {
    if (path.startsWith('http')) {
        return path
    }

    if (query) {
        const params = queryString.stringify(query)
        return getServer() + path + '?' + params
    }

    return getServer() + path
}

function getHeaders() {
    let headersConfig = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    if (localStorage.token) {
        headersConfig.Authorization = localStorage.token
    }

    return headersConfig
}

const http = {
    get: (path, query) => new Promise((resolve, reject) => {
        fetch(getUrl(path, query), {
                method: 'GET',
                headers: getHeaders()
            })
            .then(res => {
                if (res.status === 401) {
                    delete localStorage.token
                    browserHistory.replace('/login')
                    return {}
                }
                return res.json()
            })
            .then(json => resolve(json))
            .catch(err => reject(err))
    }),

    post: (path, query, payload) => new Promise((resolve, reject) => {
        fetch(getUrl(path), {
                method: 'POST',
                headers: getHeaders(),
                body: JSON.stringify(payload)
            })
            .then(res => {
                if (res.status === 401) {
                    delete localStorage.token
                    browserHistory.replace('/login')
                    return {}
                }
                return res.json()
            })
            .then(json => resolve(json))
            .catch(err => reject(err))
    }),

    put: (path, query, payload) => new Promise((resolve, reject) => {
        fetch(getUrl(path), {
                method: 'PUT',
                headers: getHeaders(),
                body: JSON.stringify(payload)
            })
            .then(res => {
                if (res.status === 401) {
                    delete localStorage.token
                    browserHistory.replace('/login')
                    return {}
                }
                return res.json()
            })
            .then(json => resolve(json))
            .catch(err => reject(err))
    }),

    delete: (path, query) => new Promise((resolve, reject) => {
        fetch(getUrl(path, query), {
                method: 'DELETE',
                headers: getHeaders()
            })
            .then(res => {
                if (res.status === 401) {
                    delete localStorage.token
                    browserHistory.replace('/login')
                    return {}
                }
                return res.json()
            })
            .then(json => resolve(json))
            .catch(err => reject(err))
    })

}

export default http
