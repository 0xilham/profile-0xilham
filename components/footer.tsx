import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-20 xl:px-32">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 items-center flex flex-col">
            <Link href="/" className="text-xl font-bold font-poppins">
              <span className="gradient-text">Ilham</span>
              <span className="dark:text-white">.dev</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Web3 & Game Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              &copy; {currentYear} Ilham Nur Hermawan. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> in Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
