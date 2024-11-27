"use client";
import React, { useEffect, useState } from 'react'
import QuoteCard from './QuoteCard';
import * as quoteAction from './action';
import { Quote } from '@prisma/client';
import { shuffleArray } from '@/lib/functions';

export default function QuoteStack(){

    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        quoteAction.getQuotes().then((data) => {
            if("error" in data){
                console.error(data.error);
            }else{
                setQuotes(data);
                console.log(data);
            }
        });
    }, []);
  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
  }

  const previousQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length)
  }

  return (
    <div className="relative w-full max-w-md mx-auto h-80">
      {shuffleArray(quotes).map((quote, index) => (
        <QuoteCard
          key={quote.id}
          quote={quote}
          index={(index - currentIndex + quotes.length) % quotes.length}
        />
      ))}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4">
        <button
          onClick={previousQuote}
          className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Précédente
        </button>
        <button
          onClick={nextQuote}
          className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Suivante
        </button>
      </div>
    </div>
  )
}