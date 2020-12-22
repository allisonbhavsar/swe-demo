import Header from "./Header";

const Calendar = (props) => {
    return (
        <div>
            <Header {...props}
                title="Calendar"
                subtitle="" />
            <h2 id="title">SWE Calendar</h2>
            <div id="calendar">
                <iframe id="calendarFrame"
                    src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=ZW5nLnVjc2QuZWR1X3Jza3F0b2FpdjZtbWs5amczanE2YmI1ajdrQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%233F51B5"
                    width="800" height="600" frameborder="0" scrolling="no" title="swe-calendar"></iframe>
            </div>
        </div>
    )
}

export default Calendar;