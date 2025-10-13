export default function IterationEl({iterationItem}) {
    return (
        <figure className="iteration__module">
            <img src={iterationItem.image} alt={iterationItem.alt} />
            <figcaption>{iterationItem.caption && <span>Version {iterationItem.version}: </span>}{iterationItem.caption}</figcaption>
        </figure>
    )
}