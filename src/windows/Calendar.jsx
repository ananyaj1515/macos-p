import { WindowControls } from "#components"
import WindowWrapper from "#components/hoc/WindowWrapper"

const Calendar = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="calendar"/>
                <h2>Timeline</h2>
            </div>
            <div className="calendar-body">
               
              
            </div>
        </>
    )
}

const CalendarWindow = WindowWrapper(Calendar, 'calendar')
export default CalendarWindow