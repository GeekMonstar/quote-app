import * as quoteService from '@/services/quote.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, {params}: {params: Promise<{author: string}>}){
    try{
        const {author} = await params;
        const quotes = await quoteService.getQuotesByAuthor(author);
        return NextResponse.json({quotes});
    }catch(e){
        return NextResponse.json({error: (e as Error).message}, {status: 500});
    }
}