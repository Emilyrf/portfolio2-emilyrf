import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section className=" bg-base-200 p-5 min-h-screen flex flex-col justify-center items-center" id="projects">
            <h2 className="text-center font-electrolize text-4xl pb-20 text-primary textshadow">My latest projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ProjectCard
                    title="BidBud"
                    description="BidBud is an auction website where users can add items to be bid on and bid on items other users have put up for auction. It was developed for the Semester Project 2."
                    websiteLink="https://loquacious-yeot-03cf33.netlify.app"
                    githubLink="https://github.com/Emilyrf/semester-project-2-emilyrf"
                    videoSource="/src/assets/bidbud.mov"
                />
                <ProjectCard
                    title="Mercado"
                    description="Mercado is an e-commerce website that contains: Homepage , Individual product page, Cart page and Checkout success page. It was developed using React and the Noroff E-Commerce API  for the  JavaScript Frameworks course assigment."
                    websiteLink="https://frameworks2-ca-emilyrf.netlify.app"
                    githubLink="https://github.com/Emilyrf/frameworks2-ca"
                    videoSource="/src/assets/mercado.mov"
                />
                <ProjectCard
                    title="Holidaze"
                    description="Holidaze is a booking accomodation website where users can post a venue or book a stay. It was developed for Project Exam 2 using Noroff Holidaze API, React and Tailwind."
                    websiteLink="https://project-exam2-emilyrf.netlify.app"
                    githubLink="https://github.com/Emilyrf/project-exam-2"
                    videoSource="/src/assets/holidaze.mov"
                />
            </div>
        </section>
    )
}
