export default function IterationEl({iterationItem, order}) {
    return (
        <figure className="iteration__module">
            <img src={iterationItem.image} alt={iterationItem.alt} />
            <figcaption><span>Version {order}: </span>{iterationItem.caption}</figcaption>
        </figure>
    )
}