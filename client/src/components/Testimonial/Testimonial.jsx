import React from 'react';
import './Testimonial.css';
import Tdata from './Testimonial.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faQuoteLeft ,faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function Testimonial(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
      };

    return(
        <div className='main-card  mt-2'> 

        <div className='flex justify-around'>
            <h1 className='text-3xl font-serif text-slate-800'>Just ask our well-rested customers</h1>
            <h1 className='border-[1px] border-pink-500 w-[50%]  h-0 mt-6 -ml-40' ></h1>
           
        </div>

        <div className='flex gap-5'>
            
        </div>
       

               
                                {/* This is second div*/}


        <div className='mt-10 px-20 justify-between'  >
        <Slider {...settings}  >

            {
                Tdata.map((item,key)=>{
                    return(
                        <div className='review-card w-3/4'>

                            <div className= 'bg-indigo-400 rounded-t-xl justify-center items-center flex  h-56' >
                                <img src={item.image} alt=""  className='w-40 h-40 rounded-full'/>  
                            </div>

                            <div className='justify-center items-center flex'>
                            <FontAwesomeIcon icon={faStar}  className='text-yellow-400'/>
                            <FontAwesomeIcon icon={faStar}  className='text-yellow-400'/>
                            <FontAwesomeIcon icon={faStar}  className='text-yellow-400'/>
                            <FontAwesomeIcon icon={faStar}  className='text-yellow-400'/>
                            <FontAwesomeIcon icon={faStar}  className='text-yellow-400'/>
                            </div>

                            <div className='flex flex-col justify-center items-center gap-4 p-4'>
                            

                                <p className='text-2xl'>{item.name}</p>
                                <FontAwesomeIcon icon={faQuoteLeft} className='-ml-60 text-gray-700' />
                                <p className='text-yellow-700'>{item.review}</p>
                                <FontAwesomeIcon icon={faQuoteRight} className='-mr-56  text-gray-700' />
                                
                            </div>
                            
                                
                         



                        </div>
                    )
                })
            }

        </Slider>
             
        </div>

        



           
        </div>
    )
}


export default Testimonial;