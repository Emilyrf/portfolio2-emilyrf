import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <section className="hero min-h-screen " id="about">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/assets/myavatar.jpeg" alt="Emily" className="w-80 h-80 rounded-full shadow-2xl" />
        <div>
          <p> Hello world! I am</p>
          <h1 className="text-5xl text-primary font-bold">Emily R. Ferreira Front-End development</h1>
          <p className="py-6">student at Noroff and this is my portfolio.</p>
          <a
            href="https://www.linkedin.com/in/emily-rego-ferreira/"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-btn  text-info mr-3"
          >
            Linked in <FaLinkedin />
          </a>
          <a
            href="https://github.com/Emilyrf"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-btn text-secondary"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </div>
    </section>
  )
}