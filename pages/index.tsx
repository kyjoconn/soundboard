import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Soundboard</title>
        <meta name="description" content="A place to create soundboards" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3 className="m-4 ml-0">New Boards</h3>
        <div className={styles.newBoards}>
            <div className={`border ${styles.boardCard}`}>
              <div className={styles.boardImg} style={{backgroundImage: "url(https://cdn.openai.com/labs/images/A%20photo%20of%20a%20white%20fur%20monster%20standing%20in%20a%20purple%20room.webp?v=1)"}} />
              <div className="p-4">
                Monsters Inc.
              </div>
            </div>
            <div className={`border ${styles.boardCard}`}>
              <div className={styles.boardImg} style={{backgroundImage: "url(https://static01.nyt.com/images/2021/04/04/arts/04godzilla-kong1/04godzilla-kong1-videoSixteenByNineJumbo1600.jpg?year=2021&h=900&w=1600&s=29019e1d9dcda2d49a3d1becdc9b372eca17cc7f42fc20d6d0047bffe344c11b&k=ZQJBKqZ0VN&tw=1)"}} />
              <div className="p-4">
                Godzilla
              </div>
            </div>
            <div className={`border ${styles.boardCard}`}>
              <div className={styles.boardImg} style={{backgroundImage: "url(https://wwwimage-us.pplusstatic.com/thumbnails/photos/w1920-q80/marquee/1040727/rockp_sp_hero_landscape.jpg)"}} />
              <div className="p-4">
                Rocket Power
              </div>
            </div>
        </div>
        <div className={styles.newBoardCt}>
          <button type="button" className="border font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create New Board</button>
        </div>
      </main>
    </>
  )
}
