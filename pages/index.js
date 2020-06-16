import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getAllPlayers} from '../lib/players'


export default function Home({ allPlayers}) {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

      <div className={utilStyles.top}>
        <div className={utilStyles.topLeft}>
            <h1>
                Plantilla del Real Sporting de Gijon SAD
            </h1>
            <hr className={utilStyles.divider}></hr>
            <img className={utilStyles.squadPhoto} src="/images/plantilla.jpg"/>
            </div>
        <div className={utilStyles.topRight}>
           <img className={utilStyles.topPhoto} src="/images/escudo.png"/>
        </div>
            </div>
          <div className={utilStyles.bottom}>
            <h2 className={utilStyles.title}>Porteros</h2>
            <hr className={utilStyles.divider}></hr>
            <div className={utilStyles.grid}>
            {allPlayers.map(player=>{
              if(player.position=='Portero'){
                return <Link href="/players/[id]" as={`/players/${player.id}`}>
                <div className={utilStyles.cardPlayer}>
                  <div className={utilStyles.nameCard}>
                    <div className={utilStyles.nameCardText}>{player.name}</div>
                    <div className={utilStyles.nameCardPosition}>{player.position}</div>
                    <div className={utilStyles.dorsal}>{player.id}</div>
                    </div>
                    <img className={utilStyles.photo} src={player.photo}/>
                    
                </div></Link>
              }
            })}
            </div>
            <h2 className={utilStyles.title}>Defensas</h2>
            <hr className={utilStyles.divider}></hr>
            <div className={utilStyles.grid}>
            {allPlayers.map(player=>{
              if(player.position=='Defensa'){
                return <Link href="/players/[id]" as={`/players/${player.id}`}>
                <div className={utilStyles.cardPlayer}>
                  <div className={utilStyles.nameCard}>
                  <div className={utilStyles.nameCardText}>{player.name}</div>
                  <div className={utilStyles.nameCardPosition}>{player.position}</div>
                  <div className={utilStyles.dorsal}>{player.id}</div>
                    </div>
                    <img className={utilStyles.photo} src={player.photo}/>
                </div></Link>
                
              }
            })}
            </div>
            <h2 className={utilStyles.title}>Centrocampistas</h2>
            <hr className={utilStyles.divider}></hr>
            <div className={utilStyles.grid}>
            {allPlayers.map(player=>{
              if(player.position=='Centrocampista'){
                return <Link href="/players/[id]" as={`/players/${player.id}`}>
                <div className={utilStyles.cardPlayer}>
                  <div className={utilStyles.nameCard}>
                  <div className={utilStyles.nameCardText}>{player.name}</div>
                  <div className={utilStyles.nameCardPosition}>{player.position}</div>
                  <div className={utilStyles.dorsal}>{player.id}</div>
                    </div>
                    <img className={utilStyles.photo} src={player.photo}/>
                    
                </div></Link>
                
              }
            })}
            </div>
            <h2 className={utilStyles.title}>Delanteros</h2>
            <hr className={utilStyles.divider}></hr>
            <div className={utilStyles.grid}>
            {allPlayers.map(player=>{
              if(player.position=='Delantero'){
                return <Link href="/players/[id]" as={`/players/${player.id}`}>
                <div className={utilStyles.cardPlayer}>
                    <div className={utilStyles.nameCard}>
                    <div className={utilStyles.nameCardText}>{player.name}</div>
                    <div className={utilStyles.nameCardPosition}>{player.position}</div>
                    <div className={utilStyles.dorsal}>{player.id}</div>
                    </div>
                    <img className={utilStyles.photo} src={player.photo}/>
                </div></Link>
              }
            })}
            </div>
            </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPlayers = getAllPlayers()
  return {
    props: {
      allPlayers
    }
  }
}
