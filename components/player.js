import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import React from 'react';

export default function Player({ player }){
    return (
    <Link href="/players/[id]" as={`/players/${player.id}`}>
    <div className={utilStyles.cardPlayer}>
      <div className={utilStyles.nameCard}>
        <div className={utilStyles.nameCardText}>{player.name}</div>
        <div className={utilStyles.nameCardPosition}>{player.position}</div>
        <div className={utilStyles.dorsal}>{player.id}</div>
        </div>
        <img className={utilStyles.photo} src={player.photo}/>
        
    </div></Link>
    )
}