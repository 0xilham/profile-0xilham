"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
  const sectionIds = ["#home", "#experience", "#projects", "#skills", "#contact"]
  const [activeNav, setActiveNav] = useState("")
  const observerRef = useRef<IntersectionObserver | null>(null)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 md:block hidden ${isScrolled ? "bg-paper/90 backdrop-blur-md shadow-hard-sm border-b-[3px] border-pencil" : "bg-transparent"
          }`}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-20 xl:px-32">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-3xl font-bold font-kalam -rotate-2 hover:rotate-0 transition-transform">
              <span className="text-marker-red">Ilham</span>
              <span className="text-pencil">.dev</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-6 font-patrick-hand text-xl">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-bold text-pencil hover:text-marker-red transition-colors hover:-translate-y-1 inline-block"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-white text-pencil border-[3px] border-pencil shadow-hard hover:bg-marker-red hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-hard-hover -rotate-2">
                <Link href="#contact">Hire Me</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px]">
        {/* Navigation Bar */}
        <div className="relative w-full rounded-wobblyMd border-[3px] border-pencil bg-white shadow-hard h-16 flex items-center">
          <div className="absolute top-0 left-0 w-full h-full flex justify-around items-center text-pencil px-2">
            <Link href="#home" onClick={() => setActiveNav("#home")}
              className={`flex flex-col items-center text-xs transition-colors font-patrick-hand text-lg ${activeNav === "#home" ? "text-marker-red font-bold" : "text-pencil"
                }`}>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span className="mt-1">Home</span>
            </Link>

            <Link href="#experience" onClick={() => setActiveNav("#experience")}
              className={`flex flex-col items-center text-xs transition-colors font-patrick-hand text-lg ${activeNav === "#experience" ? "text-marker-red font-bold" : "text-pencil"
                }`}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" x2="8" y1="13" y2="13"></line>
                <line x1="16" x2="8" y1="17" y2="17"></line>
                <line x1="10" x2="8" y1="9" y2="9"></line>
              </svg>
              <span className="mt-1">Experience</span>
            </Link>

            <Link href="#skills" onClick={() => setActiveNav("#skills")}
              className={`flex flex-col items-center text-xs transition-colors font-patrick-hand text-lg ${activeNav === "#skills" ? "text-marker-red font-bold" : "text-pencil"
                }`}>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
              <span className="mt-1">Skills</span>
            </Link>

            <Link href="#projects" onClick={() => setActiveNav("#projects")}
              className={`flex flex-col items-center text-xs transition-colors font-patrick-hand text-lg ${activeNav === "#projects" ? "text-marker-red font-bold" : "text-pencil"
                }`}>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M8 21h8"></path>
                <path d="M12 17v4"></path>
                <path d="M8 7h8"></path>
                <path d="M8 11h8"></path>
              </svg>
              <span className="mt-1">Projects</span>
            </Link>

            <Link href="#contact" onClick={() => setActiveNav("#contact")}
              className={`flex flex-col items-center text-xs transition-colors font-patrick-hand text-lg ${activeNav === "#contact" ? "text-marker-red font-bold" : "text-pencil"
                }`}>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="mt-1">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
