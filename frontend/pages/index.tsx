
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from '../components/about';

export default function Home() {
  return (
    <div className={styles.container}>
    
      <main className={styles.main}>
        <div>
          <About />
        </div>
      </main>
    </div>
  )
}
