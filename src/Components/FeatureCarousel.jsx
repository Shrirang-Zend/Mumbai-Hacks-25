// src/Components/FeatureCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './FeatureCarousel.css';

const slides = [
  {
    id: 1,
    tag: 'OUR INTEL',
    title: 'SITUATION',
    copy: 'Turns raw reports, social noise, and official feeds into a live crisis picture your team can trust.',
    cta: 'View Intelligence Hub',
    image: 'https://i.ibb.co/TMkmLNGw/26425.jpg', // swap later to /images/features/...
  },
  {
    id: 2,
    tag: 'IMPACT VIEW',
    title: 'MAPS',
    copy: 'Heatmaps crowdsourced reports and asset locations so commanders see where to move first.',
    cta: 'Explore Maps',
    image: 'https://i.ibb.co/VWGwrr6B/641.jpg',
  },
  {
    id: 3,
    tag: 'RESPONSE BRAIN',
    title: 'MESSAGES',
    copy: 'Drafts, tests, and routes clear updates across SMS, social, and mobile—tuned for urgency and empathy.',
    cta: 'Open Message Engine',
    image: 'https://i.ibb.co/nsM9MSZZ/129770.jpg',
  },
  {
    id: 4,
    tag: 'FROM THE FIELD',
    title: 'REPORTERS',
    copy: 'Eye‑witness accounts plus AI verification turn communities into a real‑time rumor radar.',
    cta: 'See Crowd Reports',
    image: 'https://i.ibb.co/TMkmLNGw/26425.jpg',
  },
  {
    id: 5,
    tag: 'HUMAN FIRST',
    title: 'CHECKPOINTS',
    copy: 'Family Bridge automates welfare checks while offline modes keep responders connected.',
    cta: 'Protect People',
    image: 'https://i.ibb.co/VWGwrr6B/641.jpg',
  },
  {
    id: 6,
    tag: 'PRACTICE MODE',
    title: 'SANDBOX',
    copy: 'Run drills on hypothetical disasters so teams and AI are ready before anything goes live.',
    cta: 'Run a Simulation',
    image: 'https://i.ibb.co/nsM9MSZZ/129770.jpg',
  },
];

const FeatureCarousel = () => {
  return (
    <section className="creative-fullpage--slider">
      <div className="banner-horizental">
        <Swiper
          className="swiper-container-h"
          modules={[Navigation, Pagination, Parallax, Keyboard, Autoplay]}
          direction="horizontal"
          effect="slide"
          speed={1600}
          loop={true}
          parallax={true}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          simulateTouch={true}
          grabCursor={true}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            type: 'progressbar',
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slider-inner" data-swiper-parallax="100">
                <img src={slide.image} alt={slide.title} />
                <div className="swiper-content" data-swiper-parallax="2000">
                  <div className="title-area">
                    {slide.tag && <p className="tag">{slide.tag}</p>}
                    <span className="title">{slide.title}</span>
                  </div>
                  <p className="disc">{slide.copy}</p>
                  <div className="creative-btn--wrap">
                    <button className="creative-slide--btn" type="button">
                      <div className="creative-btn--circle">
                        <div className="circle">
                          <div className="circle-fill" />
                          <svg viewBox="0 0 50 50" className="circle-outline">
                            <circle cx="25" cy="25" r="23" />
                          </svg>
                          <div className="circle-icon">
                            <svg viewBox="0 0 12 10" className="icon-arrow">
                              <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="creative-btn--label">
                        <div className="creative-btn__text">{slide.cta}</div>
                        <div className="creative-btn__border" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-wrapper creative-button--wrapper">
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>

        <div className="slider-pagination-area">
          <h5 className="slide-range one">01</h5>
          <div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal" />
          <h5 className="slide-range three">
            {String(slides.length).padStart(2, '0')}
          </h5>
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;
