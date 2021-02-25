import Redirect from '../../components/redirect'
import Meta from '../../components/meta'
import { getRedirectKeys, getRedirectURL } from '../../lib/redir'

export default function HREF({ href }) {
    return (
        <>
        <Meta meta={href.meta} />
        <Redirect href={href.url} />
        </>
    )
}

export async function getStaticPaths() {
    const paths = getRedirectKeys()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const href = getRedirectURL(params.href)
    return {
        props: {
            href
        }
    }
}