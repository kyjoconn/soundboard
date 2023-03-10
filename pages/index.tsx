import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import BoardCard, { BoardCardProps } from '../components/BoardCard/BoardCard'
import PrimaryButton from '../components/PrimaryButton'

const inter = Inter({ subsets: ['latin'] })

const boards: BoardCardProps[] = [
  {
    name: "Monsters Inc.",
    img_url: "https://cdn.openai.com/labs/images/A%20photo%20of%20a%20white%20fur%20monster%20standing%20in%20a%20purple%20room.webp?v=1",
  },
  {
    name: "Godzilla",
    img_url: "https://static01.nyt.com/images/2021/04/04/arts/04godzilla-kong1/04godzilla-kong1-videoSixteenByNineJumbo1600.jpg?year=2021&h=900&w=1600&s=29019e1d9dcda2d49a3d1becdc9b372eca17cc7f42fc20d6d0047bffe344c11b&k=ZQJBKqZ0VN&tw=1",
  },
  {
    name: "Rocket Power",
    img_url: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w1920-q80/marquee/1040727/rockp_sp_hero_landscape.jpg",
  },
]

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


        <div className={styles.animationbody}>
          <h1>Sound<span className={styles.whitecolor}>.<span className={styles.e06c75color}>board</span>.</span><span className={styles.bluecolor}>render</span>("</h1>
          <div className={styles.string}>
            <h1 className={styles.en}>Discover</h1>
            <h1 className={styles.es}>Upload</h1>
            <h1 className={styles.de}>Create</h1>
            <h1 className={styles.it}>Listen</h1>
          </div>
          <h1 className={styles.closure}>");</h1>
        </div>


        <h3 className="m-4 ml-0">New Boards</h3>
        <div className={styles.newBoards}>
          {boards.map(({ name, img_url }) => {
            return <BoardCard key={name} name={name} img_url={img_url} />
          })}
        </div>
        <div className={styles.newBoardCt}>
          <PrimaryButton>Create New Board</PrimaryButton>
        </div>
      </main>
    </>
  )
}
