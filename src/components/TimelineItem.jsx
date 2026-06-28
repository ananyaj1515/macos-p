import { CalendarDays, MapPin, Code2 } from "lucide-react"

const toRgba = (hex, alpha) => {
  const normalized = hex.replace(/[^0-9a-f]/gi, "")
  const value = normalized.length === 3
    ? normalized.split("").map((char) => char + char).join("")
    : normalized

  const r = parseInt(value.slice(0, 2), 16)
  const g = parseInt(value.slice(2, 4), 16)
  const b = parseInt(value.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const TimelineItem = ({
  year,
  title,
  company,
  location,
  description,
  highlights = [],
  color = "#60a5fa",
  stack = [],
}) => {
  const cardBackground = toRgba(color, 0.12)


  return (
    <li className="timeline-item">
      <span className="timeline-dot" aria-hidden="true" style={{ backgroundColor: color }} />
      <div
        className="timeline-content"
        style={{
            borderLeft: `3px solid ${color}`,
        }}
        >
        <div className="timeline-header">
          <div>
            <h3 className="timeline-title">{title}</h3>
            <p className="timeline-company">{company}</p>
          </div>
        </div>

        <div className="timeline-meta-row">
          {location && (
            <span className="timeline-meta-pill">
              <MapPin size={14} />
              {location}
            </span>
          )}
          {year && (
            <span className="timeline-meta-pill">
              <CalendarDays size={14} />
              {year}
            </span>
          )}
        </div>

        <p className="timeline-description">{description}</p>

        {highlights.length > 0 && (
          <ul className="timeline-highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}

        {stack.length > 0 && (
          <div className="timeline-stack">
           <div className="timeline-stack-label">
              <Code2 size={16} />
              Tech stack
            </div>
            <div className="stack-list">
              {stack.map((tool) => (
                <span key={tool} className="stack-pill" style={{ borderColor: toRgba(color, 0.35), }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </li>
  )
}

export default TimelineItem
