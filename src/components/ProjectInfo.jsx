import crossIcon from '../assets/cross.svg'
import Tag from './Tag'
import StrategySymbol from '../assets/strategy-symbol-light.svg?react'
import DesignSymbol from '../assets/design-symbol-light.svg?react'
import DevSymbol from '../assets/dev-symbol-light.svg?react'
import Brandmark from '../assets/main-3-light.svg?react'

export default function ProjectInfo({project, setIsExpanded, isExpanded}) {

    const closeProjectInfo = () => {
        const projectInfoModal = document.querySelector('.project__info')
        projectInfoModal.classList.remove('active')
        projectInfoModal.classList.add('inactive')
        setTimeout(()=> {
            setIsExpanded(false)
        }, 500)
    }

    const tagElsFull = project.tags.map((tag, i) => {
        return (
            <Tag key={i} label={tag} className="text-accent"/>
        )
    })

    const taskParaEls = project.task.map((task, i) => {
        return (
            <p className="text-primary" key={i}>{task}</p>
        )
    })

    return (
        <div className={`project__info ${isExpanded ? "active" : "inactive"} ${project.project}`}>
            <button onClick={closeProjectInfo} className="project__close-button">
                <img src={crossIcon} alt="close" />
            </button>
            <article className="project__article">
                <header className="project__info--header">
                    <h2 className="project__title text-primary">
                        {project.title}
                    </h2>
                    <ul className="tags">
                        {tagElsFull}
                    </ul>
                </header>
                <main>
                    {/* <div className="images">
                        <div className="image__placeholder"></div>
                        <div className="image__placeholder"></div>
                        <div className="image__placeholder"></div>
                    </div> */}
                    <div className="project__group">
                        <h3>The <span className="italic">task</span></h3>
                        <div className="project__paragraphs">
                            {taskParaEls}
                        </div>
                    </div>
                    <div className="images">
                        <div className="image__placeholder"></div>
                        <div className="image__placeholder"></div>
                        <div className="image__placeholder"></div>
                    </div>
                    <div className="project__group">
                        <h3>The <span className="italic">process</span></h3>
                        <ul className="process">
                            <li>
                                <StrategySymbol className="process__symbol"/>
                                <p className="text-primary"><strong>Strategy:</strong> {project.process.strategy}</p>
                            </li>
                            <li>
                                <DesignSymbol className="process__symbol"/>
                                <p className="text-primary"><strong>Design:</strong> {project.process.design}</p>
                            </li>
                            <li>
                                <DevSymbol className="process__symbol"/>
                                <p className="text-primary"><strong>Development:</strong> {project.process.development}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="images">
                        <div className="image__placeholder"></div>
                        <div className="image__placeholder"></div>
                        <div className="image__placeholder"></div>
                    </div>
                    <a href="mailto:hello@peterdaviesdigital.com.au">Get in touch</a>
                </main>
                <footer>
                    <div className="footer-tags">
                        <div className="footer-tag">
                            <StrategySymbol className="footer-symbol" />
                            <p>Strategy</p>
                        </div>
                        <div className="footer-tag">
                            <DesignSymbol className="footer-symbol" />
                            <p>Design</p>
                        </div>
                        <div className="footer-tag">
                            <DevSymbol className="footer-symbol" />
                            <p>Development</p>
                        </div>
                    </div>
                    <div className="footer-brandmark">
                        <Brandmark />
                    </div>
                </footer>
            </article>
            

        </div>
    )
}