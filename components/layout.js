import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Real Sporting de Gijon'
export const siteTitle='Sporting de Gijon'
export const playersDetails = [
  {
      id:2,
      name: "Damian Pérez",
      position:"Defensa",
      nationality:"Argentina",
      
  },
  {
      id:3,
      name:"Carlos Cordero",
      position:"Defensa",
      nationality:"España"
  },
  {
      id:4,
      name: "Marc Valiente",
      position:"Defensa",
      nationality:"España"
  },
  {
      id:5,
      name:"Borja López",
      position:"Defensa",
      nationality:"España"
  },
  {
      id:6,
      name: "Babin",
      position:"Defensa",
      nationality:"Martinica"
  },
  {
      id:7,
      name:"Aitor Garcia",
      position:"Delantero",
      nationality:"España"
  },
  {
      id:8,
      name: "Hernan Santana",
      position:"Centrocampista",
      nationality:"España"
  },
  {
      id:9,
      name:"Alvaro Vazquez",
      position:"Delantero",
      nationality:"España"
  },
  {
      id:10,
      name: "Carlos Carmona",
      position:"Centrocampista",
      nationality:"España"
  },
  {
      id:11,
      name:"Murillo",
      position:"Delantero",
      nationality:"Brasil"
  },
  {
      id:13,
      name: "Diego Mariño",
      position:"Portero",
      nationality:"España"
  },
  {
      id:14,
      name:"Nacho Mendez",
      position:"Centrocampista",
      nationality:"España"
  },
  {
      id:15,
      name: "Francisco Molinero",
      position:"Defensa",
      nationality:"España"
  },
  {
      id:16,
      name:"Manu Garcia",
      position:"Centrocampista",
      nationality:"España"
  },
  {
      id:17,
      name: "Unai Medina",
      position:"Defensa",
      nationality:"España"
  },
  {
      id:18,
      name:"Javi Fuego",
      position:"Centrocampista",
      nationality:"España"
  },
  {
      id:20,
      name: "Cristian Salvador",
      position:"Centrocampista",
      nationality:"España"
  },
  {
      id:21,
      name:"Alvaro Traver",
      position:"Delantero",
      nationality:"España"
  },
  {
      id:22,
      name: "Pablo Pérez",
      position:"Delantero",
      nationality:"España"
  },
  {
      id:23,
      name:"Uros Djurdjevic",
      position:"Delantero",
      nationality:"Serbia"
  },
  {
      id:24,
      name:"Pedro Díaz",
      position:"Centrocampista",
      nationality:"España"
  }
]

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
