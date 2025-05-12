import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Hero />
      {/* <About /> */}
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
