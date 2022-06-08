import s from "./Dates.module.css";

function Dates() {
  return (
    <div className={s.dateWeek}>
      {Array.from({ length: 30 }).map((_, idx) => (
        <div>{idx + 1}</div>
      ))}
    </div>
  );
}

export default Dates;
