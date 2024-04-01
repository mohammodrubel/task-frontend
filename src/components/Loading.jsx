import React from 'react'
import {ScaleLoader} from 'react-spinners'

function Loading() {
  return (
    <div style={{width:"80vh",height:'80vh',display:'flex',justifyContent:'center'}}><ScaleLoader color="#FEFEFE" /></div>
  )
}

export default Loading