export default function PlanningEl({planningItem}) {
    const images = planningItem.images.map((item, i) => {
        return (
            <img key={i} src={item.image} alt={item.alt} />
        )
    })
    
    return (
        <figure className="planning__module">
            <div className="planning__images">{images}</div>
            <figcaption>{planningItem.caption}</figcaption>
        </figure>
    )
}