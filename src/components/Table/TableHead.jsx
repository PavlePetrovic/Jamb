import { BsArrowsExpand, BsArrowBarDown, BsArrowBarUp } from 'react-icons/bs'
import { TbLetterN, TbLetterO, TbLetterR } from 'react-icons/tb'
import { FaDiceD6 } from 'react-icons/fa'

import styles from './TableHead.module.scss'

const TableHead = () => {
  return (
   <>
      <tr>
        <th>
          <div className={styles['th-aligner']}>
            <FaDiceD6 />
          </div>
        </th>
        <th>
          <div className={styles['th-aligner']}>
            <BsArrowBarDown />
          </div>
        </th>
        <th>
          <div className={styles['th-aligner']}>
            <BsArrowsExpand />
          </div>
        </th>
        <th>
          <div className={styles['th-aligner']}>
            <BsArrowBarUp />  
          </div>
        </th>
        <th>
          <div className={styles['th-aligner']}>
            <TbLetterN />
          </div>
        </th>
        <th>
          <div className={styles['th-aligner']}>
            <TbLetterO />
          </div>
        </th>
        <th>
          <div className={styles['th-aligner']}>
            <TbLetterR />
          </div>
        </th>
      </tr>
   </>
  )
}

export default TableHead