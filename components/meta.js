import Head from 'next/head'

const og = {
    "theme-color": '',
    "og:description": '',
    "og:site_name": '',
    "og:title": '',
    "og:image": '',
    "og:image:height": '',
    "og:image:width": '',
    "twitter:card": '',
}

export default function Meta({ meta = og }) {
    return (
        ( meta !== og && <Head>
            <meta name="theme-color" content={meta['theme-color']} />
            <meta property="og:description" content={meta['og:description']} />
            <meta property="og:title" content={meta['og:title']} />
            <meta property="og:image" content={meta['og:image']} />
            <meta property="og:image:height" content={meta['og:image:height']} />
            <meta property="og:image:width" content={meta['og:image:width']} />
            <meta property="og:site_name" content={meta['og:site_name']} />
            <meta name = "twitter:card" content={meta['twitter:card']} />
        </Head>
        )
    )
}