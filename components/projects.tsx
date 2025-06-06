"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Rest API Laravel - Backend",
      description:
        "A RESTful API built with Laravel, providing a backend for various web applications.",
      image:
        "",
      tags: [
        "PHP",
        "Laravel",
        "MySQL",
        "REST API",
        "Authentication",
        "API Testing",
        "Git",
        "API Documentation",
      ],
      demoLink: "https://github.com/0xilham/rest-api-laravel",
      codeLink: "https://github.com/0xilham/rest-api-laravel",
      category: "web",
    },
    {
      title: "Bank Recycle Waste - Web3 dApp",
      description:
        "A decentralized application focused on climate change awareness and action, built using Web3 technologies.",
      image:
        "https://hamhrmwn.notion.site/image/attachment%3Afbc32c0c-66bc-4129-83b2-c4101019d5f7%3ACuplikan_layar_2025-04-22_012404.png",
      tags: [
        "JavasScript",
        "Solidity",
        "Web3",
        "Node.js",
        "Next.js",
        "SmartContract",
        "EVM",
        "HTML & CSS",
        "Tailwind CSS",
      ],
      demoLink: "https://blockchain-bank-recycle-waste.vercel.app/",
      codeLink: "https://github.com/0xilham/blockchain-bank-recycle-waste",
      category: "web",
    },
    {
      title: "Optimization Rainfall Prediction Model - AI",
      description: "An AI model using Long Short-Term Memory (LSTM) to improve rainfall prediction accuracy.",
      image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/0*RdrAGOU-oD33glk7",
      tags: ["AI", "LSTM", "Python", "Deep Learning", "Weather Forecasting"],
      demoLink: "https://medikom.iocspublisher.org/index.php/JTI/article/view/942",
      codeLink: "https://medikom.iocspublisher.org/index.php/JTI/article/view/942/87",
      category: "ai",
    },
    {
      title: "ADAB: The Sins Of Trash - Game 2D",
      description: "A 2D adventure game developed with Unity, featuring dynamic gameplay and immersive storytelling.",
      image:
        "https://hamhrmwn.notion.site/image/attachment%3A7263b4d3-ea05-4cc0-8f54-665f4c087e68%3AADAB.jpg?table=block&id=1dc3d31e-8e12-8193-b3f6-cab124de0de8&spaceId=75df719b-aa8c-4e8b-9652-96bf850c35ee&width=2000&userId=&cache=v2",
      tags: ["Unity", "C#", "Game Programming", "Game Development", "2D Graphics", "Animation"],
      demoLink: "https://rawrusstudio.itch.io/adab-thesinsoftrash",
      codeLink: "https://github.com/Game-Dev-Group-6/GDK6",
      category: "game",
    },
    {
      title: "Purrfect Donations - Web3 dApp",
      description:
        "Purrfect Donations project a Web3 crowdfunding platform designed to enable cat food donations with transparency and blockchain-based security.",
      image:
        "https://hamhrmwn.notion.site/image/attachment%3Aa2ff1a92-e2ea-4160-9f40-3715f212eaa3%3ACuplikan_layar_2025-04-07_145723.png?table=block&id=1dc3d31e-8e12-8161-ab18-e787d35fb751&spaceId=75df719b-aa8c-4e8b-9652-96bf850c35ee&width=2000&userId=&cache=v2",
      tags: [
        "JavaScript",
        "Next.js",
        "Node.js",
        "EVM",
        "SmartContract",
        "Cryptocurrency",
        "HTML & CSS",
        "Tailwind CSS",
      ],
      demoLink: "https://feed-donation.vercel.app/",
      codeLink: "https://github.com/0xilham/feed-donation-app",
      category: "web",
    },
    {
      title: "Catatan Olah TKP - Mobile App",
      description:
        "Note-taking application for crime scene investigation, designed to assist investigators in documenting evidence.",
      image:
        "https://images.unsplash.com/photo-1637942695886-69c5094fb1bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Java", "Android", "SQLite", "GPS"],
      demoLink: "#",
      codeLink: "#",
      category: "mobile",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-20 lg:px-20">
        <h2 className="section-title text-center text-3xl font-bold mb-8">Projects</h2>

        <Tabs defaultValue="all" className="mx-auto" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-6 overflow-x-auto pb-2 no-scrollbar">
            <TabsList className="flex flex-nowrap">
              <TabsTrigger value="all" className="px-3 py-1.5 whitespace-nowrap">
                All
              </TabsTrigger>
              <TabsTrigger value="web" className="px-3 py-1.5 whitespace-nowrap">
                Web
              </TabsTrigger>
              <TabsTrigger value="game" className="px-3 py-1.5 whitespace-nowrap">
                Game
              </TabsTrigger>
              <TabsTrigger value="mobile" className="px-3 py-1.5 whitespace-nowrap">
                Mobile
              </TabsTrigger>
              <TabsTrigger value="ai" className="px-3 py-1.5 whitespace-nowrap">
                AI/ML
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} ref={ref}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col card-hover">
                    {/* ANCHOR Img project <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        priority={false}
                      />
                    </div> */}
                    <CardContent className="pt-4 flex-grow">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 5).map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 5 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tags.length - 5} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-3">
                      <div className="flex space-x-2 w-full">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Link href={project.demoLink} className="flex items-center justify-center w-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Link href={project.codeLink} className="flex items-center justify-center w-full">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/0xilham"
              className="flex items-center"
            >
              <Code className="h-4 w-4 mr-2" /> View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
