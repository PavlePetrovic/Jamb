import Table from "./components/Table/Table";
import Header from "./components/Header/Header";
import styles from './App.module.scss'
import Dice from "./components/Dice/Dice";
import End from "./components/End/End";

function App() {
  return (
    <>
    <Header />
    <div className={styles.App}>
      <Table />
      <Dice />
      <End />
    </div>
    </>
  );
}

export default App;
