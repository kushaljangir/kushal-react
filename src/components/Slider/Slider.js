import React from 'react'
import "./Slider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {

    const data=[
        {
            id:1,
            username:'David',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitation maior. Placeat repellat, et totam optio. Sequi qui laborum ratione cumque tempo totam voluptatum.'
        },
        {
            id:2,
            username:'David1',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitation maior. Placeat repellat, et totam optio. Sequi qui laborum ratione cumque tempo totam voluptatum.'
        },
        {
            id:3,
            username:'David2',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitation maior. Placeat repellat, et totam optio. Sequi qui laborum ratione cumque tempo totam voluptatum.'
        },
        {
            id:4,
            username:'David3',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitation maior. Placeat repellat, et totam optio. Sequi qui laborum ratione cumque tempo totam voluptatum.'
        },
        {
            id:5,
            username:'David4',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitation maior. Placeat repellat, et totam optio. Sequi qui laborum ratione cumque tempo totam voluptatum.'
        },
        {
            id:6,
            username:'David5',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitation maior. Placeat repellat, et totam optio. Sequi qui laborum ratione cumque tempo totam voluptatum.'
        },

     ] ;
  return (
    <div>
      <div className="slid">
        <h1>Lets See What Our Valuable Students Think <br /> About Us. Their Testimonials.</h1>
      </div>

      <div className="back">
      <Swiper
      spaceBetween={20}
      slidesPerView={3}
     
    
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        {data.map( user =>(
            <SwiperSlide key={user.id} className='slider'>
                <div className='slide-content'>
                    <div className='user-img'>
                        <div className="img-back">
                        <img src="./images/testimonial-1.jpg" alt=""  className='user-photo'/>
                        </div>
                        <h5>{user.username}</h5>
                        <p>{user.testimonial}</p>
                    </div>
                </div>
            </SwiperSlide>
        ))}
     
    
    </Swiper>
      </div>
    </div>
  )
}

export default Slider
