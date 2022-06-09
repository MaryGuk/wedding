import s from "./App.module.css";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;
