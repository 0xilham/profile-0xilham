"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
    const [typedText, setTypedText] = useState("")
    const texts = ["Programmer", "Mobile Developer", "Web3 Developer"]
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
        <section id="home" className="relative pt-20 md:pt-52 pb-16 md:pb-40 lg:pt-50 lg:pb-50 overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col space-y-6"
                    >
                        <div className="relative">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-kalam mb-4 leading-tight">
                                Hi, I'm <br /><span className="text-marker-red inline-block -rotate-2 transform hover:rotate-2 transition-transform duration-300">Ilham Nur Hermawan</span>
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-bold font-kalam text-pencil/80 h-10">
                                I'm a {typedText}
                                <span className="animate-pulse text-marker-red">|</span>
                            </h2>
                        </div>

                        <p className="text-pencil/90 text-lg md:text-xl font-patrick-hand leading-relaxed max-w-lg">
                            Dedicated Software Engineer specializing in mobile app development (React Native) and web3 technologies, driven to create
                            innovative digital solutions.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button className="bg-marker-red text-white hover:bg-pencil border-[3px] border-pencil shadow-hard hover:-translate-y-1 rotate-1 hover:shadow-hard-lg">
                                <Link href="#projects" className="flex items-center gap-2">
                                    View Projects <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" className="border-[3px] border-pencil bg-white hover:bg-muted-paper shadow-hard -rotate-1 hover:shadow-hard-lg">
                                <Link
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1WAIvkKPdfUaJn0hJ0246LRJDi7vGRBgY/view?usp=sharing"
                                    className="flex items-center gap-2"
                                    rel="noopener noreferrer">
                                    <Download className="mr-2 h-5 w-5" /> Download CV
                                </Link>
                            </Button>
                        </div>

                        <div className="flex space-x-6 pt-6">
                            <Link href="https://github.com/0xilham" target="_blank" rel="noopener noreferrer" className="p-3 border-[3px] border-pencil rounded-wobbly bg-white shadow-hard hover:bg-muted-paper hover:-translate-y-1 hover:-rotate-6 transition-all">
                                <Github className="h-6 w-6 text-pencil" />
                            </Link>
                            <Link href="https://linkedin.com/in/ilham-nur-hermawan" target="_blank" rel="noopener noreferrer" className="p-3 border-[3px] border-pencil rounded-wobbly bg-white shadow-hard hover:bg-pen-blue hover:-translate-y-1 hover:rotate-6 transition-all group">
                                <Linkedin className="h-6 w-6 text-pencil group-hover:text-white" />
                            </Link>
                            <Link href="mailto:ilhamnurhermawan@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3 border-[3px] border-pencil rounded-wobbly bg-white shadow-hard hover:bg-marker-red hover:-translate-y-1 hover:-rotate-3 transition-all group">
                                <Mail className="h-6 w-6 text-pencil group-hover:text-white" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-[280px] md:max-w-[320px] mx-auto rotate-3 hover:-rotate-1 transition-all duration-500">
                            <div className="relative bg-white border-4 border-pencil rounded-wobbly p-2 shadow-hard-lg overflow-hidden">
                                <Image
                                    src="/photo.png"
                                    alt="Ilham Nur Hermawan"
                                    width={400}
                                    height={400}
                                    className="rounded-wobblySm object-cover border-2 border-pencil"
                                    priority
                                />
                            </div>

                            <div className="absolute -bottom-6 -right-6 bg-marker-red border-[3px] border-pencil rounded-wobbly p-3 md:p-4 shadow-hard -rotate-12">
                                <code className="text-white text-lg font-patrick-hand font-bold">{"<Web3 />"}</code>
                            </div>

                            <div className="absolute -top-6 -left-6 bg-pen-blue border-[3px] border-pencil rounded-wobbly p-3 md:p-4 shadow-hard rotate-12">
                                <code className="text-white text-lg font-patrick-hand font-bold">{"<Mobile />"}</code>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
