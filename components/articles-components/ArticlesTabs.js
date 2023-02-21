import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { BsFillEyeFill } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
  
  const Tab = styled(TabUnstyled)`
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    width: 100%;
    padding: 10px 12px;
    margin: 6px 6px;
    border: none;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    letter-spacing: 1px;

    &:hover {
      background-color: #dfb198;
      color: #fff;
    }
  
    &:focus {
      color: #fff;
      outline: 1px solid #f27935;
    }
  
    &.${tabUnstyledClasses.selected} {
      background-color: #fff;
      color: #f27935;
      border:1px solid #f27935;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
  
  const TabPanel = styled(TabPanelUnstyled)(
    ({ theme }) => `
    width: 100%;
    font-size: 0.875rem;
    padding: 20px 12px;
    border-radius: 12px;
   
    `,
  );
  
  const TabsList = styled(TabsListUnstyled)(
    ({ theme }) => `
    min-width: 400px;
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    color:#fff;
    overflow-x: scroll;
    `,
  );
  

 const ArticlesTabs = ({all_articles,lodeMoreData,changeOption,nodata}) => {

  const [all_articles_data, setAll_articles_data] = useState()

    useEffect(()=>{
      setAll_articles_data(all_articles)
    },[all_articles])

  //  console.log(all_articles_data)

  return (
    <>
     <TabsUnstyled defaultValue={0}>
    <TabsList>
      <Tab onClick={()=>changeOption("all")}>All</Tab>
      <Tab onClick={()=>changeOption("fashion-accessories-offers")}>Fashion</Tab>
      <Tab onClick={()=>changeOption("food-drink-offers")}>Food</Tab>
      <Tab onClick={()=>changeOption("electronics-offers")}>Electronic</Tab>
      <Tab onClick={()=>changeOption("entertainment-offers")}>Entertainment</Tab>
      <Tab onClick={()=>changeOption("health-beauty-personal-care-offers")}>Health&nbsp;&&nbsp;Beauity</Tab>
    
    </TabsList>
    <TabPanel value={0}>
    <div className="most_populr_list">
      {
        all_articles_data && all_articles_data.map((item,i)=>{
           return(<>
           <div className="most_populr_item" key={i}>
                <div className="most_populr_item_img">
                  <Image
                    style={{ borderRadius: "5px" }}
                    src={item.article_image}
                    alt=""
                    height={80}
                    width={70}
                  />
                </div>
                <div style={{ paddingLeft: " 14px" }}>
                  <h3>
                   {item.title}
                  </h3>
                  <div className="main_articels_details">
                    <div className="main_articels_details_ico">
                      <p>
                        {" "}
                        <BiTime /> <span>{item.update_time}</span>
                      </p>
                      <p>
                        {" "}
                        <BsFillEyeFill /> <span>{item.author}</span>
                      </p>
                    </div>
                    <div>
                      <Link href={`${item.slug_url}`}>
                      <Button
                        variant="text"
                        sx={{ fontWeight: "600", letterSpacing: "1px",fontSize:"13px" }}
                      >
                        Read Now
                      </Button>
                      </Link>
                     
                    </div>
                  </div>
                </div>
              </div>
           
           </>)
        })
      }
              
        <div style={{textAlign:"center"}}>
          {
            nodata ?  <Typography fontSize="20px">NO Data</Typography> : <Button onClick={lodeMoreData} variant="outlined">More Data</Button>
          }
       
        </div>
             
            </div>
    </TabPanel>
    <TabPanel value={1}>
    <div className="most_populr_list">
      {
        all_articles_data && all_articles_data.map((item,i)=>{
           return(<>
           <div className="most_populr_item" key={i}>
                <div className="most_populr_item_img">
                  <Image
                    style={{ borderRadius: "5px" }}
                    src={item.article_image}
                    alt=""
                    height={80}
                    width={70}
                  />
                </div>
                <div style={{ paddingLeft: " 14px" }}>
                  <h3>
                   {item.title}
                  </h3>
                  <div className="main_articels_details">
                    <div className="main_articels_details_ico">
                      <p>
                        {" "}
                        <BiTime /> <span>{item.update_time}</span>
                      </p>
                      <p>
                        {" "}
                        <BsFillEyeFill /> <span>{item.author}</span>
                      </p>
                    </div>
                    <div>
                      <Link href={`/articles/:${item.slug_url}`}>
                      <Button
                        variant="text"
                        sx={{ fontWeight: "600", letterSpacing: "1px",fontSize:"13px" }}
                      >
                        Read Now
                      </Button>
                      </Link>
                     
                    </div>
                  </div>
                </div>
              </div>
           
           </>)
        })
      }
              
        <div style={{textAlign:"center"}}>
          {
             nodata ?  <Typography fontSize="20px">No Data</Typography> : <Button onClick={lodeMoreData} variant="outlined">More Data</Button>
          }
        </div>
             
            </div>
    </TabPanel>
    <TabPanel value={2}>
    <div className="most_populr_list">
      {
        all_articles_data && all_articles_data.map((item,i)=>{
           return(<>
           <div className="most_populr_item" key={i}>
                <div className="most_populr_item_img">
                  <Image
                    style={{ borderRadius: "5px" }}
                    src={item.article_image}
                    alt=""
                    height={80}
                    width={70}
                  />
                </div>
                <div style={{ paddingLeft: " 14px" }}>
                  <h3>
                   {item.title}
                  </h3>
                  <div className="main_articels_details">
                    <div className="main_articels_details_ico">
                      <p>
                        {" "}
                        <BiTime /> <span>{item.update_time}</span>
                      </p>
                      <p>
                        {" "}
                        <BsFillEyeFill /> <span>{item.author}</span>
                      </p>
                    </div>
                    <div>
                      <Link href={`/articles/${item.slug_url}`}>
                      <Button
                        variant="text"
                        sx={{ fontWeight: "600", letterSpacing: "1px",fontSize:"13px" }}
                      >
                        Read Now
                      </Button>
                      </Link>
                     
                    </div>
                  </div>
                </div>
              </div>
           
           </>)
        })
      }
              
        <div style={{textAlign:"center"}}>
        {
            nodata ?  <Typography fontSize="20px">NO Data</Typography> : <Button onClick={lodeMoreData} variant="outlined">More Data</Button>
          }
        </div>
             
            </div>
    </TabPanel>
    <TabPanel value={3}>
    <div className="most_populr_list">
      {
        all_articles_data && all_articles_data.map((item,i)=>{
           return(<>
           <div className="most_populr_item" key={i}>
                <div className="most_populr_item_img">
                  <Image
                    style={{ borderRadius: "5px" }}
                    src={item.article_image}
                    alt=""
                    height={80}
                    width={70}
                  />
                </div>
                <div style={{ paddingLeft: " 14px" }}>
                  <h3>
                   {item.title}
                  </h3>
                  <div className="main_articels_details">
                    <div className="main_articels_details_ico">
                      <p>
                        {" "}
                        <BiTime /> <span>{item.update_time}</span>
                      </p>
                      <p>
                        {" "}
                        <BsFillEyeFill /> <span>{item.author}</span>
                      </p>
                    </div>
                    <div>
                      <Link href={item.slug_url}>
                      <Button
                        variant="text"
                        sx={{ fontWeight: "600", letterSpacing: "1px",fontSize:"13px" }}
                      >
                        Read Now
                      </Button>
                      </Link>
                     
                    </div>
                  </div>
                </div>
              </div>
           
           </>)
        })
      }
              
        <div style={{textAlign:"center"}}>
         {
            nodata ? <Typography fontSize="20px">NO Data</Typography>: <Button onClick={lodeMoreData} variant="outlined">More Data</Button>
          }
        </div>
             
            </div>
    </TabPanel>
    <TabPanel value={4}>
    <div className="most_populr_list">
      {
        all_articles_data && all_articles_data.map((item,i)=>{
           return(<>
           <div className="most_populr_item" key={i}>
                <div className="most_populr_item_img">
                  <Image
                    style={{ borderRadius: "5px" }}
                    src={item.article_image}
                    alt=""
                    height={80}
                    width={70}
                  />
                </div>
                <div style={{ paddingLeft: " 14px" }}>
                  <h3>
                   {item.title}
                  </h3>
                  <div className="main_articels_details">
                    <div className="main_articels_details_ico">
                      <p>
                        {" "}
                        <BiTime /> <span>{item.update_time}</span>
                      </p>
                      <p>
                        {" "}
                        <BsFillEyeFill /> <span>{item.author}</span>
                      </p>
                    </div>
                    <div>
                      <Link href={item.slug_url}>
                      <Button
                        variant="text"
                        sx={{ fontWeight: "600", letterSpacing: "1px",fontSize:"13px" }}
                      >
                        Read Now
                      </Button>
                      </Link>
                     
                    </div>
                  </div>
                </div>
              </div>
           
           </>)
        })
      }
              
        <div style={{textAlign:"center"}}>
          {
            nodata ?  <Typography fontSize="20px">NO Data</Typography> : <Button onClick={lodeMoreData} variant="outlined">More Data</Button>
          }
        </div>
             
            </div>
    </TabPanel>
    <TabPanel value={5}>
    <div className="most_populr_list">
      {
        all_articles_data && all_articles_data.map((item,i)=>{
           return(<>
           <div className="most_populr_item" key={i}>
                <div className="most_populr_item_img">
                  <Image
                    style={{ borderRadius: "5px" }}
                    src={item.article_image}
                    alt=""
                    height={80}
                    width={70}
                  />
                </div>
                <div style={{ paddingLeft: " 14px" }}>
                  <h3>
                   {item.title}
                  </h3>
                  <div className="main_articels_details">
                    <div className="main_articels_details_ico">
                      <p>
                        {" "}
                        <BiTime /> <span>{item.update_time}</span>
                      </p>
                      <p>
                        {" "}
                        <BsFillEyeFill /> <span>{item.author}</span>
                      </p>
                    </div>
                    <div>
                      <Link href={item.slug_url}>
                      <Button
                        variant="text"
                        sx={{ fontWeight: "600", letterSpacing: "1px",fontSize:"13px" }}
                      >
                        Read Now
                      </Button>
                      </Link>
                     
                    </div>
                  </div>
                </div>
              </div>
           
           </>)
        })
      }
              
        <div style={{textAlign:"center"}}>
         {
            nodata ?  <Typography fontSize="20px">NO Data</Typography> : <Button onClick={lodeMoreData} variant="outlined">More Data</Button>
          }
        </div>
             
            </div>
    </TabPanel>
   
  </TabsUnstyled>
  <style jsx>{`
 
  
       
        .main_articels_details {
          display: flex;
          color: #969696;
          flex-wrap:wrap;
          padding-top:10px;
          align-items: center;
          justify-content: space-between;
        }
        .main_articels_details div:first-child {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .main_articels_details div:first-child p:nth-child(2) {
          padding: 0 17px;
        }
        .main_articels_details span {
          padding: 0 5px;
        }
        .popular_section_bottom {
          padding-top: 16px;
        }
        .most_popular_title {
          letter-spacing: 1px;
          padding: 5px 0;
          font-size: 25px;
        }
        .most_populr_item {
          padding: 13px;
          border: 1px solid #e0d2d2;
          -webkit-border-radius: 8px;
          -moz-border-radius: 8px;
          border-radius: 8px;
          background: #ece4e4;
          display: flex;
          margin-bottom: 20px;
          align-items: center;
          justify-content: space-between;
        }
        .main_articels_details div.main_articels_details_ico:first-child {
         
          justify-content: flex-start;
        }
        .most_populr_item h3 {
          font-size: 15px;
          color: #3c3c3c;
          text-transform: capitalize;
          word-spacing: 1px;
        }
    
    `}</style>
    </>
   
  )
}

export default ArticlesTabs
