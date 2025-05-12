"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Gamepad2, Lightbulb, Users } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  const strengths = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Technical Expertise",
      description:
        "Proficient in multiple programming languages and frameworks with a focus on web3 and game development.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Problem Solver",
      description: "Strong analytical skills with a creative approach to solving complex technical challenges.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Collaboration",
      description: "Effective communication skills and experience working in collaborative environments.",
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-primary" />,
      title: "Game Development",
      description:
        "Experience with Unity Engine and game design principles to create engaging interactive experiences.",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a fresh graduate in Informatics Engineering from STMIK IKMI Cirebon with a strong interest in
              information technology and digital development. My expertise spans web3 development and game development,
              combining technical skills with creative problem-solving.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Known for my analytical abilities, effective communication, and creative problem-solving skills, I excel
              both individually and in team settings. I actively pursue professional growth through programs like the
              Certified Independent Study & Internship Program (Kampus Merdeka) and various online courses,
              demonstrating my commitment to continuously enhancing both technical and interpersonal skills.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              My goal is to leverage my technical knowledge and creative thinking to develop innovative solutions that
              make a positive impact in the digital world.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4 font-poppins">Personal Details</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="font-medium text-gray-600 dark:text-gray-400">Name:</span>
                <span>Ilham Nur Hermawan</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-gray-600 dark:text-gray-400">Location:</span>
                <span>Cirebon, Jawa Barat, Indonesia</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-gray-600 dark:text-gray-400">Email:</span>
                <a href="mailto:ilhamnurhermawan@gmail.com" className="text-primary hover:underline">
                  ilhamnurhermawan@gmail.com
                </a>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-gray-600 dark:text-gray-400">Phone:</span>
                <a href="tel:+62895372330356" className="text-primary hover:underline">
                  +62 895 3723 30356
                </a>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-gray-600 dark:text-gray-400">Portfolio:</span>
                <a
                  href="https://portfolio.0xilham.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  portfolio.0xilham.my.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="section-subtitle text-center mb-10">My Strengths</h3>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
            >
              <Card className="h-full card-hover">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full">{strength.icon}</div>
                    <h4 className="text-lg font-semibold mb-2">{strength.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{strength.description}</p>
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
