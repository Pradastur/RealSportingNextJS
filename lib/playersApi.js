import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


const playersDetails = [
  {
      id:2,
      name: "Damian Pérez",
      position:1,
      nationality:"Argentina",
      photo:"../images/damian_perez.jpg",
      height:'169 cm'
      
  },
  {
      id:3,
      name:"Carlos Cordero",
      position:1,
      nationality:"España",
      photo:"/images/cordero.jpg",
      height:'181 cm'
  },
  {
      id:4,
      name: "Marc Valiente",
      position:1,
      nationality:"España",
      photo:"/images/valiente.jpg",
      height:'184 cm'
  },
  {
      id:5,
      name:"Borja López",
      position:1,
      nationality:"España",
      photo:"/images/borja.jpg",
      height:'191 cm'
  },
  {
      id:6,
      name: "Babin",
      position:1,
      nationality:"Martinica",
      photo:"/images/babin.jpg",
      height:'181 cm'
  },
  {
      id:7,
      name:"Aitor Garcia",
      position:3,
      nationality:"España",
      photo:"/images/aitor.jpg",
      height:'173 cm'
  },
  {
      id:8,
      name: "Hernan Santana",
      position:2,
      nationality:"España",
      photo:"/images/santana.jpg",
      height:'180 cm'
  },
  {
      id:9,
      name:"Alvaro Vazquez",
      position:3,
      nationality:"España",
      photo:"/images/alvaro.jpg",
      height:'182 cm'
  },
  {
      id:10,
      name: "Carlos Carmona",
      position:2,
      nationality:"España",
      photo:"/images/carmona.jpg",
      height:'178 cm'
  },
  {
      id:11,
      name:"Murilo",
      position:3,
      nationality:"Brasil",
      photo:"/images/murilo.jpg",
      height:'176 cm'
  },
  {
      id:13,
      name: "Diego Mariño",
      position:0,
      nationality:"España",
      photo:'/images/marino.jpg',
      height:'187 cm'
  },
  {
      id:14,
      name:"Nacho Mendez",
      position:2,
      nationality:"España",
      photo:"/images/mendez.jpg",
      height:'179 cm'
  },
  {
      id:15,
      name: "Francisco Molinero",
      position:1,
      nationality:"España",
      photo:"/images/molinero.jpg",
      height:'177 cm'
  },
  {
      id:16,
      name:"Manu Garcia",
      position:2,
      nationality:"España",
      photo:"/images/manu.jpg",
      height:'169 cm'
  },
  {
      id:17,
      name: "Unai Medina",
      position:1,
      nationality:"España",
      photo:"/images/medina.jpg",
      height:'179 cm'
  },
  {
      id:18,
      name:"Javi Fuego",
      position:2,
      nationality:"España",
      photo:"/images/fuego.jpg",
      height:'182 cm'
  },
  {
      id:20,
      name: "Cristian Salvador",
      position:2,
      nationality:"España",
      photo:"/images/cristian.jpg",
      height:'184 cm'
  },
  {
      id:21,
      name:"Alvaro Traver",
      position:3,
      nationality:"España",
      photo:"/images/traver.jpg",
      height:'187 cm'
  },
  {
      id:22,
      name: "Pablo Pérez",
      position:3,
      nationality:"España",
      photo:"/images/pablo.jpg",
      height:'187 cm'
  },
  {
      id:23,
      name:"Uros Djurdjevic",
      position:3,
      nationality:"Serbia",
      photo:"/images/uros.jpg",
      height:'181 cm'
  },
  {
      id:24,
      name:"Pedro Díaz",
      position:2,
      nationality:"España",
      photo:"/images/pedro.jpg",
      height:'181 cm'
  }
]
const positionsName={0: "Portero", 1: "Defensa", 2: "Centrocampista", 3: "Delantero"}


export function getPositionsName(){
  return positionsName
}

export function getPlayersIdByPosition(){
    const playersByPosition= playersDetails.reduce(
        (acc,player) =>({...acc,[player.position]:[...(acc[player.position] || []),player.id]}),{});
    return playersByPosition
}


export function getPlayersById(){
    const playersById= playersDetails.reduce(
        (acc,player)=>(
            {...acc,[player.id]:player}
        ),{});
    return playersById
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
