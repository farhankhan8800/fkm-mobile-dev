import React, {useEffect, useState} from 'react';
import {BiUpArrowAlt} from 'react-icons/bi';


const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 500){
	setVisible(true)
	}
	else if (scrolled <= 500){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

useEffect(()=>{
    window.addEventListener('scroll', toggleVisible);
},[])
 

return (
    <>
    {
        visible ? <button 
        onClick={scrollToTop}
        >
        <BiUpArrowAlt />
        </button> :""
    }
   
    <style jsx>
    {`
    button{
        position: fixed;
        bottom: 50px;
        padding: 9px;
        background: #edd1d1;
        border-radius: 50%;
        font-size: 24px;
        display: flex;
        align-items: center;
        color: var(--main-color);
        justify-content: center;
        left: 6px;
       }
    `}
    </style>
    </>
	
);
}

export default ScrollButton;
