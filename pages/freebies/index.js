import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import Header from 'components/headerComponent/Header'
import HeadTag from 'components/headTagComponent/HeadTag';
import React from 'react'
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import Link from 'next/link';


 const Freebies = () => {
    const [readMore, setReadMore] =useState(false)
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
const readMoreBtn = ()=>{
    if(readMore === false){
        setReadMore(true)
    }else{
        setReadMore(false)
    }
}
    const headeTitle =
    "Freebies | Freekaamaal";
  return (
    <>
    <HeadTag headeTitle={headeTitle} />
    <Header  />
    <div className='topFreebise_page' style={{paddingTop:"57px"}}>
     <div className='freebise_top_box'>
        <h3 className='freebise_top_box_heading'>Top Freebies Of The Week</h3>
        <p className='freebise_top_box_p' style={{ height:readMore === true ? "100%":"40px" }}>Get The Latest Free Stuff In India, Free Samples. Discount Codes, Complimentary Subscriptions, Price Error And More. Finding Free Products And Samples Is No Longer Time-Consuming</p>
        <div className='freebise_top_box_button'>
            <Button onClick={readMoreBtn} variant="text" type="button">{readMore === true ? "Close":"Read More"} </Button>
        </div>
     </div>
     <div className='accordion_section'>
      <Accordion expanded={expanded === 'panel1'} sx={{marginBottom:"10px"}} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div style={{ width: '24%', flexShrink: 0 }}>
           <Image src="https://images.freekaamaal.com/store-images/4.jpg" alt="" width={60} height={40} />
          </div>
         <div style={{ color: 'text.secondary' }}>
            <h4 className=''>Paytm Valentines Loot : Collect 9 Cards & Get Rs.140 Paytm Cash</h4>
         </div>
        </AccordionSummary>
        <AccordionDetails>
        <p className='accordion_section_bottom_p'>PayTM Is Back With New Offer Called “PayTM Valentines Cashback Offer” For Their Users Again. Here All You Need To Do Is To Collect Cards And You Can Win Free PayTM Cash Using This Offer.Read Full Post Below And Get To Know Each And Everything Regarding PayTM Valentine’s Offer.</p>
        <div className='' style={{padding:"5px 0 "}}>
            <Link  href="#">
            <Button variant="contained" size="small" sx={{ color:"#fff"}}>Shop Now</Button>
            </Link>
            </div>
        </AccordionDetails>
      </Accordion>
   
    </div>
  

    </div>
    <style jsx>{`
    .topFreebise_page{
        padding:4px;
    }
    .freebise_top_box_p{
        height: 37px;
    overflow: hidden;
    font-size: 15px;
    }
    .freebise_top_box{
        text-align: center;
    padding-top: 20px;
    }
    .freebise_top_box h3{
        font-size: 21px;
    padding: 0px 0 10px;
    }
    .accordion_section{
      padding-top: 20px;
    }
    .accordion_section p  {
      font-size: 13px;
    line-height: 20px;
    padding-top: 10px;
    }
    .accordion_section p.accordion_section_bottom_p{
      padding-top: 0px;
    }
    .accordion_section h4{
      font-size: 15px;
    color: #040404;
    font-weight: 600;
    margin-top: 6px;
    text-align: justify;
    margin-bottom: 0;
    }
    `}</style>
    </>
    
  )
}


export default Freebies