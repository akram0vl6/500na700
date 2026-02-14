import Header from '@/components/Header'
import NewsGrid from '@/components/NewsGrid'
import Footer from '@/components/Footer'
import styles from './page.module.css'


export default function Home() {
  return (
    <>
      <Header />
      <div className="line"></div>
      
      <main className="news-section">
        <h1>НОВОСТИ</h1>
        <NewsGrid />
      </main>
      
      {/* <Footer /> */}
    </>
  )
}