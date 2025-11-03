export default function AboutSkillTag(props) {

    let Icon
    if(props.icon) {
        Icon = props.icon
    }

    return (
        <div 
            aria-hidden={`${props.hidden}`}
            className="about-skill-tag">
                {props.icon && <span className="icon-container"><Icon /></span>}
                <span>{props.label}</span>
        </div>
    )
}