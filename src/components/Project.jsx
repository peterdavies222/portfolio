import Tag from "./Tag"
import snorkelling from "../assets/snorkelling-hero.png"

export default function Project(props) {
    return(
        <article className="project">
            <button className="project-expand"></button>
            <div className="project-information">
                <h2>Western Australia Snorkelling</h2>
                <div className="tags">
                    <Tag label="Web design" />
                    <Tag label="UX" />
                    <Tag label="UI" />
                    <Tag label="Frontend" />
                </div>
            </div>
            <div className="project-image-container">
                <img src={snorkelling} alt="Snorkelling" />
            </div>
        </article>
    )
}