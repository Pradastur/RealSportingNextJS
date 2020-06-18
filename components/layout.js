import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'


const name = 'Real Sporting de Gijon'
export const siteTitle='Sporting de Gijon'

/*Buscar :    
players [{id, position, name}] => 
playersById -> {id: {player}..}
playersIdByPositon -> { position: [p.id...] }
{Object.keys(playersIdByPositon).map(position => {

 const playsersIds = playersIdByPositon[position]

playsersIds.map( playerId => <Player player={playersById[playerId]} */

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={styles.band}>
            <img
              src="/images/logo.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            </div>
          </>
        ) : (
          <>
            <Link href="/">
            <div className={styles.band}>
            <img
              src="/images/logo.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            </div>
            </Link>
          </>
        )}
      </header>
      <main className={utilStyles.main}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Volver</a>
          </Link>
        </div>
      )}
    </div>
  )
}
