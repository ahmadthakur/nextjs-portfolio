"use client"; // This is a client component 👈🏽

import Head from "next/head";
import { BsFillMoonFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import picture from "../../public/pxfuel.jpg";
import frontend from "../../public/frontend.png";
import backend from "../../public/backend.png";
import project1 from "../../public/project1.png";
import project2 from "../../public/project2.png";
import Footer from "./components/Footer";
import { useState } from "react";
import giticon from "../../public/Icons/git-icon.svg";
import javascript from "../../public/Icons/javascript.svg";
import react from "../../public/Icons/react.svg";
import node from "../../public/Icons/nodejs.svg";
import postgresql from "../../public/Icons/postgresql.svg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-800 dark:text-white">
        <section className="min-h-screen">
          <div>
            <nav className="py-10 mb-12 flex justify-between">
              <a
                href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                target="_blank"
              >
                <h1 className="text-xl">Do not click this!</h1>
              </a>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-xl"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-red-500 to-violet-500 text-white px-4 py-2 rounded-md ml-8 text-xl"
                    href="https://drive.google.com/file/d/1-jb7XT4-bNF78feRMTjSt0W4eaUbVyEL/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-center p-10">
            <h2 className="text-5xl text-violet-600 font-medium">
              Ahmad Thakur
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">Software Engineer</h3>
            <p className="text-md py-5 text-gray-800 leading-8  dark:bg-slate-800 dark:text-white">
              I am a software engineering undergrad experienced in building web
              applications.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-800">
            <a href="https://github.com/ahmadthakur" target="_blank">
              <AiFillGithub className=" dark:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/ahmadthakur" target="_blank">
              <AiFillLinkedin className=" dark:text-white" />
            </a>
          </div>
          <div className="relative mx-auto w-80 h-80">
            <Image
              className="mt-20 object-fill rounded-full"
              src={picture}
              alt="Picture of the author"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </section>
        {/* Section 2 */}
        <section>
          <div className="text-center mt-12">
            <h3 className="text-3xl py-1  dark:text-white">What I do</h3>
            <p className="text-md py-2 text-gray-800 leading-8  dark:text-white">
              I have worked with various technologies like React, Node, Express,
              MongoDB, MySQL, and Docker.
            </p>
            <div className="flex gap-10 lg:flex-row lg:flex-wrap my-12 justify-center">
              <Image src={javascript} style={{ width: "10%", height: "10%" }} />
              <Image src={node} style={{ width: "10%", height: "10%" }} />
              <Image src={react} style={{ width: "10%", height: "10%" }} />
              <Image src={postgresql} style={{ width: "10%", height: "10%" }} />
              <Image src={giticon} style={{ width: "10%", height: "10%" }} />
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-3xl py-1">Projects</h3>
            <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
              <div className="mt-12 basis-1/4 flex-1 text-center shadow-lg p-10 rounded-xl my-10 bg-slate-500  text-white">
                <a
                  href="https://github.com/ahmadthakur/Sad_Machine"
                  target="_blank"
                >
                  <Image src={project1} />
                  <h3 className="text-xl py-2 text-white">Sad Machine</h3>
                  <p>
                    Sad Machine is a discord bot with various features like
                    moderation, music, and fun commands.
                  </p>
                </a>
              </div>
              <div className="mt-12 basis-1/4 flex-1 text-center shadow-lg p-10 rounded-xl my-10 bg-slate-500  text-white">
                <a href="https://kaomojipedia.netlify.app/" target="_blank">
                  <Image src={project2} />
                  <h3 className="text-xl py-2">Kaomoji Pedia</h3>
                  <p>
                    Kaomoji Pedia is a website that allows users to copy
                    kaomojis by just clicking on them.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
}
