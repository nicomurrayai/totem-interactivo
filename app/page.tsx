import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f6fb]">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-7 lg:px-9">
        <Navbar />
        <Hero />
      </div>
    </main>
  )
}
