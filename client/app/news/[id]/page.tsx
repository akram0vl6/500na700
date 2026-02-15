import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { fetchNewsById } from '@/lib/api'
import Link from 'next/link'

interface NewsPageProps {
  params: Promise<{ id: string }>
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { id } = await params
  const newsItem = await fetchNewsById(id)

  if (!newsItem) {
    return (
      <>
        <Header />
        <div className="line"></div>
        <main className="main-item">
          <div>
            <h1>Новость не найдена</h1>
            <Link href="/" style={{ color: '#FB8627', marginTop: '20px' }}>
              ← Вернуться на главную
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
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
            <h3>{newsItem.h3}</h3>
            <span className="date">{newsItem.date}</span>
            <div className="content">
              {newsItem.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </main>
     
      <Footer />
    </>
  )
}