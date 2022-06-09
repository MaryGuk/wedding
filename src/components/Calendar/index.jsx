import Dates from "./Dates";
import s from "./index.module.css";

function Calendar() {
  return (
    <div className={s.calendar}>
      <Dates />
    </div>
  );
}

export default Calendar;
