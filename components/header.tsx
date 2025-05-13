"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 md:block hidden ${isScrolled ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-bold font-poppins">
              <span className="gradient-text">Ilham</span>
              <span className="dark:text-white">.dev</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <ModeToggle />
              <Button className="bg-primary hover:bg-primary/90">
                <Link href="#contact">Hire Me</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-950 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_-2px_10px_rgba(255,255,255,0.05)]">
        <div className="flex justify-between items-center px-2 py-2">
          <Link
            href="#home"
            className="flex flex-col items-center justify-center p-2 w-1/6 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="text-xs">Home</span>
          </Link>

          <Link
            href="#experience"
            className="flex flex-col items-center justify-center p-2 w-1/6 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span className="text-xs">Work</span>
          </Link>

          <Link
            href="#skills"
            className="flex flex-col items-center justify-center p-2 w-1/6 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
              <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
              <path d="M12 2v2"></path>
              <path d="M12 22v-2"></path>
              <path d="m17 20.66-1-1.73"></path>
              <path d="M11 10.27 7 3.34"></path>
              <path d="m20.66 17-1.73-1"></path>
              <path d="m3.34 7 1.73 1"></path>
              <path d="M14 12h8"></path>
              <path d="M2 12h2"></path>
              <path d="m20.66 7-1.73 1"></path>
              <path d="m3.34 17 1.73-1"></path>
              <path d="m17 3.34-1 1.73"></path>
              <path d="m7 20.66 1-1.73"></path>
            </svg>
            <span className="text-xs">Skills</span>
          </Link>

          <Link
            href="#projects"
            className="flex flex-col items-center justify-center p-2 w-1/6 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className="text-xs">Projects</span>
          </Link>

          <Link
            href="#contact"
            className="flex flex-col items-center justify-center p-2 w-1/6 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-1"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="text-xs">Contact</span>
          </Link>

          <div className="flex flex-col items-center justify-center p-2 w-1/6">
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  )
}
