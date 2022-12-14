import Table from "./components/Table/Table";
import Header from "./components/Header/Header";
import styles from './App.module.scss'
import RandomNumberGen from "./components/RandomNumberGen";
import Dice from "./components/Dice/Dice";

function App() {
  return (
    <>
    <Header />
    <div className={styles.App}>
      <Table />
      <RandomNumberGen />
      <Dice />
    </div>
    </>
  );
}

export default App;
