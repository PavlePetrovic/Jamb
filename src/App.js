import { useDispatch, useSelector } from 'react-redux';

import styles from './App.module.scss'
import { tableActions } from './store/table-slice';
import Table from "./components/Table/Table";
import Header from "./components/Header/Header";

function App() {
  const dispatch = useDispatch()
  const workingStatus = useSelector((state) => state.tableData.isWork)

  const toggleWorkingStatus = () => {
    dispatch(tableActions.checkIsItWork())
  }

  return (
    <>
    <Header />
    <button onClick={toggleWorkingStatus}>Change</button>
    <p>{workingStatus ? 'radi' : 'ne radi'}</p>
    <div className={styles.App}>
      <Table />
    </div>
    </>
  );
}

export default App;
