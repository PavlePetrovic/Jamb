import React from 'react'

import { BsArrowsExpand, BsArrowBarDown, BsArrowBarUp } from 'react-icons/bs'
import { TbLetterN, TbLetterO, TbLetterR } from 'react-icons/tb'
import { FaDiceD6 } from 'react-icons/fa'
import styles from './Table.module.scss'
import TableRow from './TableRow/TableRow'

const Table = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <div className={styles['table-th-aligner']}>
                <FaDiceD6 />
              </div>
            </th>
            <th>
              <div className={styles['table-th-aligner']}>
                <BsArrowBarDown />
              </div>
            </th>
            <th>
              <div className={styles['table-th-aligner']}>
                <BsArrowsExpand />
              </div>
            </th>
            <th>
              <div className={styles['table-th-aligner']}>
                <BsArrowBarUp />  
              </div>
            </th>
            <th>
              <div className={styles['table-th-aligner']}>
                <TbLetterN />
              </div>
            </th>
            <th>
              <div className={styles['table-th-aligner']}>
                <TbLetterO />
              </div>
            </th>
            <th>
              <div className={styles['table-th-aligner']}>
                <TbLetterR />
              </div>
            </th>
          </tr>
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