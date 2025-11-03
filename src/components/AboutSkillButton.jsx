import ChevronDown from '../assets/chevron-down.svg?react'

export default function AboutSkillButton(props) {

    const Icon = props.skill.icon

    return (
        <button className="about-skill-button" onClick={props.onClick}>
            <span className="title">
                <Icon />
                <h3 className="text-primary">{props.skill.label}</h3>
            </span>
            <span className={`chevron text-primary ${props.open ? 'open' : 'closed'}`}><ChevronDown /></span>
        </button>
    )
}