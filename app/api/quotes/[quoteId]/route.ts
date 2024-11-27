import { NextRequest, NextResponse } from "next/server";
import * as quoteService from "@/services/quote.service";

export async function GET(request: Request, { params }: { params: { quoteId: string } }) {
  try {
    const {quoteId} = params;
    const quote = await quoteService.getQuoteById(quoteId);
    return NextResponse.json({ quote }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, {params}: {params: {quoteId: string}}) {
  try {
    const {quoteId} = params;
    const body = await req.json();
    const { quote } = body;
    let originalQuote = await quoteService.getQuoteById(quoteId);
    originalQuote = { ...originalQuote, ...quote };
    const updatedQuote = await quoteService.updateQuote(originalQuote);
    return NextResponse.json({ quote: updatedQuote }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, {params}: {params: {quoteId: string}}) {
  try {
    const {quoteId} = params;
    const quote = await quoteService.getQuoteById(quoteId);
    await quoteService.deleteQuote(quoteId);
    return NextResponse.json({ quote }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}