import s from "./App.module.css";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";
import { useState } from "react";

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
    const [weddingDate, setWeddingDate] = useState(0);

    console.log(weddingDate);

    return (
      <div>
        <div className={s.pageWrapper}>
          {Array.from({ length: 12 }).map(() => <Page weddingDate={weddingDate}/>)}
        </div>
        <input className={s.input} onChange={(e) => setWeddingDate(Number(e.target.value))}/>
      </div>
    );
}

export default App;
