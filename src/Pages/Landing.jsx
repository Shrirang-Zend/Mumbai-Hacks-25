// src/Pages/Landing.jsx
import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LightRays from '../Components/LightRays';
import VariableProximity from '../Components/VariableProximity';
import SplitText from '../Components/SplitText';
import TextType from '../Components/TesxType';
import RotatingText from '../Components/RotatingText';
import './Landing.css';

const Landing = ({ onLoginClick }) => {
  const heroContainerRef = useRef(null);
  const [showAgentIntro, setShowAgentIntro] = useState(false);
  const [bottomAnimated, setBottomAnimated] = useState(false);
  const [showRotating, setShowRotating] = useState(false);
  const [heroDimmed, setHeroDimmed] = useState(false);

  const handleBottomTextDone = () => {
    setBottomAnimated(true);
    setShowAgentIntro(true);
  };

  // start rotating pill shortly after intro appears
  useEffect(() => {
    if (!showAgentIntro) return;
    const id = setTimeout(() => setShowRotating(true), 1500);
    return () => clearTimeout(id);
  }, [showAgentIntro]);

  // dim hero overlays when features section is in view
  useEffect(() => {
    const featuresEl = document.getElementById('features');
    if (!featuresEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHeroDimmed(entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0.25,
      }
    );

    observer.observe(featuresEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="landing-root">
      <div className="landing-bg">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ff3b5c"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      <div
        ref={heroContainerRef}
        className={`landing-hero ${heroDimmed ? 'hero-dimmed' : ''}`}
      >
        <AnimatePresence>
          {showRotating && (
            <motion.div
              className="rotating-top-left hero-fade-item"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <span className="rotating-label-static">Crisis-ready</span>{' '}
              <RotatingText
                texts={[
                  'alerts',
                  'verification',
                  'mapping',
                  'briefings',
                  'warnings',
                  'updates',
                  'insights',
                ]}
                mainClassName="rotating-pill"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="rotating-split"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <p className="badge hero-fade-item">AI Crisis Communication</p>

        <VariableProximity
          label="Crisis Agent"
          className="hero-title hero-fade-item"
          fromFontVariationSettings="'wght' 500, 'opsz' 16"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={heroContainerRef}
          radius={140}
          falloff="linear"
        />

        <p className="hero-subtitle hero-fade-item">
          Fighting misinformation with facts and empathy
        </p>

        <div className="hero-bottom-line hero-fade-item">
          {bottomAnimated ? (
            <p className="bottom-problem-text">
              During emergencies, people drown in rumors and half-truths, making it hard to know
              what's actually happening.
            </p>
          ) : (
            <SplitText
              text="During emergencies, people drown in rumors and half-truths, making it hard to know what's actually happening."
              className="bottom-problem-text"
              delay={25}
              duration={0.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0}
              rootMargin="500px"
              textAlign="left"
              onLetterAnimationComplete={handleBottomTextDone}
            />
          )}
        </div>

        {showAgentIntro && (
          <div className="agent-intro-wrapper hero-fade-item">
            <TextType
              text={[
                'Crisis Agent is your always-on AI partner for emergencies, cutting through chaos to surface clear, verified information when it matters most.',
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              initialDelay={0}
              loop={false}
              showCursor={true}
              cursorCharacter="|"
              className="agent-intro-text"
            />
          </div>
        )}

        <div className="hero-signin hero-fade-item">
          <button className="animated-button" onClick={onLoginClick}>
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
            <span className="text">SIGN IN</span>
            <span className="circle"></span>
            <svg
              viewBox="0 0 24 24"
              className="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
