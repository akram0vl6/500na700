import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { newsData } from '@/types/news'
import Link from 'next/link'
import styles from '../globals.css'

interface NewsPageProps {
  params: Promise<{ id: string }> 
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { id } = await params
  
  const newsId = parseInt(id)
  const newsItem = newsData.find((item) => item.id === newsId)

  Если новость не найдена
  if (!newsItem) {
    return (
      <main className={styles.newsDetail}>
        <Header />
        <div className="line"></div>
        <div className={styles.container}>
          <h1>Новость не найдена</h1>
          <Link href="/" className={styles.backLink}>
            ← Вернуться на главную
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <section>
      <Header />
      <div className="line"></div>
        <main>


        <div className="main-item">
            <img 
                src={newsItem.image} 
                alt={newsItem.title} 
            />
            <div className="title">
                <h1>{newsItem.title}</h1>
                <span className="date">{newsItem.date}</span>
                <h3>{newsItem.h3}</h3>
                {newsItem.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
                ))}

            </div>
        </div>
        </main>
     
      <Footer />
    </section>
  )
}