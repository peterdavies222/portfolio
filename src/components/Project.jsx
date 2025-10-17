import Tag from "./Tag"
import ProjectInfo from "./ProjectInfo"
import React from 'react'
// import ReactDOM from "react-dom"
import { createPortal } from "react-dom"

export default function Project({project}) {
    const [isExpanded, setIsExpanded] = React.useState(false)
    function projectExpand() {
        setIsExpanded(true)
        // const closeButton = document.querySelector('.project__close-button')
        // closeButton.setAttribute('tabindex', '0')
    }

    const tagEls = []
    for(let i = 0; i < 3; i++) {
        let tag = <Tag label={project.tags[i]} key={i}/>
        tagEls.push(tag)
    }
    if(project.tags.length > 3) {
        let remainder = project.tags.length - 3
        let tag = <Tag label={"+" + remainder} key="4"/>
        tagEls.push(tag)
    }
    

    const portalRoot = document.getElementById('portal-root')


    if(project.project != 'armband') return(
        <>
            <article className="project">
                <div className="project-image-container">
                    <img className={`back-image ${project.backImage.type}`} src={project.backImage.source} alt={project.backImage.alt} />
                    <img className={`front-image ${project.frontImage.type}`} src={project.frontImage.source} alt={project.frontImage.alt} />
                </div>
                <div className="project-information">
                    <ul className="tags">
                        {tagEls}
                    </ul>
                    <h3 className="text-primary">{project.title}</h3>
                    <p className="text-primary">{project.description}</p>
                    <div>
                        <button className="project-expand" onClick={projectExpand}>View case study</button>
                        {project.link && <a className="visit-site" href={project.link}>Visit site</a>}
                    </div>
                </div>
            </article>
            {isExpanded ? 
                createPortal(
                    <ProjectInfo 
                    setIsExpanded={setIsExpanded}
                    isExpanded={isExpanded}
                    project={project}
                    />,
                    portalRoot
                ):
                null
            }
        </>
    ) 
    else return (
        <>
            <article className="project">
                <div className="project-image-container">
                    <img className="armband-image" src={project.mainImage.image} alt={project.mainImage.alt} />
                </div>
                <div className="project-information">
                    <ul className="tags">
                        {tagEls}
                    </ul>
                    <h3 className="text-primary">{project.title}</h3>
                    <p className="text-primary">{project.description}</p>
                    <div>
                        <button className="project-expand" onClick={projectExpand}>View case study</button>
                        {project.link && <a className="visit-site" href={project.link}>Visit site</a>}
                    </div>
                </div>
            </article>
            {isExpanded ? 
                createPortal(
                    <ProjectInfo 
                    setIsExpanded={setIsExpanded}
                    isExpanded={isExpanded}
                    project={project}
                    />,
                    portalRoot
                ):
                null
            }
        </>
    )
}