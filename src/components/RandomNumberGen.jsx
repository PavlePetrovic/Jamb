import React from 'react'

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

  return (
    <div style={styleObjD}>
      <p style={styleObjP}>20</p>
      <button>Get Number</button>
    </div>
  )
}

export default RandomNumberGen