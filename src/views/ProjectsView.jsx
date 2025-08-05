import Header from "../components/Header"
import Footer from "../components/Footer"
import Project from "../components/Project"

const filters = [
    "All", "UX", "UI", "Web Design", "App Design", "Front-end", "Back-end", "Graphic Design"
]



export default function ProjectsView() {

    const filterButtons = filters.map(filter => {
        return <label key={filter} htmlFor={`projects-${filter}`}>
            <input className="" id={`projects-${filter}`} type="radio" name="projects-filter" value={filter} defaultChecked={filter==="All" ? true : false}/>
            {filter}
            </label>
    })
    return (
        <>
            <Header 
                section="projects"
            />
            <div className="background-gradient"></div>
            <main className="projects-view">
                <h1 className="heading-large">Explore my work.</h1>
                <div className="projects-filters">
                    {filterButtons}
                </div>
                <Project />
            </main>
            <Footer />
        </>
    )
}