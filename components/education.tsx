"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, CalendarDays, BookOpen } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationData = {
    degree: "Bachelor's Degree (S1)",
    field: "Informatics Engineering",
    institution: "Sekolah Tinggi Manajemen Informatika dan Komputer IKMI Cirebon",
    graduationDate: "May 2025",
    gpa: "3.67",
    thesis: "Hyperparameter Long Short Term Memory For Optimization Rainfall Prediction Models",
    relevantCourses: ["Algorithms and Programming", "Deep Learning & Artificial Intelligence", "Database", "Web Programming"],
  }

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-32 xl:px-56">
        <h2 className="section-title">Education</h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto"
        >
          <Card decoration="tape" className="overflow-hidden -rotate-1 hover:rotate-1">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 border-b-2 border-pencil/20 border-dashed pb-4">
                <div className="flex items-start">
                  <div className="mr-4">
                    <GraduationCap className="h-8 w-8 text-marker-red" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-kalam">
                      {educationData.degree} in {educationData.field}
                    </h3>
                    <p className="text-pencil/80 font-patrick-hand text-xl mt-1">{educationData.institution}</p>
                  </div>
                </div>
                <div className="text-left md:text-right mt-4 md:mt-0">
                  <div className="flex items-center justify-start md:justify-end text-lg font-patrick-hand text-pencil/70 mb-2">
                    <CalendarDays className="h-5 w-5 mr-2 text-pen-blue" />
                    {educationData.graduationDate}
                  </div>
                  <div className="bg-muted-paper border-[3px] border-pencil text-pencil px-3 py-1 rounded-wobbly text-xl font-patrick-hand font-bold inline-block rotate-2">
                    GPA: {educationData.gpa}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-bold font-kalam text-2xl flex items-center mb-3">
                    <BookOpen className="h-5 w-5 mr-2 text-pen-blue" />
                    Thesis
                  </h4>
                  <p className="text-pencil/90 font-patrick-hand text-xl pl-8">{educationData.thesis}</p>
                </div>

                <div>
                  <h4 className="font-bold font-kalam text-2xl flex items-center mb-3">
                    <BookOpen className="h-5 w-5 mr-2 text-pen-blue" />
                    Relevant Courses
                  </h4>
                  <div className="pl-8 flex flex-wrap gap-3">
                    {educationData.relevantCourses.map((course, index) => (
                      <span key={index} className="bg-white border-2 border-pencil rounded-wobblySm shadow-hard-sm px-4 py-1 font-patrick-hand text-lg hover:-translate-y-1 transition-transform cursor-default">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
