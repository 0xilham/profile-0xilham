"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Briefcase } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experienceData = [
    {
      title: "Quality Control Internship",
      company: "DAC Indonesia (CV. Master Media)",
      period: "December 2024 - January 2025",
      type: "Internship",
      responsibilities: [
        "Ensured laptop product quality by inspecting materials and components",
        "Tested various components such as CPU, RAM, and SSD",
        "Verified software functionality",
        "Conducted product quality analysis",
        "Inspected products before shipment",
        "Prepared detailed product quality reports",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Work Experience</h2>

        <div ref={ref} className="mx-auto">
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="mb-8 overflow-hidden card-hover">
                <div className="h-2 bg-gradient-to-r from-primary to-purple-600"></div>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 flex items-center mt-1">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {job.company}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end">
                      <Badge variant="outline" className="mb-2">
                        {job.type}
                      </Badge>
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        {job.period}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                      {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
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
