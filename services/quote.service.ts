import * as quoteService from "@/repositories/quote.repository";
import { Prisma, Quote, QuoteType } from "@prisma/client";

export async function createQuotes(quotes: quoteService.QuoteParams[]): Promise<Prisma.BatchPayload> {
    try{
        const newQuote = await quoteService.createQuote(quotes);
        return newQuote;
    }catch(e){
        throw new Error((e as Error).message);
    }
}

export async function getQuoteById(id: string): Promise<Quote> {
    try{
        const quote = await quoteService.getQuoteById(id);
        if(quote) return quote;
        throw new Error("Quote not found");
    }catch(e){
        throw new Error((e as Error).message);
    }
}

export async function getQuotes(): Promise<Quote[]> {
    try{
        const quotes = await quoteService.getQuotes();
        return quotes;
    }catch(e){
        throw new Error((e as Error).message);
    }
}

export async function getQuotesByType(quoteType: QuoteType): Promise<Quote[]> {
    try{
        const quotes = await quoteService.getQuotesByType(quoteType);
        return quotes;
    }catch(e){
        throw new Error((e as Error).message);
    }
}

export async function getQuotesByAuthor(author: string): Promise<Quote[]> {
    try{
        const quotes = await quoteService.getQuotesByAuthor(author);
        return quotes;
    }catch(e){
        throw new Error((e as Error).message);
    }
}

export async function getQuotesBySource(source: string): Promise<Quote[]> {
    try{
        const quotes = await quoteService.getQuotesBySource(source);
        return quotes;
    }catch(e){
        throw new Error((e as Error).message);
    }
}

export async function updateQuote(quote: Quote): Promise<Quote> {
    try{
        const updatedQuote = await quoteService.updateQuote(quote);
        return updatedQuote;
    }catch(e){
        throw new Error((e as Error).message);
    }
}

export async function deleteQuote(id: string): Promise<Quote> {
    try{
        const quote = await quoteService.deleteQuote(id);
        return quote;
    }catch(e){
        throw new Error((e as Error).message);
    }
}