import Head from 'next/head'
import Link from 'next/link'
import style from './layout.module.css'
import utilStyle from '../styles/utils.module.css'
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from  '@fortawesome/free-brands-svg-icons'
import Widget from '../components/widget'

library.add(fab, fas)

const siteTitle = 'Ad Nauseam'

export default function Layout({ children, home, title }) {
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
                <meta property="og:image" content="/images/profile.jpg" />
                <meta property="og:image:height" content="640" />
                <meta property="og:image:width" content="640" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            

            <Navbar expand='lg' style={{ backgroundColor: "rgba(0,0,0,0.1)", marginTop: ".5rem" }}>
                <Navbar.Toggle label="basic-navbar-nav">
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <div className={utilStyle.icon}>
                <FontAwesomeIcon icon={['fas', 'code']} height="50px" width="50px" style={{ marginRight: '1rem' }}/>
                </div>
                    <Nav className="mr-auto">
                        
                        <div className={style.buttons}>
                        <Button variant="dark" href="/">Home</Button>
                        <Button variant="dark" href="/about">About</Button>
                        <Button variant="dark" href="/projects">Projects</Button>
                        </div>
                    </Nav>
                    
                </Navbar.Collapse>

                {!home && (
                    <h1 className={utilStyle.heading2Xl} style={{ color: '#99AAB5', marginRight: "49rem"}}>Ad Nauseam</h1>
                )}
                <div className={utilStyle.icon}>
                <Link href="https://github.com/ad-nauseam/">
                <FontAwesomeIcon icon={['fab', 'github']} />
                </Link>
                <Link href="https://twitter.com/synzv1/">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                </Link>
                </div>
            </Navbar>

            <div className={style.container}>
            <main>{children}</main>
            </div>
            <Widget />
        </>
    )
}