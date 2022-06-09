import s from "./App.module.css";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";
import { useState } from "react";

const DAYS_IN_MONTH = 30;

function Page({ weddingDate }) {
  return (
    <div className={s.wrapper}>
      <Header />
      <Calendar weddingDate={weddingDate} />
      <Footer />
    </div>
  );
}

function App() {
    const [weddingDate, setWeddingDate] = useState(26);

    return (
      <div>
        <div className={s.pageWrapper}>
          {Array.from({ length: 12 }).map(() => <Page weddingDate={weddingDate}/>)}
        </div>
          <div className={s.inputWrapper}>
              <div className={s.button} onClick={() => setWeddingDate((prev) => prev > 1 ? prev - 1 : prev)}>-</div>
              <input className={s.input} value={weddingDate} onChange={(e) => setWeddingDate(Number(e.target.value))}/>
              <div className={s.button} onClick={() => setWeddingDate((prev) => prev < DAYS_IN_MONTH ? prev + 1 : prev)}>+</div>
          </div>
      </div>
    );
}

export default App;
