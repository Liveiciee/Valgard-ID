'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [name, setName] = useState('Loading...')

  useEffect(() => {
    const fetchName = async () => {
      const { data, error } = await supabase
        .from('characters')
        .select('name')
        .limit(1)
        .single()

      if (error) {
        console.error('Error:', error)
        setName('Error')
      } else {
        setName(data.name)
      }
    }

    fetchName()
  }, [])

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="text-center text-xl font-bold">Character: {name}</div>
    </main>
  )
}
