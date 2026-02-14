'use client'

import { useState } from 'react'
import Modal from '@/components/Modal'
import Link from 'next/link'

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header>
        <Link href={'/'}>
          <img src="/img/Logo.svg" alt="500na700" />
        </Link>
        <div className="button">
          <button onClick={() => setIsModalOpen(true)}>
            Связаться с нами
          </button>
        </div>
      </header>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}