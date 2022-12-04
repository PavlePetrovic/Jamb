import styles from './App.module.scss'
import Table from "./components/Table/Table";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
    <Header />
    <div className={styles.App}>
      <Table />
    </div>
    </>
  );
}

export default App;
