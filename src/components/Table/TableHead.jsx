import { TbStairsDown, TbStairsUp, TbStairs } from 'react-icons/tb'
import { FaTrash } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'
import { MdBackHand } from 'react-icons/md'
import { GiRollingDices } from 'react-icons/gi'

import styles from './TableHead.module.scss'

const TableHead = () => {
  return (
   <>
      <tr>
        <th>
          <div className={styles['th-aligner']}>
            <GiRollingDices className={styles['header-icon-logo']}/>
          </div>
        </th>
        <th>
          <div className={styles['th-aligner']}>
            <TbStairsDown className={styles['header-icon']}/>
          </div>
        </th>
        <th>
          <div className={styles['th-aligner']}>
            <TbStairs className={styles['header-icon']}/>
          </div>
        </th>
        <th>
          <div className={styles['th-aligner']}>
            <TbStairsUp className={styles['header-icon']}/>  
          </div>
        </th>
        <th>
          <div className={styles['th-aligner']}>
            <IoMdCall className={styles['header-icon']}/>
          </div>
        </th>
        <th>
          <div className={styles['th-aligner']}>
            <FaTrash className={styles['header-icon']}/>
          </div>
        </th>
        <th>
          <div className={styles['th-aligner']}>
            <MdBackHand className={styles['header-icon']}/>
          </div>
        </th>
      </tr>
   </>
  )
}

export default TableHead