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
            title: "Product Development Staff",
            company: "PT Graha Informatika Nusantara (GRATIKA)",
            period: "July 2025 - Present",
            type: "Full Time",
            responsibilities: [
                "Coordinate with the Product Development Manager to understand the roadmap and feature priorities",
                "Write and test clean, efficient, and maintainable source code",
                "Developing new features according to business needs",
                "Develop Android mobile applications using React Native for internal company operational needs",
            ],
        },
        /*
        {
            title: "Quality Control",
            company: "PT DAC Indonesia",
            period: "December 2024 - January 2025",
            type: "Internship",
            responsibilities: [
                "Conducted end - to - end quality control inspections(physical, hardware, and software testing) on 100 laptop units / day using a structured process",
                "Checked casing, screen, and external components for manufacturing defects(detected 5- 10 defective units per week)",
                "Running automated diagnostic tools for CPU, RAM, SSD, and connectivity(98 % passed performance tests, 2 % rejected for repair)",
                "Ensured proper OS installation, driver functionality, and application compatibility(100 % units passed compatibility tests)",
                "Reduced defective shipments by 20 % by implementing a standardized checklist system",
                "Assisted the team in compiling daily QC reports, including root cause analysis to improve production processes",
            ],
        },
        */
        /*
        {
            title: "Game Design & Development",
            company: "PT Kinema Systrans Multimedia",
            period: "February 2024 - June 2024",
            type: "Certified Independent Study",
            responsibilities: [
                "Game engines and Game Design Principles",
                "Game theory, ethics, story and narrative development",
                "Game mechanics and game design documentation(GDD)",
                "Game coding foundation",
                "Game assets management and integration",
                "Game UI, Sound Design and preparing for playtesting",
                "Monetization, coding plans and advanced mechanics",
                "Develop capstone project",
                "Presentation and showcase",
            ],
        },
        */
        {
            title: "Solidity Blockchain Developer",
            company: "PT GreatEdu Global Mahardika",
            period: "August 2023 - December 2023",
            type: "Certified Independent Study",
            responsibilities: [
                "Blockchain merges data structures, security, and consensus protocols, enabling resilient dApps",
                "Ethereum’s smart contracts and tokenization facilitate asset exchange",
                "JavaScript and Solidity are vital for dApp interfaces and contracts",
                "Scaling and security ensure blockchain’s robustness",
                "Building Web3 innovates decentralized platforms with a theme climate change",
            ],
        },
    ]

    return (
        <section id="experience" className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32 xl:px-56">
                <h2 className="section-title">Experience</h2>

                <div ref={ref} className="mx-auto">
                    {experienceData.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card decoration="tape" className={`mb-8 ${index % 2 === 0 ? "rotate-1 hover:-rotate-1" : "-rotate-1 hover:rotate-1"}`}>
                                <CardContent className="pt-8">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 border-b-2 border-pencil/20 border-dashed pb-4">
                                        <div>
                                            <h3 className="text-3xl font-bold font-kalam">{job.title}</h3>
                                            <p className="text-pencil/80 font-patrick-hand text-xl flex items-center mt-1">
                                                <Briefcase className="h-5 w-5 mr-2 text-pen-blue" />
                                                {job.company}
                                            </p>
                                        </div>
                                        <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                                            <Badge variant="outline" className="mb-2">
                                                {job.type}
                                            </Badge>
                                            <p className="text-lg font-patrick-hand text-pencil/70 flex items-center">
                                                <CalendarDays className="h-5 w-5 mr-2 text-marker-red" />
                                                {job.period}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <h4 className="font-bold mb-3 font-kalam text-2xl">Responsibilities:</h4>
                                        <ul className="list-disc pl-5 space-y-2 text-pencil/90 font-patrick-hand text-lg">
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
