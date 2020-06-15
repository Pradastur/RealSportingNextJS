import Layout,{ playersDetails } from '../../components/layout'
import {getAllPlayersIds , getPlayer} from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Player({ playerDetail }) {
  return (
    <Layout>
      <Head>
      <title>{playerDetail.Nombre}</title>
      </Head>
        <div className={utilStyles.grid}>
          <div className={utilStyles.card}>
            <div className={utilStyles.detailName}>
            <h1>{playerDetail.name}  </h1>
            </div>
            <div className={utilStyles.card}>
              <h5>Posicion: {playerDetail.position}</h5>
            </div>
            <div className={utilStyles.card}>
            <h5>Dorsal: {playerDetail.id}</h5>
            </div>
            <div className={utilStyles.card}>
            <h5>Nacionalidad: {playerDetail.nationality}</h5>
          </div>
          </div>
        </div>
    </Layout>
  )
}

export function getStaticPaths() {
  const paths = getAllPlayersIds()
  return {
    paths,
    fallback: false
  }
}


export function getStaticProps({ params }) {
  const playerDetail = getPlayer(params.id)
  return {
    props: {
     playerDetail
    }
  }
}
