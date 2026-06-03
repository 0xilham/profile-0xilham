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
            title: "Basic Structured Query Language (SQL)",
            issuer: "Dicoding Indonesia",
            date: "May 2025 - May 2028",
            credential: "QLZ93LRM7Z5D",
            skills: ["SQL", "SQLite", "MySQL"],
            description: [
                "Mastered fundamental SQL concepts, including data types, queries, and manipulation.",
                "Gained proficiency in database design, normalization, and relationships.",
                "Developed skills in querying, filtering, sorting, and aggregating data.",
            ],
            certLink: "https://www.dicoding.com/certificates/QLZ93LRM7Z5D",
        },
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
            certLink: "https://drive.google.com/file/d/1_b1KMvQX0qVnsmA8gyruLYmiCv5fp_sL/view?usp=sharing",
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
            certLink: "https://drive.google.com/file/d/1_jQjutDIEa5aZeU6VQcyFt5b4u3JIobB/view?usp=sharing",
        },
        {
            title: "Database Programming with SQL",
            issuer: "Oracle Academy",
            date: "January 2023",
            credential: "580/SQL/Oracle-Academy/l/2023",
            skills: ["SQL", "Oracle Database"],
            description: [
                "Acquired knowledge in database design, normalization, and SQL queries.",
                "Developed skills in data modeling, query optimization, and database administration.",
                "Created and managed databases using Oracle Database.",
            ],
            certLink: "https://drive.google.com/file/d/1_lQb4v7CnvS23omB1JSDea4u7hhXrefe/view?usp=sharing",
        },
        {
            title: "Junior Web Developer",
            issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
            date: "September 2022",
            credential: "62010 2513 4 0002193 2022",
            skills: ["PHP", "JavaScript", "HTML & CSS", "MySQL", "Git Version Control System"],
            description: [
                "Implemented User Interface (UI).",
                "Applied text, graphic, and multimedia-based programming execution commands.",
                "Organized functions, files, or programming resources in a neat organization.",
                "Wrote Clean Code with principles according to guidelines and practices.",
                "Implemented structured programming.",
                "Used pre-existing libraries or components.",
            ],
            certLink: "https://drive.google.com/file/d/1a5EttABLZVN03PyWUZKWVDPaARRIy_h6/view?usp=sharing",
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
            certLink: "https://drive.google.com/file/d/1a4fdfUfRhjbXFoqFWjJR4zQTss3w-uIU/view?usp=sharing",
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
            certLink: "https://drive.google.com/file/d/1a0dwH_ufFuD9YZrkm1bsTwQ29q6KZbeZ/view?usp=sharing",
        },
    ]

    return (
        <section id="certifications" className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title">Certifications</h2>

                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card decoration="tack" className={`overflow-hidden h-full flex flex-col ${index % 2 === 0 ? "rotate-1 hover:-rotate-1" : "-rotate-1 hover:rotate-1"}`}>
                                <CardContent className="pt-8 flex-grow flex flex-col">
                                    <div className="flex flex-col xl:flex-row justify-between mb-4 border-b-2 border-pencil/20 border-dashed pb-4 gap-4">
                                        <div className="flex items-start">
                                            <div className="mr-4">
                                                <Award className="h-8 w-8 text-marker-red" />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold font-kalam">{cert.title}</h3>
                                                <p className="text-pencil/80 font-patrick-hand text-xl mt-1">
                                                    {cert.issuer}
                                                    {cert.collaboration && ` in collaboration with ${cert.collaboration}`}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-4 xl:mt-0 flex flex-col items-start xl:items-end">
                                            <div className="flex items-center text-lg font-patrick-hand text-pencil/70 mb-2">
                                                <CalendarDays className="h-5 w-5 mr-2 text-pen-blue" />
                                                {cert.date}
                                            </div>
                                            <div className="flex items-center text-lg font-patrick-hand">
                                                <span className="text-pencil/70 mr-2">Credential:</span>
                                                <span className="font-bold text-pencil/90 bg-muted-paper px-2 py-0.5 border-2 border-pencil rounded-wobbly rotate-1">{cert.credential}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <h4 className="font-bold font-kalam text-2xl mb-3">Relevant Skills:</h4>
                                        <div className="flex flex-wrap gap-3 mb-6 pl-2">
                                            {cert.skills.map((skill, i) => (
                                                <Badge key={i} variant="secondary" className="text-lg px-3 py-1">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>

                                        <h4 className="font-bold font-kalam text-2xl mb-3">Description:</h4>
                                        <ul className="list-disc pl-8 space-y-2 text-pencil/90 font-patrick-hand text-lg">
                                            {cert.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto pt-6 flex justify-end">
                                        <Link href={cert.certLink} className="text-pen-blue hover:text-marker-red underline decoration-wavy flex items-center text-xl font-patrick-hand font-bold"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            View Certificate <ExternalLink className="h-5 w-5 ml-2" />
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
