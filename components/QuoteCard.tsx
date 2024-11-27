import { Quote } from '@prisma/client'
import React from 'react'

export default function QuoteCard({quote, index}:{quote: Quote, index: number}){
  return (
    <div 
      className={`absolute w-full p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out`}
      style={{
        transform: `translateY(${index * 10}px) scale(${1 - index * 0.05})`,
        zIndex: 10 - index,
        opacity: 1 - index * 0.2
      }}
    >
      <blockquote className="text-xl italic font-semibold text-gray-900">
        &quot;{quote.content}&quot;
      </blockquote>
      <p className="mt-4 text-right text-gray-600">- {quote.author}</p>
    </div>
  )
}