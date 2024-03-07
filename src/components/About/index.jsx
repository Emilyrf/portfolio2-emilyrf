import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <section className="hero min-h-screen pt-20" id="about">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/assets/myavatar.jpeg" alt="Emily" className="w-80 h-80 rounded-full shadow-2xl" />
        <div className="text-center">
          <p> Hello world! <br /> I am</p>
          <h1 className="text-5xl text-primary font-electrolize">Emily R. Ferreira</h1>
          <p className="py-6 text-xl">Four years ago, I traded the sunny shores of Brazil for the cool Nordic breeze of Norway! <br />
            Here, studying at Noroff, I embarked on a two-year Front-End development journey where I acquired the skills to proudly call myself a</p>
          <h2 className="text-5xl text-primary font-electrolize">Front-End developer.</h2>
          <p className="py-6 text-xl">Now, I showcase my latest projects here.</p>

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
