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
            icon: <Mail className="h-5 w-5 text-primary" />,
            title: "Email",
            value: "ilhamnurhermawan@gmail.com",
            link: "mailto:ilhamnurhermawan@gmail.com",
        },
        {
            icon: <MapPin className="h-5 w-5 text-primary" />,
            title: "Location",
            value: "Central Jakarta, DKI Jakarta, Indonesia",
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
        <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
            <div className="section-container">
                <h2 className="section-title">Get In Touch</h2>

                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="h-full">
                            <CardContent className="pt-6">
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-6 mb-8">
                                    {contactInfo.map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="p-2 bg-primary/10 rounded-full mr-4">{item.icon}</div>
                                            <div>
                                                <h4 className="font-medium text-gray-700 dark:text-gray-300">{item.title}</h4>
                                                <a
                                                    href={item.link}
                                                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors break-all"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {item.value}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h4 className="font-medium mb-4">Connect with me:</h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary/10 transition-colors"
                                            aria-label={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                                    <p className="text-gray-700 dark:text-gray-300 italic">
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
                        <Card className="h-full">
                            <CardContent className="pt-6">
                                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <Textarea
                                            name="message"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full min-h-[150px]"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full" disabled={isSubmitting}>
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
                                            <span className="flex items-center justify-center">
                                                Send Message <Send className="ml-2 h-4 w-4" />
                                            </span>
                                        )}
                                    </Button>
                                </form>

                                {submissionResult && (
                                    <div className={`mt-4 p-4 rounded-md ${submissionResult.error ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}>
                                        <p>{submissionResult.message}</p>
                                        {submissionResult.error && <p className="font-semibold">Error: {submissionResult.error}</p>}
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
