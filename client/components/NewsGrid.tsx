'use client'


import NewsItem from './NewsItem'

import { News } from '@/types/news'

interface NewsGridProps {
  news: News[]
}

export default function NewsGrid({news}: NewsGridProps) {


  return (
    <div className="items">
      {news.map((item) => (
        <NewsItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          date={item.date}
          image={item.image}
        />
      ))}
    </div>
  )
}
