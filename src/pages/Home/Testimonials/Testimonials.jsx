import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <section className='my-20'>
            <SectionTitle subHeading={'What Our Client Say'} heading={'Testimonials'}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review => <SwiperSlide key={review._id}>
                <div className='mx-24 my-16 flex flex-col items-center text-center'>
                <Rating style={{ maxWidth: 150 }} value={review.rating}/>
                    <p className='my-5'>{review.details}</p>
                    <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                </div>
            </SwiperSlide> )
        }
      </Swiper>
        </section>
    );
};

export default Testimonials;