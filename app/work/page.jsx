"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    title: "Multi-Vendor Restaurant Marketplace",
    description: "This is a fully-featured multi-vendor restaurant marketplace website developed using Django, Bootstrap, and JavaScript. The project showcases complex functionalities including location-based search and nearby restaurant recommendations.",
    stack: [
      { name: "Python3" },
      { name: "Django" },
      { name: "Bootstrap" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "Postgresql" },
      { name: "Postgis" },
      { name: "Gdal-Python" },
      { name: "Google-Maps-API" },
    ],
    image: "/assets/work/foodOnline.png",
    live: "https://linhung.online/",
    github: "https://github.com/linhung0319/foodOnline",
  },
  {
    num: "02",
    title: "Simple Reddit Clone",
    description: "A simplified Reddit clone built with Next.js, featuring user authentication, topic creation, posting, and commenting functionalities.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Typescript" },
      { name: "Prisma" },
      { name: "Next-Auth" },
    ],
    image: "/assets/work/redit.png",
    live: "https://github.com/linhung0319/discuss_board",
    github: "https://linhung0319-discuss-board.vercel.app/",
  },
  {
    num: "03",
    title: "Django REST API Recipe",
    description: "This is a Recipe API built with Django and Django REST Framework. The API allows users to upload and store their favorite recipes, including those from photos and the web. This project serves as a demonstration of my skills in Python, Django, Docker, and Test Driven Development (TDD), showcasing a robust backend REST API.",
    stack: [
      { name: "Python3" },
      { name: "Django" },
      { name: "Django-REST-Framework" },
      { name: "Postgresql" },
      { name: "Docker" },
      { name: "Docker-Compose" },
      { name: "Unit-Test" },
      { name: "Github-Actions" },
    ],
    image: "/assets/work/recipe.png",
    live: "https://github.com/linhung0319/recipe-app-api",
    github: "https://github.com/linhung0319/recipe-app-api",
  },
  {
    num: "04",
    title: "Simple Google Keep Clone",
    description: "A simple Google Keep clone built with Vite and React. This project demonstrates basic front-end development skills and React application structure by allowing users to create, view, and delete notes.",
    stack: [
      { name: "React" },
      { name: "CSS" },
      { name: "Vite" },
    ],
    image: "/assets/work/keeper.png",
    live: "https://linhung0319-keeper-app.vercel.app/",
    github: "https://github.com/linhung0319/keeper_app",
  },
  {
    num: "05",
    title: "Google Scholar Crawler",
    description: "This is a web scraping program to extract data from Google Scholar Search Pages.",
    stack: [
      { name: "Python2" },
      { name: "Crawler" },
      { name: "BeautifulSoup4" },
    ],
    image: "/assets/work/google-scholar-crawler.png",
    live: "https://github.com/linhung0319/google-scholar-crawler",
    github: "https://github.com/linhung0319/google-scholar-crawler",
  },
  {
    num: "06",
    title: "Text Learning",
    description: "Use support vector machine to do text learning in order to classify email by authors.",
    stack: [
      { name: "Python3" },
      { name: "Machine-Learning" },
      { name: "SVM" },
      { name: "Sklearn" },
    ],
    image: "/assets/work/text-learning.png",
    live: "https://linhung0319.github.io/text-learning/",
    github: "https://github.com/linhung0319/text-learning",
  },
  {
    num: "07",
    title: "Hypothesis Testing",
    description: "This is a note I took about Hypothesis Test",
    stack: [
      { name: "Python3" },
      { name: "Jupyter-Notebook" },
      { name: "Statistical-Analysis" },
    ],
    image: "/assets/work/hypothesis-test.png",
    live: "https://github.com/linhung0319/hypothesis_test",
    github: "https://github.com/linhung0319/hypothesis_test",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;

    // update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* description */}
              <p className="text-white/60">
                {project.description}
              </p>

              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-xl text-accent"
                    >
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ", "}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h=[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h=[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[530px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="w-full"
                  >
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;