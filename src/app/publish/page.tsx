'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Publish() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState<number | ''>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({ title, price }),
      headers: { 'Content-Type': 'application/json' }
    })

    if (res.ok) {
      router.push('/')
    }
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Publicar producto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Publicar
        </button>
      </form>
    </div>
  )
}
