import TimelineItem from "./TimelineItem";

const TimelineSection = ({ title, items }) => {
  return (
    <section className="timeline-section">
      <h2 className="timeline-section-title">{title}</h2>
      <ul className="timeline-list">
        {items.map((item) => (
          <TimelineItem key={`${item.year}-${item.title}`} {...item} />
        ))}
      </ul>
    </section>
  )
}

export default TimelineSection
