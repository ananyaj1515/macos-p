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

const isLightColor = (hex) => {
  const normalized = hex.replace(/[^0-9a-f]/gi, "")
  const value = normalized.length === 3
    ? normalized.split("").map((char) => char + char).join("")
    : normalized

  const r = parseInt(value.slice(0, 2), 16)
  const g = parseInt(value.slice(2, 4), 16)
  const b = parseInt(value.slice(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.7
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
  const textColor = isLightColor(color) ? "#111827" : "#0f172a"

  return (
    <li className="timeline-item">
      <span className="timeline-dot" aria-hidden="true" style={{ backgroundColor: color }} />
      <div className="timeline-content" style={{ borderColor: color, backgroundColor: cardBackground, color: textColor }}>
        <div className="timeline-header">
          <div>
            <h3 className="timeline-title">{title}</h3>
            <p className="timeline-company">{company}</p>
          </div>
        </div>

        <div className="timeline-meta-row">
          {location && (
            <span className="timeline-meta-pill" style={{ borderColor: toRgba(color, 0.25), backgroundColor: toRgba(color, 0.08) }}>
              <MapPin size={14} />
              {location}
            </span>
          )}
          {year && (
            <span className="timeline-meta-pill" style={{ borderColor: toRgba(color, 0.25), backgroundColor: toRgba(color, 0.08) }}>
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
            <div className="timeline-stack-label" style={{ color }}>
              <Code2 size={16} />
              Tech stack
            </div>
            <div className="stack-list">
              {stack.map((tool) => (
                <span key={tool} className="stack-pill" style={{ borderColor: toRgba(color, 0.5), color: textColor }}>
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
