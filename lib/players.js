import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


const playersDetails = [
  {
      id:2,
      name: "Damian Pérez",
      position:"Defensa",
      nationality:"Argentina",
      photo:"../images/damian_perez.jpg",
      height:'169 cm'
      
  },
  {
      id:3,
      name:"Carlos Cordero",
      position:"Defensa",
      nationality:"España",
      photo:"/images/cordero.jpg",
      height:'181 cm'
  },
  {
      id:4,
      name: "Marc Valiente",
      position:"Defensa",
      nationality:"España",
      photo:"/images/valiente.jpg",
      height:'184 cm'
  },
  {
      id:5,
      name:"Borja López",
      position:"Defensa",
      nationality:"España",
      photo:"/images/borja.jpg",
      height:'191 cm'
  },
  {
      id:6,
      name: "Babin",
      position:"Defensa",
      nationality:"Martinica",
      photo:"/images/babin.jpg",
      height:'181 cm'
  },
  {
      id:7,
      name:"Aitor Garcia",
      position:"Delantero",
      nationality:"España",
      photo:"/images/aitor.jpg",
      height:'173 cm'
  },
  {
      id:8,
      name: "Hernan Santana",
      position:"Centrocampista",
      nationality:"España",
      photo:"/images/santana.jpg",
      height:'180 cm'
  },
  {
      id:9,
      name:"Alvaro Vazquez",
      position:"Delantero",
      nationality:"España",
      photo:"/images/alvaro.jpg",
      height:'182 cm'
  },
  {
      id:10,
      name: "Carlos Carmona",
      position:"Centrocampista",
      nationality:"España",
      photo:"/images/carmona.jpg",
      height:'178 cm'
  },
  {
      id:11,
      name:"Murilo",
      position:"Delantero",
      nationality:"Brasil",
      photo:"/images/murilo.jpg",
      height:'176 cm'
  },
  {
      id:13,
      name: "Diego Mariño",
      position:"Portero",
      nationality:"España",
      photo:'/images/marino.jpg',
      height:'187 cm'
  },
  {
      id:14,
      name:"Nacho Mendez",
      position:"Centrocampista",
      nationality:"España",
      photo:"/images/mendez.jpg",
      height:'179 cm'
  },
  {
      id:15,
      name: "Francisco Molinero",
      position:"Defensa",
      nationality:"España",
      photo:"/images/molinero.jpg",
      height:'177 cm'
  },
  {
      id:16,
      name:"Manu Garcia",
      position:"Centrocampista",
      nationality:"España",
      photo:"/images/manu.jpg",
      height:'169 cm'
  },
  {
      id:17,
      name: "Unai Medina",
      position:"Defensa",
      nationality:"España",
      photo:"/images/medina.jpg",
      height:'179 cm'
  },
  {
      id:18,
      name:"Javi Fuego",
      position:"Centrocampista",
      nationality:"España",
      photo:"/images/fuego.jpg",
      height:'182 cm'
  },
  {
      id:20,
      name: "Cristian Salvador",
      position:"Centrocampista",
      nationality:"España",
      photo:"/images/cristian.jpg",
      height:'184 cm'
  },
  {
      id:21,
      name:"Alvaro Traver",
      position:"Delantero",
      nationality:"España",
      photo:"/images/traver.jpg",
      height:'187 cm'
  },
  {
      id:22,
      name: "Pablo Pérez",
      position:"Delantero",
      nationality:"España",
      photo:"/images/pablo.jpg",
      height:'187 cm'
  },
  {
      id:23,
      name:"Uros Djurdjevic",
      position:"Delantero",
      nationality:"Serbia",
      photo:"/images/uros.jpg",
      height:'181 cm'
  },
  {
      id:24,
      name:"Pedro Díaz",
      position:"Centrocampista",
      nationality:"España",
      photo:"/images/pedro.jpg",
      height:'181 cm'
  }
]


export function getAllPlayers(){
  return playersDetails
}

export function getAllPositions(){
    return positions
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
