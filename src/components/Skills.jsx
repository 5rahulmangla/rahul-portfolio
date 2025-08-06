import React from 'react'
import { motion, spring } from "framer-motion"
import { Code2, Palette, Database, GitBranch, Shield, CreditCard, Layers, Globe, Cloud } from "lucide-react"
import { reactjs,git,html,docker, tailwind, netlify, database,springboot, java, css, javascript, bootstrap, github, microservices, hibernate, nodejs } from '../assets'

const skills = [
  { name: "JAVA", icon: java, color: "bg-white-100 text-violet-600 border-violet-200" },
  { name: "SPRINGBOOT", icon: springboot, color: "bg-black-100 text-amber-600 border-amber-200" },
  { name: "MICROSERVICES", icon: microservices, color: "bg-black-100 text-indigo-600 border-indigo-200" },
  { name: "HIBERNATE", icon: hibernate, color: "bg-black-100 text-green-600 border-green-200" },
  { name: "ORACLE", icon: database, color: "bg-black-100 text-green-700 border-green-200" },
  { name: "REACT JS", icon: reactjs, color: "bg-black-100 text-cyan-600 border-cyan-200" },
  { name: "GIT(HUB)", icon: github, color: "bg-black-100 text-gray-600 border-gray-200" },
  { name: "DOCKER", icon: docker, color: "bg-black-100 text-green-700 border-green-200" },
  { name: "HTML5", icon: html, color: "bg-black-100 text-orange-600 border-orange-200" },
  { name: "NETLIFY", icon: netlify, color: "bg-black-100 text-green-700 border-green-200" },
  { name: "TAILWIND", icon: tailwind, color: "bg-black-100 text-green-700 border-green-200" },
  { name: "CSS3", icon: css, color: "bg-black-100 text-blue-600 border-blue-200" },
  { name: "JAVASCRIPT", icon: javascript, color: "bg-black-100 text-yellow-600 border-yellow-200" },
  { name: "BOOTSTRAP", icon: bootstrap, color: "bg-black-100 text-purple-600 border-purple-200" },
  { name: "NODE.JS", icon: nodejs, color: "bg-black-100 text-emerald-600 border-emerald-200" },

]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

const hoverVariants = {
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
}

const Skills = () => {
  return (
       <section className="max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4">Technical Skills</h2>
        <p className="text-white-600 text-lg max-w-2xl mx-auto">
          I'm a Full Stack Developer passionate about building scalable web applications using Java, Spring Boot, Hibernate, and React JS. 
          I love crafting robust backend systems and dynamic, user-friendly frontends that deliver seamless digital experiences.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap gap-2 justify-center"
      >
        {skills.map((skill, index) => {
          const IconComponent = skill.icon
          return (
            <motion.div key={skill.name} variants={itemVariants} whileHover="hover" className="group cursor-pointer">
              <motion.div
                variants={hoverVariants}
                className={`
                  flex items-center gap-2 px-2 py-1 rounded-full border-2 
                  ${skill.color} 
                  transition-all duration-200 
                  hover:shadow-lg hover:shadow-black/5
                  group-hover:border-opacity-60
                `}
              >
                {/* <IconComponent className="w-5 h-5 flex-shrink-0" /> */}
                <img className="w-5 h-5 flex-shrink-0" src={skill.icon} alt="Jellyfish Emoji" />
                <span className="font-medium text-sm whitespace-nowrap">{skill.name}</span>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Floating animation for some decorative elements */}
      <div className="relative mt-16 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-8 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-40"
        />
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-4 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50"
        />
      </div>
    </section>
  )
}

export default Skills