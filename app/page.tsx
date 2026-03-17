export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-4xl font-bold">
          Buvei Virtual Card Infrastructure
        </h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Global virtual cards designed for SaaS, AI tools, and advertising
          platforms. Faster payments. Higher success rates.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://app.buvei.com"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium"
          >
            Get Started
          </a>

          <a
            href="https://buvei.com"
            className="px-6 py-3 border border-white rounded-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
}
