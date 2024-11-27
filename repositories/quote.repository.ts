import db from "@/lib/db";
import { Prisma, Quote, QuoteType } from "@prisma/client";

export async function createQuote(quotes: QuoteParams[]): Promise<Prisma.BatchPayload> {
  try{
    const newQuotes = await db.quote.createMany({
      data: quotes
    });
    return newQuotes;
  }catch(e){
    throw new Error((e as Error).message);
  }finally{
    db.$disconnect();
  }
}

export async function getQuoteById(id: string): Promise<Quote | null> {
    try{
        const quote = await db.quote.findUnique({
        where: {
            id
        }
        });
        return quote;
    }catch(e){
        throw new Error((e as Error).message);
    }finally{
        db.$disconnect();
    }
}

export async function getQuotes(): Promise<Quote[]> {
    try{
        const quotes = await db.quote.findMany();
        return quotes;
    }catch(e){
        throw new Error((e as Error).message);
    }finally{
        db.$disconnect();
    }
}

export async function getQuotesByType(quoteType: QuoteType): Promise<Quote[]> {
    try{
        const quotes = await db.quote.findMany({
        where: {
            quoteType
        }
        });
        return quotes;
    }catch(e){
        throw new Error((e as Error).message);
    }finally{
        db.$disconnect();
    }
}

export async function getQuotesByAuthor(author: string): Promise<Quote[]> {
    try{
        const quotes = await db.quote.findMany({
        where: {
            author: {
                contains: author
            }
        }
        });
        return quotes;
    }catch(e){
        throw new Error((e as Error).message);
    }finally{
        db.$disconnect();
    }
}

export async function getQuotesByYear(year: number): Promise<Quote[]> {
    try{
        const quotes = await db.quote.findMany({
        where: {
            year
        }
        });
        return quotes;
    }catch(e){
        throw new Error((e as Error).message);
    }finally{
        db.$disconnect();
    }
}

export async function getQuotesBySource(source: string): Promise<Quote[]> {
    try{
        const quotes = await db.quote.findMany({
        where: {
            source
        }
        });
        return quotes;
    }catch(e){
        throw new Error((e as Error).message);
    }finally{
        db.$disconnect();
    }
}

export async function updateQuote(quote: Quote): Promise<Quote> {
    try{
        const updatedQuote = await db.quote.update({
        where: {
            id: quote.id
        },
        data: quote
        });
        return updatedQuote;
    }catch(e){
        throw new Error((e as Error).message);
    }finally{
        db.$disconnect();
    }
}

export async function deleteQuote(id: string): Promise<Quote> {
    try{
        const deletedQuote = await db.quote.delete({
        where: {
            id
        }
        });
        return deletedQuote;
    }catch(e){
        throw new Error((e as Error).message);
    }finally{
        db.$disconnect();
    }
}

export interface QuoteParams {
    quoteType: QuoteType;
    content: string;
    author: string;
    source: string;
    sourceUrl: string;
    year: number;
}