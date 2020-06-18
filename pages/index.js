import React from 'react';
import Layout from '../components/layout'
import Player from '../components/player.js'
import utilStyles from '../styles/utils.module.css'
import { getPlayersIdByPosition, getPlayersById, getPositionsName} from '../lib/playersApi'


export default function Home({playersByPosition, playersById, positionsName}) {
  console.log(Object.keys(playersByPosition))
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
            </div>
          <div className={utilStyles.bottom}>
            {Object.keys(playersByPosition).sort().map(position =>{
              return(<>
                <h1 key={position}>{positionsName[position]}</h1>
                <hr className={utilStyles.divider}></hr>
                <div className={utilStyles.grid}>
                {playersByPosition[position].map(playerId =>
                  <Player player={playersById[playerId]}/>
                )}</div></>)
              })}
            </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const playersByPosition=getPlayersIdByPosition()
  const playersById=getPlayersById();
  const positionsName=getPositionsName()
  return {
    props: {
      playersByPosition,
      playersById,
      positionsName
    }
  }
}


