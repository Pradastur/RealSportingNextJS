import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { playersDetails } from '../components/layout'

export function getAllPlayers(){
  return playersDetails
}

export function getAllPlayersIds() {
  const players = playersDetails
  return players.map(player => {
    return {
      params: {
        id: player.id.toString()
      }
    }
  })
}

export function getPlayer(id){
  const playerDetail=playersDetails.find(player=>(player.id==id));
  return{
    ...playerDetail
  }
}
