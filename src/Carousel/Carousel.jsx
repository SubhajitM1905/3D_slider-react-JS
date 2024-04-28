import React from 'react'



import corner1 from './image/img.gif'
import corner2 from './image/7kvp.gif'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './Carousel.css'

const slider = [
    {
        title: "MUSIC FOR MEDITATION",
        description: "Music meditation involves focusing your attention and awarness on your breath as you meditate and listen to music.",
        url: "https://i.ytimg.com/vi/fqi086CIAOo/maxresdefault.jpg",
        link:"https://youtu.be/5jca-sWgemI?si=HRz2dWXY7gzvbP2L"
        
      },
      {
        title: "EXERCISES",
        description: "Regular physical activity can improve your muscle strength and boost your endurance. Exercise sends oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently.",
        url: "https://static.toiimg.com/photo/92102052.cms",
        link:"https://www.stylecraze.com/articles/effective-morning-exercises-for-weight-loss/"
      },
      {
        title: "STRESS RELEASE",
        description: "If you get stressed out frequently, however, the stress response can become constant and cause ongoing harm, including chronic inflammation — the persistent activation of the immune system, which sharply raises the risks for many diseases such as dementia, heart disease, and stroke.",
        url: "https://www.netmeds.com/images/cms/wysiwyg/blog/Post/2018/11/Millennial_stress_898.jpg",
        link:"https://www.youtube.com/watch?v=FjgLLaKChNM"
      },
    
      {
        title: "YOGA",
        description: "Yoga is a mind and body practice that can build strength and flexibility. It may also help manage pain and reduce stress. Various styles of yoga combine physical postures, breathing techniques, and meditation.",
        url: "https://baysport.com/blog/wp-content/uploads/2019/07/backlit-beach-dawn-dusk-588561-1.jpg",
        link: "https://www.youtube.com/watch?v=s0gKAQ2S7Mw"
      },
      {
        title: "SOOTHING MUSIC",
        description: "Unlike loud noise, pleasing music can help elicit the relaxation response. Music therapy can be very powerful for healing, and it is used in medical settings for everything from cancer treatment to recovering from COVID-19, Dr. Ramchandani says.",
        url: "https://images.squarespace-cdn.com/content/v1/579ae76ecd0f686221847371/1633417967720-W3S241RCD9WB46L60XGU/music+quotes.png?format=750w",
        link:"https://www.youtube.com/watch?v=W7mameo-mA0&t=8s"
      },
]

const Carousel = () => {
  return (
    <div className='carousel'>
        <div>
            <div className='carousel-content'>
                <span>discover</span>
                <h1>HEAVEN OF MEDITATION</h1>
                <hr />
                <p>We’re all looking to lead happy, fulfilling lives. Most of us look to external sources for our happiness – relationships, material circumstances, recognition, etc. This may be effective when things are going our way.</p>
                <a href="https://subhamstar.github.io/timer/" className='slider-btn'>EXERCISE TIMER</a>
            </div>
        </div>

        <Swiper 
        className='myswiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
        }}
        loop={true}
        pagination={{clickable: true}}

        autoplay={{
            delay: 5000,
            disableOnInteraction: false
        }}
        breakpoints={{
            640: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            },
            1560: {
                slidesPerView: 3
            },
        }}
        
        >
            {
                slider.map(data => (
                    <SwiperSlide style={{ backgroundImage: `url(${data.url})` }} className="myswiper-slider">
                        <div>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                            <a href={`${data.link}`} target="_blank" className='slider-btn'>explore</a>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>

        <img src={corner1} alt="bg image" className='corner1' />
        <img src={corner2} alt="bg image" className='corner2' />
    </div>
  )
}

export default Carousel