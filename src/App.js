import Table from "./components/Table/Table";
import Header from "./components/Header/Header";
import styles from './App.module.scss'
import Dice from "./components/Dice/Dice";

function App() {
  return (
    <>
    <Header />
    <div className={styles.App}>
      <Table />
      <Dice />
    </div>
    </>
  );
}

export default App;
