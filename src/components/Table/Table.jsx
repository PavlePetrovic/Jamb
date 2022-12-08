import TableHead from './TableHead'
import TableRow from './TableRow'

import styles from './Table.module.scss'

const Table = () => {
  return (
    <>
      <table>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          <TableRow rowType='One' rowValue='1' />
          <TableRow rowType='Two' rowValue='2' />
          <TableRow rowType='Sum' rowValue='SUM' sum={true}/>
        </tbody>
      </table>
    </>
  )
}

export default Table