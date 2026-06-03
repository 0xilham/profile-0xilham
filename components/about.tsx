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
      icon: <Code className="h-10 w-10 text-pencil" />,
      title: "Technical Expertise",
      description:
        "Proficient in multiple programming languages and frameworks with a focus on web3 and game development.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-marker-red" />,
      title: "Problem Solver",
      description: "Strong analytical skills with a creative approach to solving complex technical challenges.",
    },
    {
      icon: <Users className="h-10 w-10 text-pen-blue" />,
      title: "Team Collaboration",
      description: "Effective communication skills and experience working in collaborative environments.",
    },
    /*
    {
      icon: <Gamepad2 className="h-10 w-10 text-pencil" />,
      title: "Game Development",
      description:
        "Experience with Unity Engine and game design principles to create engaging interactive experiences.",
    },
    */
  ]

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 relative">
          <div className="lg:col-span-2">
            <p className="text-xl font-patrick-hand text-pencil/90 mb-6 leading-relaxed">
              I'm a highly driven Software Engineer with a degree in Informatics Engineering from STMIK IKMI Cirebon,
              passionate about building impactful digital solutions. My expertise spans web3 development {/* and game development */},
              combining technical skills with creative problem-solving.
            </p>
            <p className="text-xl font-patrick-hand text-pencil/90 mb-6 leading-relaxed">
              Known for my analytical abilities, effective communication, and creative problem-solving skills, I excel
              both individually and in team settings. I actively pursue professional growth through programs like the
              Certified Independent Study & Internship Program (Kampus Merdeka) and various online courses,
              demonstrating my commitment to continuously enhancing both technical and interpersonal skills.
            </p>
            <p className="text-xl font-patrick-hand text-pencil/90 leading-relaxed">
              My goal is to leverage my technical knowledge and creative thinking to develop innovative solutions that
              make a positive impact in the digital world.
            </p>
          </div>

          <Card decoration="tape" className="p-6 rotate-2 hover:rotate-0 bg-[#fff9c4]">
            <h3 className="text-2xl font-bold mb-4 font-kalam">Personal Details</h3>
            <ul className="space-y-3 font-patrick-hand text-xl">
              <li className="flex justify-between border-b-2 border-pencil/20 border-dashed pb-2">
                <span className="font-bold text-pencil/70">Name:</span>
                <span>Ilham Nur Hermawan</span>
              </li>
              <li className="flex justify-between border-b-2 border-pencil/20 border-dashed pb-2">
                <span className="font-bold text-pencil/70">Location:</span>
                <span className="text-right">Cirebon, Jawa Barat</span>
              </li>
              <li className="flex justify-between border-b-2 border-pencil/20 border-dashed pb-2">
                <span className="font-bold text-pencil/70">Email:</span>
                <a href="mailto:ilhamnurhermawan@gmail.com" className="text-pen-blue hover:text-marker-red underline decoration-wavy">
                  ilhamnurhermawan@gmail.com
                </a>
              </li>
              <li className="flex justify-between border-b-2 border-pencil/20 border-dashed pb-2">
                <span className="font-bold text-pencil/70">Phone:</span>
                <a href="tel:+62895372330356" className="text-pen-blue hover:text-marker-red underline decoration-wavy">
                  +62 895 3723 30356
                </a>
              </li>
              <li className="flex justify-between pb-2">
                <span className="font-bold text-pencil/70">Portfolio:</span>
                <a
                  href="https://portfolio.0xilham.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pen-blue hover:text-marker-red underline decoration-wavy"
                >
                  portfolio.0xilham.my.id
                </a>
              </li>
            </ul>
          </Card>
        </div>

        <h3 className="section-subtitle text-center mb-10 -rotate-1">My Strengths</h3>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
            >
              <Card decoration="tack" className="h-full">
                <CardContent className="pt-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{strength.icon}</div>
                    <h4 className="text-2xl font-bold font-kalam mb-2">{strength.title}</h4>
                    <p className="font-patrick-hand text-lg text-pencil/80">{strength.description}</p>
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
