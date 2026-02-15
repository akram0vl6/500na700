import { News } from '@/types/news'


const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export async function fetchNews(): Promise<News[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/news`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    console.log(result);
    
    const newsArray = result.newsWithFullImagePaths || []
    return newsArray.map((item: any) => ({
      id: item._id,
      title: item.title,
      h3: item.h3,
      description: item.description,
      content: item.content,
      date: item.date,
      image: item.image
    }))
  } catch (error) {
    console.error('Error fetching news:', error)
    return []
  }
}

export async function fetchNewsById(id: string): Promise<News | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/news/${id}`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    const item = result.data

    return {
      id: item._id,
      title: item.title,
      h3: item.h3,
      description: item.description,
      content: item.content,
      date: item.date,
      image: item.image
    }
  } catch (error) {
    console.error(`Error fetching news ${id}:`, error)
    return null
  }
}