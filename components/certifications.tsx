"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, CalendarDays, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      title: "Game Design & Development",
      issuer: "PT. Kinema Systrans Multimedia",
      collaboration: "RMIT University Australia",
      date: "July 2024",
      credential: "3982/IL-SIB/VI/2024",
      skills: ["C#", "Unity Engine", "Git Version Control System", "Notion Project Management"],
      description: [
        "Mastered game design principles, theory and narrative, mechanics, documentation (GDD), coding, and asset management and integration.",
        "Implemented UI design, sound design, playtesting, and monetization.",
        "Capstone project, presentation and product showcase with RMIT University Australia.",
      ],
    },
    {
      title: "Web3 Development",
      issuer: "PT. GreatEdu Global Mahardika",
      date: "December 2023",
      credential: "6212694",
      skills: [
        "JavaScript",
        "Solidity",
        "Next.js (React)",
        "HTML & CSS (Tailwind CSS)",
        "Node.js",
        "NPM",
        "Web3.js",
        "Wagmi",
        "Hardhat",
        "Rainbowkit",
        "Git",
      ],
      description: [
        "Mastered blockchain with a combination of data structures, security, and consensus protocols to build robust web3 dApps.",
        "Experienced in Ethereum smart contracts, tokenization, JavaScript, and Solidity.",
        "Focused on scalability, security, and innovation for Web3 platforms with a climate change theme.",
      ],
    },
    {
      title: "Junior Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      date: "September 2022",
      credential: "62010 2513 4 0002193 2022",
      skills: ["PHP", "JavaScript", "HTML & CSS", "Git Version Control System"],
      description: [
        "Implemented User Interface (UI).",
        "Applied text, graphic, and multimedia-based programming execution commands.",
        "Organized functions, files, or programming resources in a neat organization.",
        "Wrote Clean Code with principles according to guidelines and practices.",
        "Implemented structured programming.",
        "Used pre-existing libraries or components.",
      ],
    },
    {
      title: "Junior Mobile Programmer",
      issuer: "Kementrian Komunikasi dan Informatika",
      date: "November 2021",
      credential: "02113904121-60/VSGA.DTS/BLSDM.KOMINFO/2021",
      skills: ["JAVA", "SQLite Database", "Git Version Control System"],
      description: [
        "Demonstrated OS platforms and Programming Languages in software.",
        "Designed mobile interfaces.",
        "Designed databases and persistence on mobile data.",
        "Developed mobile location-based services, GPS, and mobile navigation.",
        "Implemented mobile security.",
        "Displayed mobile sensors and technical specifications.",
        "Determined mobile cellular networks.",
      ],
    },
    {
      title: "UX Design For Website",
      issuer: "LPK PT. Babastudio",
      date: "March 2021",
      credential: "2103194C21AED5",
      skills: ["User Experience (UX)"],
      description: [
        "Designed floral designs for promotion based on specific products (decoration/exhibition design) based on interpretation, imagination, creativity, and originality.",
        "Created and updated websites.",
        "Created basic design images.",
      ],
    },
  ]

  return (
    <section id="certifications" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>

        <div ref={ref} className="space-y-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden card-hover">
                <div className="h-2 bg-gradient-to-r from-primary to-purple-600"></div>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div className="flex items-start">
                      <div className="mr-4 p-2 bg-primary/10 rounded-full">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{cert.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          {cert.issuer}
                          {cert.collaboration && ` in collaboration with ${cert.collaboration}`}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {cert.date}
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-gray-500 dark:text-gray-400 mr-1">Credential:</span>
                        <span className="font-medium">{cert.credential}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Relevant Skills:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <h4 className="font-medium mb-2">Description:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                      {cert.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <Link href="#" className="text-primary hover:underline flex items-center text-sm">
                      View Certificate <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
