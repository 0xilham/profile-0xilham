"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const texts = ["Junior Programmer", "Fullstack Developer", "Web3 Developer"]
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[index]
    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prevText) => prevText + currentText[charIndex])
        setCharIndex((prevCharIndex) => prevCharIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setTypedText((prevText) => prevText.slice(0, -1))
        setCharIndex((prevCharIndex) => prevCharIndex - 1)
      }, 50)
      return () => clearTimeout(timeout)
    } else if (!isDeleting && charIndex === currentText.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 1000)
      return () => clearTimeout(timeout)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }
  }, [charIndex, isDeleting, index, texts])

  return (
    <section id="home" className="relative pt-20 md:pt-52 pb-16 md:pb-40 lg:pt-50 lg:pb-50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950 z-0"></div>
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4">
                Hi, I'm <span className="gradient-text">Ilham Nur Hermawan</span>
              </h1>
              <h2 className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 h-8">
                I'm a {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
              Fresh graduate in Informatics Engineering with a passion for fullstack development, web3 development, game development, and
              creating innovative digital solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90">
                <Link href="#projects" className="flex items-center gap-2">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline">
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1WAIvkKPdfUaJn0hJ0246LRJDi7vGRBgY/view?usp=sharing"
                  className="flex items-center gap-2"
                  rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Link>
              </Button>
            </div>

            <div className="flex space-x-4 pt-2">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link href="https://github.com/0xilham" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link href="https://linkedin.com/in/ilham-nur-hermawan" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link href="mailto:ilhamnurhermawan@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-[280px] md:max-w-[320px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-full p-4 shadow-xl overflow-hidden">
                <Image
                  src="/photo.jpg"
                  alt="Ilham Nur Hermawan"
                  width={400}
                  height={400}
                  className="rounded-full object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-full p-3 md:p-4 shadow-lg">
                <div className="bg-gradient-to-r from-primary to-purple-600 rounded-full p-2 md:p-3">
                  <code className="text-white text-xs font-mono">{"<Web3 />"}</code>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-full p-3 md:p-4 shadow-lg">
                <div className="bg-gradient-to-r from-primary to-purple-600 rounded-full p-2 md:p-3">
                  <code className="text-white text-xs font-mono">{"<Game />"}</code>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
