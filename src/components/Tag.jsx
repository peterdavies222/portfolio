export default function Tag(props) {
    return (
        <li className={`tag ${props.className && props.className}`}>{props.label}</li>
    )
}