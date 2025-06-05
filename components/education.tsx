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
    <section id="education" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-32 xl:px-56">
        <h2 className="section-title">Education</h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto"
        >
          <Card className="overflow-hidden card-hover">
            <div className="h-2 bg-gradient-to-r from-primary to-purple-600"></div>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      {educationData.degree} in {educationData.field}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">{educationData.institution}</p>
                  </div>
                </div>
                <div className="text-left md:text-right mt-4 md:mt-0">
                  <div className="flex items-center justify-start md:justify-end text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {educationData.graduationDate}
                  </div>
                  <div className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium inline-block">
                    GPA: {educationData.gpa}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-medium flex items-center mb-2">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Thesis
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 pl-6">{educationData.thesis}</p>
                </div>

                <div>
                  <h4 className="font-medium flex items-center mb-2">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Relevant Courses
                  </h4>
                  <div className="pl-6 flex flex-wrap gap-2">
                    {educationData.relevantCourses.map((course, index) => (
                      <span key={index} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
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
