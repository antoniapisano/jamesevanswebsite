import Head from 'next/head'
import styles from '../styles/Home.module.css'
import YoutubeEmbed from './YoutubeEmbed'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>James Evans Official Website UK Blues Artist</title>
      </Head>

   
      <div className={styles.youtubecontainer}>
        <YoutubeEmbed embedId="wp58tHwugI8" />
          </div>

    
    
      
      


      
    </div>
    
  )
}
