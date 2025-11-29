import { useEffect } from 'react';
import './GovLogin.css';

const GovLogin = () => {
  const goHome = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    const canvas = document.getElementById('background-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height, centerX, centerY;
    let nodes = [];
    let packets = [];
    let animationFrameId;
    const mouse = { x: null, y: null, radius: 150 };

    const config = {
      nodeCount: 250,
      packetCount: 20,
      fov: 350,
      baseSpeed: 0.6,
      packetSpeed: 1.5,
    };

    class Node {
      constructor() {
        this.x = (Math.random() - 0.5) * 3000;
        this.y = (Math.random() - 0.5) * 3000;
        this.z = Math.random() * 3000;
        this.projected = {};
      }

      reset() {
        this.x = (Math.random() - 0.5) * 3000;
        this.y = (Math.random() - 0.5) * 3000;
        this.z = 3000;
      }

      project() {
        const scale = config.fov / (config.fov + this.z);
        this.projected.x = centerX + this.x * scale;
        this.projected.y = centerY + this.y * scale;
        this.projected.alpha = Math.max(0, 1 - this.z / 3000);
      }

      update() {
        this.z -= config.baseSpeed;
        if (this.z < 1) this.reset();
        this.project();
      }
    }

    class Packet {
      constructor() {
        this.reset();
      }

      reset() {
        const startNodeIndex = Math.floor(Math.random() * nodes.length);
        let endNodeIndex = Math.floor(Math.random() * nodes.length);
        while (startNodeIndex === endNodeIndex) {
          endNodeIndex = Math.floor(Math.random() * nodes.length);
        }
        this.from = nodes[startNodeIndex];
        this.to = nodes[endNodeIndex];
        this.progress = 0;
        this.speed = Math.random() * 0.5 + config.packetSpeed;
      }

      update() {
        this.progress += this.speed;
        if (this.progress >= 100) this.reset();
      }

      draw() {
        const p1 = this.from.projected;
        const p2 = this.to.projected;
        if (!p1.x || !p2.x) return;
        const t = this.progress / 100;
        const currentX = p1.x + (p2.x - p1.x) * t;
        const currentY = p1.y + (p2.y - p1.y) * t;
        const alpha =
          Math.min(p1.alpha, p2.alpha) * (1 - Math.abs(50 - this.progress) / 50);
        if (alpha <= 0) return;
        ctx.beginPath();
        ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.shadowColor = 'white';
        ctx.shadowBlur = 10;
        ctx.fill();
      }
    }

    const setup = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
      nodes = Array.from({ length: config.nodeCount }, () => new Node());
      packets = Array.from({ length: config.packetCount }, () => new Packet());
    };

    const drawNetwork = () => {
      ctx.beginPath();
      for (let i = 0; i < nodes.length; i++) {
        const p1 = nodes[i].projected;
        ctx.fillStyle = `rgba(56, 189, 248, ${p1.alpha * 0.7})`;
        ctx.fillRect(p1.x - 0.5, p1.y - 0.5, 1, 1);
        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j].projected;
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            const alpha = Math.min(p1.alpha, p2.alpha) * (1 - dist / 120);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.5})`;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
      ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
      ctx.shadowBlur = 5;
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const drawMouseInteraction = () => {
      if (mouse.x === null) return;
      ctx.beginPath();
      for (const node of nodes) {
        const p = node.projected;
        const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dist < mouse.radius) {
          const alpha = p.alpha * (1 - dist / mouse.radius);
          ctx.strokeStyle = `rgba(200, 220, 255, ${alpha * 0.8})`;
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
        }
      }
      ctx.shadowColor = 'rgba(200, 220, 255, 0.8)';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      nodes.forEach((node) => node.update());
      packets.forEach((packet) => packet.update());
      drawNetwork();
      packets.forEach((packet) => packet.draw());
      drawMouseInteraction();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => setup();
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    setup();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = document.getElementById('gov-login-button');
    const statusMessage = document.getElementById('gov-status-message');
    const statusText = document.getElementById('gov-status-text');
    if (!btn || !statusMessage || !statusText) return;

    btn.innerHTML =
      '<span class="spinner" aria-hidden="true"></span>Verifying...';
    btn.disabled = true;

    setTimeout(() => {
      statusText.textContent = 'Access granted (demo).';
      statusMessage.className =
        'gov-status text-center p-3 rounded-lg gov-status--success show';
      btn.innerHTML = 'Log in';
      btn.disabled = false;
    }, 1500);
  };

  return (
    <div className="gov-root text-gray-200">
      <canvas id="background-canvas" />

      {/* back button */}
      <button type="button" className="back-pill gov-back-pill" onClick={goHome}>
        <span className="back-arrow left" />
        <span className="back-text">Home</span>
      </button>

      <main className="gov-main">
        <div className="gov-card glass-card rounded-2xl shadow-2xl">
          <div className="text-center">
            <h1 className="gov-title">Government Console</h1>
            <p className="gov-subtitle">Secure incident access</p>
          </div>

          <form id="gov-login-form" className="gov-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="gov-email" className="sr-only">
                Email
              </label>
              <div className="gov-input-wrap">
                <div className="gov-input-icon">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.095a1.23 1.23 0 00.41-1.412A9.992 9.992 0 0010 12a9.992 9.992 0 00-6.535 2.493z" />
                  </svg>
                </div>
                <input
                  id="gov-email"
                  name="email"
                  type="email"
                  required
                  className="form-input gov-input"
                  placeholder="official@agency.gov"
                />
              </div>
            </div>

            <div>
              <label htmlFor="gov-password" className="sr-only">
                Password
              </label>
              <div className="gov-input-wrap">
                <div className="gov-input-icon">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="gov-password"
                  name="password"
                  type="password"
                  required
                  className="form-input gov-input"
                  placeholder="Password"
                />
              </div>
            </div>



            <div>
              <button
                id="gov-login-button"
                type="submit"
                className="gov-login-btn"
              >
                Log in
              </button>
            </div>
          </form>

          <div id="gov-status-message" className="gov-status">
            <p id="gov-status-text"></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GovLogin;
