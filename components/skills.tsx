"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Code, Cpu, Database, Figma, GitBranch, Layers, Lightbulb, Smartphone, Users } from "lucide-react"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("hard")

  const hardSkills = [
    {
      category: "Programming & Frameworks",
      icon: <Code className="h-5 w-5" />,
      skills: [
        "JavaScript",
        "TypeScript",
        "React Native",
        "React",
        "Next.js",
        "Node.js",
        "Solidity",
        "Web3.js",
        "Ethers.js",
        "Python",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    /*
    {
      category: "Database & Tools",
      icon: <Database className="h-5 w-5" />,
      skills: ["SQLite", "MySql", "MongoDB", "SQL & NoSQL", "Git", "Notion", "Microsoft Office"],
    },
    {
      category: "Design UI & UX",
      icon: <Figma className="h-5 w-5" />,
      skills: ["UI & UX Design", "Figma", "Game Design Document (GDD)"],
    },
    */
    {
      category: "Web3 Development",
      icon: <Layers className="h-5 w-5" />,
      skills: ["Smart Contract", "EVM", "Web3 dApps", "Hardhat", "Rainbowkit", "IPFS", "Wagmi"],
    },
    /*
    {
      category: "AI & Algorithms",
      icon: <Cpu className="h-5 w-5" />,
      skills: ["Deep Learning", "LSTM (Long Short-Term Memory)"],
    },
    */
    {
      category: "Mobile Development",
      icon: <Smartphone className="h-5 w-5" />,
      skills: ["React Native", "Expo", "Mobile UI/UX", "State Management (Redux/Zustand)", "API Integration"],
    },
    /*
    {
      category: "Quality Assurance",
      icon: <GitBranch className="h-5 w-5" />,
      skills: ["Debugging software & hardware", "Quality Control Computer"],
    },
    */
  ]

  const softSkills = [
    "Problem-solving",
    "Leadership",
    "Patience",
    "Creativity",
    "Time management",
    "Critical thinking",
    "Communication skills",
    "Analytical thinking",
    "Active learning",
    "Emotional intelligence",
    "Honesty",
    "Perseverance",
    "Problem identification",
    "Self-evaluation",
    "Teamwork",
  ]

  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-32 xl:px-56"
      >
        <h2 className="section-title">Skills</h2>

        <Tabs defaultValue="hard" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="hard">Hard Skills</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="hard" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {hardSkills.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card decoration="tape" className={`h-full ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-2xl font-kalam">
                        {category.icon}
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-lg">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="soft" className="space-y-4">
            <Card decoration="tack" className="-rotate-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-3xl font-kalam">
                  <Lightbulb className="h-8 w-8 text-marker-red" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <Badge variant="outline" className="text-lg py-1 px-3">
                        <Users className="h-5 w-5 mr-2 text-pen-blue" />
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  )
}
