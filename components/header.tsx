"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { usePathname } from "next/navigation"
import { useRef } from "react"

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

  const sectionIds = ["#home", "#projects", "#skills", "#contact"]
  const [activeNav, setActiveNav] = useState("")
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = sectionIds
        .map((id) => document.querySelector(id))
        .filter(Boolean) as HTMLElement[]

      observerRef.current?.disconnect()

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = `#${entry.target.id}`
              setActiveNav(id)
            }
          })
        },
        {
          root: null,
          rootMargin: "0px 0px -60% 0px", // start triggering earlier
          threshold: 0.1,
        }
      )

      sections.forEach((section) => {
        observerRef.current?.observe(section)
      })
    }

    handleScrollSpy()

    return () => {
      observerRef.current?.disconnect()
    }
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
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px]">
        {/* Floating Action Button (Mode Toggle) */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-primary rounded-full p-1 shadow-lg">
            <ModeToggle className="text-white rounded-full" />
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="relative w-full h-20">
          <svg
            className="absolute top-0 left-0 w-full h-full rounded-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 Q40,0 39,0 ,Q50,80, 61,0, Q100,0 100,0 L100,100 L0,100 Z"
              fill="#111827" // warna: bg-gray-900
            />
          </svg>

          <div className="absolute top-0 left-0 w-full h-full flex justify-around items-center text-white px-4">
            <Link href="#home" onClick={() => setActiveNav("#home")}
              className={`flex flex-col items-center text-xs transition-colors ${activeNav === "#home" ? "text-purple-500" : "text-white/70"
                }`}>
              <svg className="w-5 h-5 mb-1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span className="text-xs mt-1">Home</span>
            </Link>

            <Link href="#skills" onClick={() => setActiveNav("#skills")}
              className={`flex flex-col items-center text-xs transition-colors ${activeNav === "#skills" ? "text-purple-500" : "text-white/70"
                }`}>
              <svg className="w-5 h-5 mb-1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
              </svg>
              <span className="text-xs mt-1">Skills</span>
            </Link>

            {/* Empty space for the center button */}
            <div className="w-10"></div>

            <Link href="#projects" onClick={() => setActiveNav("#projects")}
              className={`flex flex-col items-center text-xs transition-colors ${activeNav === "#projects" ? "text-purple-500" : "text-white/70"
                }`}>
              <svg className="w-5 h-5 mb-1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M8 21h8"></path>
                <path d="M12 17v4"></path>
                <path d="M8 7h8"></path>
                <path d="M8 11h8"></path>
              </svg>
              <span className="text-xs mt-1">Projects</span>
            </Link>

            <Link href="#contact" onClick={() => setActiveNav("#contact")}
              className={`flex flex-col items-center text-xs transition-colors ${activeNav === "#contact" ? "text-purple-500" : "text-white/70"
                }`}>
              <svg className="w-5 h-5 mb-1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="text-xs mt-1">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
