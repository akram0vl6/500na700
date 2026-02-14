'use client'

import { useState } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consent: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Форма отправлена!')
    onClose()
    setFormData({ name: '', phone: '', email: '', consent: false })
  }

  console.log('Modal isOpen:', isOpen);

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>СВЯЗАТЬСЯ С НАМИ</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Имя"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Телефон"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              required
            />
            <span>я согласен (-а) на обработку персональных данных</span>
          </label>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  )
}