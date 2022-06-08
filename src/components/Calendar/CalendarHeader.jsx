import s from "./CalendarHeader.module.css";

function CalendarHeader() {
  return (
    <div className={s.days}>
      {["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"].map((day) => (
        <div className={s.day}>{day}</div>
      ))}
    </div>
  );
}

export default CalendarHeader;
