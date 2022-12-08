import Table from "./components/Table/Table";
import Header from "./components/Header/Header";
import { tableActions } from './store/table-slice';
import styles from './App.module.scss'

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
