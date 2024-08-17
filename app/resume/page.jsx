"use client";

import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiDocker,
  SiPostgresql,
  SiDjango,
  SiBootstrap,
  SiTypescript,
  SiGit,
  SiGithubactions,
  SiTensorflow
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description: "As a software engineer with a deep passion for audio technology and machine learning, I bring a unique blend of theoretical knowledge and practical experience to every project.\n\nIn recent years, I've dedicated myself to deepening my skills in full-stack development, design patterns, and object-oriented programming. This continuous learning journey has equipped me with strong problem-solving abilities and technical adaptability, proven through various complex projects.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hung Lin"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+886) 987 432 543"
    },
    {
      fieldName: "Experience",
      fieldValue: "3 years"
    },
    {
      fieldName: "Skype",
      fieldValue: "linhung"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Taiwan"
    },
    {
      fieldName: "Email",
      fieldValue: "linhung0319@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "Chinese, English"
    },
  ]
};

// experience data
const experience = {
  icons: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Experienced software engineer with three years of professional background in audio algorithms and machine learning. \n\nFollowing three years of work in audio processing, dedicated four years to deepening full-stack development skills, as well as design patterns and object-oriented programming techniques. Demonstrated strong problem-solving abilities and technical adaptability through multiple complex projects.",
  items: [
    {
      company: "UnlimiterHear Co., Ltd",
      position: "Machine Learning Engineer",
      duration: "2019 - 2020",
    },
    {
      company: "UnlimiterHear Co., Ltd",
      position: "Software Engineer",
      duration: "2017 - 2019",
    },
  ]
};

const education = {
  icons: "/assets/resume/cap.svg",
  title: "My education",
  description: "My academic background that laid the foundation for my career in technology and engineering.",
  items: [
    {
      institution: "National Taiwan University",
      degree: "Master in Photonic and Electronics",
      duration: "2013 - 2015",
    },
    {
      institution: "National Tsing Hua University",
      degree: "Bachelor in Physics",
      duration: "2009 - 2013",
    },
  ]
};

const skills = {
  title: "My skills",
  description: "A comprehensive overview of my technical expertise and professional capabilities.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiBootstrap />,
      name: "bootstrap",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiPython />,
      name: "python",
    },
    {
      icon: <SiDjango />,
      name: "django",
    },
    {
      icon: <SiTensorflow />,
      name: "tensorflow",
    },
    {
      icon: <SiPostgresql />,
      name: "postgresql",
    },
    {
      icon: <SiDocker />,
      name: "docker",
    },
    {
      icon: <SiGit />,
      name: "git",
    },
    {
      icon: <SiGithubactions />,
      name: "github actions",
    },
  ]
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList
            className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p
                  className="max-w-600px text-white/60"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10  rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-600px text-white/60">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10  rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-600px text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p
                  className="max-w-[600px] text-white/60 mx-auto xl:mx-0"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
};

export default Resume;