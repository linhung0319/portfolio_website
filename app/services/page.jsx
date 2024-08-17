"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Front-End Development",
    subtitle: "Crafting Engaging User Interfaces",
    description: "Using React, HTML, CSS, and JavaScript, I create responsive and interactive website frontends that captivate users. My expertise in modern front-end technologies ensures an exceptional user experience, with a focus on performance optimization for fast-loading, smooth-running interfaces. I pay meticulous attention to ensure your website looks and functions flawlessly across all platforms.",
    href: ""
  },
  {
    num: "02",
    title: "Back-End Development",
    subtitle: "Building Robust and Reliable Application Backends",
    description: "Leveraging Node.js and Python, I develop stable and efficient server-side applications that form the backbone of your digital presence. With extensive experience in both technologies, I can choose the most suitable tech stack for your project. My focus on scalability and performance ensures your application can handle high-concurrency requests, while implementing best security practices to protect your data and user information.",
    href: ""
  },
  {
    num: "03",
    title: "Full-Stack Website Development",
    subtitle: "From Concept to Complete Solution",
    description: "Using modern frameworks like Next.js, I offer comprehensive website development services that bridge the gap between front-end and back-end. This seamless integration provides a one-stop development solution for your projects. By leveraging Next.js's server-side rendering capabilities, I enhance website performance and SEO effectiveness. My approach allows for rapid prototyping and iteration, significantly reducing project timelines.",
    href: ""
  },
  {
    num: "04",
    title: "API Development and Integration",
    subtitle: "Seamlessly Connecting Your Applications",
    description: "I develop RESTful APIs that enable smooth integration between different systems. My APIs are designed to be intuitive and user-friendly, encouraging developer adoption. I prioritize API security by implementing appropriate authentication and authorization mechanisms. Additionally, I provide comprehensive API documentation to facilitate easy integration and usage.",
    href: ""
  },
  {
    num: "05",
    title: "Database Design and Management",
    subtitle: "Optimizing Your Data Storage and Retrieval",
    description: "I specialize in designing, implementing, and optimizing database structures using SQL. My meticulously crafted data models ensure data integrity and efficient querying. By optimizing database performance, I significantly enhance data retrieval speeds. I also implement robust backup and recovery strategies to ensure your data remains secure and accessible at all times.",
    href: ""
  },
  {
    num: "06",
    title: "Website Maintenance and Optimization",
    subtitle: "Keeping Your Site Running Smoothly",
    description: "I offer ongoing maintenance services to ensure your website remains secure, stable, and efficient. This includes regular updates and security patches to mitigate risks, as well as performance monitoring and optimization to continuously improve website speed and user experience. By analyzing user feedback and data analytics, I continually refine and enhance your website's functionality, ensuring it evolves with your business needs and user expectations.",
    href: ""
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent 
                    group-hover:text-outline-hover transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white
                    group-hover:bg-accent transition-all duration-500 flex
                    justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2
                  className="text-[42px] font-bold leading-none text-white
                  group-hover:text-accent transition-all duration-500"
                >
                  {service.title}
                </h2>
                <p
                  className="text-[28px] leading-none text-white group-hover:text-accent transition-all duration-500"
                >
                  {service.subtitle}
                </p>
                {/* description */}
                <p className="text-white/60">
                  {service.description}
                </p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
};

export default Services;