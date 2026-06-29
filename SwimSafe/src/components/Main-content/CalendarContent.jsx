import "./calendarcontent.css"

function CalendarContent(){
  return (
    <div className="calendar">
    <iframe
      src="https://calendar.google.com/calendar/embed?src=eshmeetsingh2005%40gmail.com&ctz=Asia%2FKolkata"
      style={{
        border: 0,
        width: "90%",
        height: "600px",
      }}
      frameBorder="0"
      scrolling="no"
      title="Google Calendar"
    />
    </div>
  );
}

export default CalendarContent;