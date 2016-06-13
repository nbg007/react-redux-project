const SERVER_CONFIG = {
    local: 'http://localhost:3000/',
    dev: 'http://119.29.19.250:3000/',
    pro: 'http://119.29.55.113:3000/'
}

function getUrl(path) {
    if (path.startsWith('http')) {
        return path
    }
    return `${SERVER_CONFIG.dev}${path}`
}

const http = {
    get: (path, query) => new Promise((resolve, reject) => {
        fetch(getUrl(path))
            .then(res => res.json())
            .then(json => resolve(json))
            .catch(err => reject(err))
    }),

    post: (path, query, payload) => new Promise((resolve, reject) => {
        fetch(getUrl(path), {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(res => res.json())
            .then(json => resolve(json))
            .catch(err => reject(err))
    })
}

export default http
