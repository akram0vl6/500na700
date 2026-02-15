'use client'

import Link from 'next/link'

interface NewsItemProps {
  id: number
  title: string
  description: string
  date: string
  image: string
}

export default function NewsItem({ 
  id, 
  title, 
  description, 
  date, 
  image 
}: NewsItemProps) {
  return (
    <Link href={`/news/${id}`} className="item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="date">{date}</span>
    </Link>
  )
}