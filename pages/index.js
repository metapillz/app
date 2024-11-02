import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
    
  return (
    <div className={styles.container}>
      <Head>
        <title>K약사 BOOTCAMP</title>
        <meta name="description" content="약국 개국 및 경영 교육 프로그램" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          💊 K약사 BOOTCAMP
        </h1>
        
        <div className={styles.grid}>
          <Link href="/lectures" className={styles.card}>
            <h2>📚 부트캠프 강의 목록 &rarr;</h2>
            <p>약국 개국과 경영의 전문가가 되기 위한 체계적인 커리큘럼을 확인하세요.</p>
          </Link>

          <Link href="/my-lectures" className={styles.card}>
            <h2>📋 나의 학습 현황 &rarr;</h2>
            <p>수강 중인 강의 진도율과 학습 현황을 확인할 수 있습니다.</p>
          </Link>
        </div>
      </main>
    </div>
  )
}
