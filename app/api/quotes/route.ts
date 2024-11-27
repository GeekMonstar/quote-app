import * as quoteService from '@/services/quote.service';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest){
    try{
        const body = await req.json();
        const { quotes } = body;
        const newQuotes = await quoteService.createQuotes(quotes);
        return NextResponse.json({quotes: newQuotes}, {status: 201});
    }catch(e){
        console.log(e);
        return NextResponse.json({error: (e as Error).message}, {status: 500});
    }
}

export async function GET(){
    try{
        const quotes = await quoteService.getQuotes();
        return NextResponse.json({quotes});
    }catch(e){
        return NextResponse.json({error: (e as Error).message}, {status: 500});
    }
}