import queryString from 'query-string'

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

const headersConfig = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': localStorage.token || ''
}

const http = {
    get: (path, query) => new Promise((resolve, reject) => {
        fetch(getUrl(path, query), {
                method: 'GET',
                headers: headersConfig
            })
            .then(res => res.json())
            .then(json => resolve(json))
            .catch(err => reject(err))
    }),

    post: (path, query, payload) => new Promise((resolve, reject) => {
        fetch(getUrl(path), {
                method: 'POST',
                headers: headersConfig,
                body: JSON.stringify(payload)
            })
            .then(res => res.json())
            .then(json => resolve(json))
            .catch(err => reject(err))
    })
}

export default http
