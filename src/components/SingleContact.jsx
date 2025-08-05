export default function SingleContact(props) {
    return (
        <div className="contact">
            <img src={props.icon} alt={props.alt} />
            <a className="contact-tag" href={props.href}>{props.tag}</a>
        </div>
    )
}