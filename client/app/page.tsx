import Header from "@/components/Header";
import NewsGrid from "@/components/NewsGrid";
import Footer from "@/components/Footer";
import { fetchNews } from '@/lib/api';

// Это серверный компонент (без 'use client')
export default async function Home() {
  const news = await fetchNews();

  return (
    <>
      <Header />
      <div className="line"></div>

      <div className="news-section">
        <h1>НОВОСТИ</h1>
        <NewsGrid news={news} />
      </div>

    </>
  );
}