"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Linkedin, Github, Instagram } from "lucide-react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submissionResult, setSubmissionResult] = useState<{ message: string; error?: string } | null>(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmissionResult(null); // Reset previous result

        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmissionResult({ message: data.message });
                setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form on success
            } else {
                setSubmissionResult({ message: 'Failed to send message.', error: data.error });
            }
        } catch (error: any) {
            console.error('There was an error submitting the form:', error);
            setSubmissionResult({ message: 'An unexpected error occurred.', error: error.message });
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        {
            icon: <Mail className="h-6 w-6 text-marker-red" />,
            title: "Email",
            value: "ilhamnurhermawan@gmail.com",
            link: "mailto:ilhamnurhermawan@gmail.com",
        },
        {
            icon: <MapPin className="h-6 w-6 text-marker-red" />,
            title: "Location",
            value: "Jakarta, Indonesia",
            link: "https://maps.google.com/?q=Jakarta+Pusat,DKI+Jakarta,Indonesia",
        },
    ]

    const socialLinks = [
        {
            icon: <Github className="h-5 w-5" />,
            name: "GitHub",
            link: "https://github.com/0xilham",
        },
        {
            icon: <Linkedin className="h-5 w-5" />,
            name: "LinkedIn",
            link: "https://linkedin.com/in/ilham-nur-hermawan",
        },
        {
            icon: <Instagram className="h-5 w-5" />,
            name: "Instagram",
            link: "https://instagram.com/0x.ilham",
        },
    ]

    return (
        <section id="contact" className="py-16 md:py-24">
            <div className="section-container">
                <h2 className="section-title">Get In Touch</h2>

                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card decoration="tape" className="h-full rotate-1 hover:-rotate-1">
                            <CardContent className="pt-8">
                                <h3 className="text-4xl font-bold font-kalam mb-6">Contact Information</h3>
                                <div className="space-y-6 mb-8 border-b-2 border-pencil/20 border-dashed pb-8">
                                    {contactInfo.map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="mr-4 mt-1">{item.icon}</div>
                                            <div>
                                                <h4 className="font-bold font-kalam text-2xl">{item.title}</h4>
                                                <a
                                                    href={item.link}
                                                    className="text-pen-blue hover:text-marker-red underline decoration-wavy font-patrick-hand text-xl transition-colors break-all"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {item.value}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h4 className="font-bold font-kalam text-2xl mb-4">Connect with me:</h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-3 border-[3px] border-pencil rounded-wobbly bg-white shadow-hard hover:bg-muted-paper hover:-translate-y-1 transition-transform text-pencil ${index % 2 === 0 ? "rotate-2 hover:rotate-0" : "-rotate-2 hover:rotate-0"}`}
                                            aria-label={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-8 p-6 bg-[#fff9c4] border-[3px] border-pencil border-dashed rounded-wobbly -rotate-1">
                                    <p className="text-pencil font-patrick-hand text-xl">
                                        "I'm always open to discussing new projects, creative ideas or opportunities to be part of your
                                        vision."
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card decoration="tack" className="h-full -rotate-1 hover:rotate-1">
                            <CardContent className="pt-8">
                                <h3 className="text-4xl font-bold font-kalam mb-6">Send Me a Message</h3>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="font-bold font-kalam text-xl ml-1">Your Name</label>
                                        <Input
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="What should I call you?"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full text-lg"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="font-bold font-kalam text-xl ml-1">Your Email</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="Where can I reach you?"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full text-lg"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="font-bold font-kalam text-xl ml-1">Subject</label>
                                        <Input
                                            id="subject"
                                            type="text"
                                            name="subject"
                                            placeholder="What's this about?"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full text-lg"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="font-bold font-kalam text-xl ml-1">Your Message</label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell me more..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full min-h-[150px] text-lg"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full rotate-1 text-xl py-6" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <span className="flex items-center">
                                                <svg
                                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center font-bold">
                                                Send Message <Send className="ml-2 h-5 w-5" />
                                            </span>
                                        )}
                                    </Button>
                                </form>

                                {submissionResult && (
                                    <div className={`mt-6 p-4 border-[3px] border-pencil rounded-wobbly font-patrick-hand text-xl shadow-hard-sm ${submissionResult.error ? 'bg-red-200 text-red-900 rotate-1' : 'bg-green-200 text-green-900 -rotate-1'}`}>
                                        <p>{submissionResult.message}</p>
                                        {submissionResult.error && <p className="font-bold">Error: {submissionResult.error}</p>}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
