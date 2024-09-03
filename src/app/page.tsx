import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-semibold mb-4">Tailwind playground</h1>
      <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {[...Array(4)].map((_, index) => (
          <article 
            key={index}
            className="border rounded p-2 bg-slate-50 flex flex-col gap-1"
          >
            <Image 
              src="https://placehold.co/400x300/EEE/31343C/png" 
              alt="" 
              width={400}
              height={300}
              className="rounded-sm"
            />
            <h2 className="text-xl font-semibold text-slate-950">Article title</h2>
            <p className="text-slate-700">Article excerpt</p>
          </article>
        ))}
      </div>
    </main>
  );
}