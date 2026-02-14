import NewsItem from './NewsItem'
import { newsData } from '@/types/news'

export default function NewsGrid() {
  return (
    <div className="items">
      {newsData.map((news) => (
        <NewsItem
          key={news.id}
          id={news.id}
          title={news.title}
          description={news.description}
          date={news.date}
          image={news.image}
        />
      ))}
    </div>
  )
}