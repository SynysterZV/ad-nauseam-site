import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import style from './layout.module.css'
import utilStyle from '../styles/utils.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from  '@fortawesome/free-brands-svg-icons'
import Widget from '../components/widget'
import Drawer from '../components/drawer'

library.add(fab, fas)

const siteTitle = 'Ad Nauseam'

export default function Layout({ children, home, title, icon }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{title || siteTitle}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta name="theme-color" content="#ff0000" />
                <meta property="og:title" content="Ad Nauseam" />
                <meta property="og:description" content="Hippity hoppity your virginity is my property" />
                <meta property="og:site_name" content="Ad Nauseam" />
                <meta property="og:image" content={icon} />
                <meta property="og:image:height" content="640" />
                <meta property="og:image:width" content="640" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <Drawer />
            <Widget />
            
            <div className={style.container}>
            <main>{children}</main>
            </div>
        </>
    )
}