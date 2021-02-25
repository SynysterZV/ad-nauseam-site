import urls from '../assets/redirects'

export function getRedirectKeys() {
    return Object.keys(urls).map(url => {
        return {
            params: {
                href: url
            }
        }
    })
}

export function getRedirectURL(href) {
    return urls[href]
}