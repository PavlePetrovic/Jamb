import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tableActions } from '../store/table-slice'

const styleObjP = {
   marginTop: '35px',
   marginBottom: '5px',
   fontSize: '25px'
}

const styleObjD = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center'
}

const RandomNumberGen = () => {
   const dispatch = useDispatch()

   const [number, setNumber] = useState(2)

   const getRandomNumberHandler = () => {
      const newNum = Math.floor(Math.random() * 17) + 1
      setNumber(newNum)
      dispatch(tableActions.getDicesNumer(newNum))
   }

  return (
    <div style={styleObjD}>
      <p style={styleObjP}>{number}</p>
      <button onClick={getRandomNumberHandler}>Get Number</button>
    </div>
  )
}

export default RandomNumberGen