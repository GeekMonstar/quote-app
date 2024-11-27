"use server";
import * as quoteService from "@/services/quote.service";
import { Quote } from "@prisma/client";

export async function getQuotes(): Promise<Quote[] | {error: string}>{
    try{
        const quotes = await quoteService.getQuotes();
        return quotes;
    }catch(e){
        return {error: (e as Error).message};
    }
}