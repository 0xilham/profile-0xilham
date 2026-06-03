import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-transparent py-10 border-t-[3px] border-pencil border-dashed mt-8">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-20 xl:px-32">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 items-center flex flex-col">
            <Link href="/" className="text-3xl font-bold font-kalam hover:-rotate-2 transition-transform inline-block">
              <span className="text-marker-red">Ilham</span>
              <span className="text-pencil">.dev</span>
            </Link>
            <p className="text-xl font-patrick-hand text-pencil/80 mt-1">Web3 & Mobile Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-lg font-patrick-hand text-pencil/80 mb-2">
              &copy; {currentYear} Ilham Nur Hermawan. All rights reserved.
            </p>
            <p className="text-lg font-patrick-hand text-pencil/80 flex items-center">
              Made with <Heart className="h-5 w-5 text-marker-red mx-2 animate-pulse" /> in Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
