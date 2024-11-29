import QuoteStack from "@/components/QuoteStack";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Citations inspirantes</h1>
      <QuoteStack />
  </main>
  );
}
