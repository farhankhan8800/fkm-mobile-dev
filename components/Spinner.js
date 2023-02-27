import { CircularProgress } from '@mui/material'
import React from 'react'

const Spinner = () => {
  return (
    <>
     <div className='spinner_page'>
        <CircularProgress />
    </div>
    <style jsx>{`
    .spinner_page{
        width: 90%;
        margin: auto;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `}</style>
    </>
   
  )
}


export default Spinner