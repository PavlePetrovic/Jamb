import Table from "./components/Table/Table";
import Header from "./components/Header/Header";
import styles from './App.module.scss'
import RandomNumberGen from "./components/RandomNumberGen";

function App() {
  return (
    <>
    <Header />
    <div className={styles.App}>
      <Table />
      <RandomNumberGen />
    </div>
    </>
  );
}

export default App;
