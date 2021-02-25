import Layout from '../components/layout'
import Image from 'next/image'
import style from '../components/layout.module.css'
import utilStyle from '../styles/utils.module.css'




export default function Home({ guildIcon }) {
  return (
    <>
    <Layout home icon={guildIcon}>
      <div className={style.header}>
      <Image src={guildIcon} width="224px" height="224px" className={utilStyle.borderCircle}/>
      <h1 className={utilStyle.heading2Xl} style={{ color: '#99AAB5' }}>Ad Nauseam</h1>
      <iframe src="https://discord.com/widget?id=806550877439131660&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
    </Layout>
    </>
  )
}

export async function getServerSideProps() {

  const res = await fetch(`https://localhost/api/guildicon?guildID=806550877439131660`)
  const json = await res.json()

  return {
    props: {
      guildIcon: json.guildIcon
    }
  }
}
