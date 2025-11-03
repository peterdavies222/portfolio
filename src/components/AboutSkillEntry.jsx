import skillsData from "../../skillsData"
import AboutSkillButton from "./AboutSkillButton"
import AboutSkillTag from './AboutSkillTag'
import { useRef, useState, useEffect } from "react"

export default function AboutSkillEntry(props) {

    const tagsRef = useRef(null)
    const [duration, setDuration] = useState(0)
    
    const [windowWidth, setWindowWidth] = useState(0)
    window.addEventListener('resize', ()=> {
        setWindowWidth(window.innerWidth)
    })

    useEffect(()=> {
        const tagsEl = tagsRef.current
        if(!tagsEl) return

        const totalWidth = tagsEl.scrollWidth
        const pixelsPerSecond = 150

        const newDuration = totalWidth / pixelsPerSecond
        setDuration(newDuration)
    }, [props.skill.tags, windowWidth])




    const skillTags = props.skill.tags.map((tag, i) => {
        return (
            <AboutSkillTag 
                label={tag.label}
                icon={tag.icon}
                key={i}
                hidden={false}
            />
        )
    })

    const skillTagsHidden = props.skill.tags.map((tag, i) => {
        return (
            <AboutSkillTag 
                label={tag.label}
                icon={tag.icon}
                key={i}
                hidden={true}
            />
        )
    })

    return (
         <div className="about-skill-entry">
            <AboutSkillButton
                skill={props.skill}
                onClick={props.onClick}
                open={props.open}
            />
            <div
                className={`skill-description ${props.open ? 'open' : 'closed'}`}
                style={{
                    maxHeight: props.open ? `${tagsRef.current.scrollHeight}px` : 0
                }}>
                    <div 
                        ref={tagsRef} 
                        className="about-skill-tags"
                        style={{animationDuration: `${duration}s`}}>
                        {skillTags}
                        {skillTagsHidden}
                        {skillTagsHidden}
                    </div>
            </div>
            {props.order < skillsData.length - 1 && <hr />}
        </div>
)
}