import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getAllPlayers } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPlayers }) {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <div>
            <h1>
                Jugadores de la plantilla
            </h1>
            <div className={`${utilStyles.playersTable}`}>
            <table className={`${utilStyles.table}`}>
                <thead>
                <tr className={`${utilStyles.tabletitle} ${utilStyles.tr}`}>
                    <th className={`${utilStyles.title} ${utilStyles.th}`}>id</th>
                    <th className={`${utilStyles.title} ${utilStyles.th}`}>Jugador</th>
                    <th className={`${utilStyles.title} ${utilStyles.th}`}>Posicion</th>
                </tr>
                </thead>
                <tbody>
                {allPlayers.map(player=>(
                    <Link href="/players/[id]" as={`/players/${player.id}`}>
                  <tr className={`${utilStyles.tableplayer} ${utilStyles.tr}`}>
                        <td className={`${utilStyles.playerInfo} ${utilStyles.td}`}>{player.id}</td>
                        <td className={`${utilStyles.playerInfo} ${utilStyles.td}`}>{player.name}</td>
                        <td className={`${utilStyles.playerInfo} ${utilStyles.td}`}>{player.position}</td>
                    </tr></Link>
                ))}
                </tbody>
            </table>
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
