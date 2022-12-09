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
          <TableRow rowType='Three' rowValue='3' />
          <TableRow rowType='Four' rowValue='4' />
          <TableRow rowType='Five' rowValue='5' />
          <TableRow rowType='Six' rowValue='6' />
          <TableRow rowType='Sum' rowValue='SUM' sum={true}/>
          <TableRow rowType='Max' rowValue='Max' />
          <TableRow rowType='Min' rowValue='Min' />
          <TableRow rowType='Sum' rowValue='SUM' sum={true}/>
          <TableRow rowType='Triling' rowValue='T' />
          <TableRow rowType='Kenta' rowValue='K' />
          <TableRow rowType='Full' rowValue='F' />
          <TableRow rowType='Poker' rowValue='P' />
          <TableRow rowType='Jamb' rowValue='J' />
          <TableRow rowType='Sum' rowValue='SUM' sum={true}/>
        </tbody>
      </table>
    </>
  )
}

export default Table