import styles from './Die.module.scss'

const Die = ({ num }) => {
  return (
    <div className={styles.die}>
      <p>{num}</p>
    </div>
  )
}

export default Die