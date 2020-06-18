import Layout,{ playersDetails } from '../../components/layout'
import {getAllPlayersIds , getPlayer} from '../../lib/playersApi'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export default function Player({ playerDetail }) {
  return (
    <Layout>
      <Head>
      <title>{playerDetail.Nombre}</title>
      </Head>
        <div className={utilStyles.grid}>
          <div className={utilStyles.cardPlayerDetail}>
            <div className={utilStyles.playerPhotoDetail}>
            <img className={utilStyles.detailPhoto} src={playerDetail.photo}/>
            </div>
            <div className={utilStyles.playerDetail}>
                <h2>{playerDetail.name}</h2>
                <div className={utilStyles.moreInfo}>
                <div className={utilStyles.playerNumber}>
                <h4>Dorsal: {playerDetail.id}</h4>
                </div>
                <div className={utilStyles.playerNationality}>
                <h4>Nacionalidad: {playerDetail.nationality}</h4>
                </div>
                <div className={utilStyles.playerPosition}>
                <h4>Posición: {playerDetail.position}</h4>
                </div>
                <div className={utilStyles.playerHeight}>
                <h4>Altura: {playerDetail.height}</h4>
                </div>
                </div>
            </div>
            
          </div>
        </div>
        <div className={utilStyles.detailInfo}>
        <div className={utilStyles.grid}>
          <div className={utilStyles.cardPlayerInfoDetail}>
                     
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
