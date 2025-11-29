// src/Pages/Features.jsx
import ScrollFloat from '../Components/ScrollFloat';
import FeatureCarousel from '../Components/FeatureCarousel';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features-root">
      <ScrollFloat
        animationDuration={1.8}
        ease="back.out(1.4)"
        scrollStart="top bottom-=10%"
        scrollEnd="bottom top+=20%"
        stagger={0.02}
      >
        Crisis Features
      </ScrollFloat>

      <div className="features-carousel-wrap">
        <FeatureCarousel />
      </div>
    </section>
  );
};

export default Features;
