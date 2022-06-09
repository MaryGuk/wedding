import Dates from "./Dates";
import s from "./index.module.css";

function Calendar({ weddingDate }) {
  return (
    <div className={s.calendar}>
      <Dates weddingDate={weddingDate} />
    </div>
  );
}

export default Calendar;
