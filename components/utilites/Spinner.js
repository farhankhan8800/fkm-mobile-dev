
import React from 'react'

const Spinner = () => {
  return (
    <>
     <div className='spinner_page'>
     <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    <style >{`
    .spinner_page{
        width: 90%;
        margin: auto;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .lds-ring {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 50px;
      height: 50px;
      margin: 8px;
      border: 6px solid transparent;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color:var(--main-color) transparent transparent transparent
    }
      .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
      }
      .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
      }
      .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
      }
      @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

    `}</style>
    </>
   
  )
}


export default Spinner