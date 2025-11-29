import { useNavigate } from 'react-router-dom';
import MagicBento from '../Components/MagicBento';
import './GovDashboard.css';

const GovDashboard = () => {
  const navigate = useNavigate();

  const handleTileClick = (label) => {
    switch (label) {
      case 'Social Listening':
        navigate('/gov/listening');        // Hunter Agents & narrative radar
        break;
      case 'Deepfake Lab':
        navigate('/gov/deepfakes');        // Deepfake & synthetic media analyzer
        break;
      case 'Watermark Studio':
        navigate('/gov/watermark');        // C2PA / digital watermarking studio
        break;
      case 'Narrative Wargame':
        navigate('/gov/wargame');          // Narrative simulator / adversarial agents
        break;
      case 'Incidents':
        navigate('/gov/incidents');        // Active misinformation incidents room
        break;
      case 'Policy & Compliance':
        navigate('/gov/policy');           // Legal / platform / SOP guidance
        break;
      default:
        break;
    }
  };

  return (
    <div className="gov-dash-root">
      {/* top status strip */}
      <header className="gov-dash-topbar">
        <div className="topbar-left">
          <span className="topbar-logo">Crisis Agent</span>
          <span className="topbar-pill">Government console</span>
        </div>

        <div className="topbar-center">
          <span className="topbar-status-label">Threat Level</span>
          <span className="topbar-status-chip topbar-status-chip--calm">
            STABLE • No critical misinformation incidents
          </span>
        </div>

        <div className="topbar-right">
          <button
            type="button"
            className="topbar-notif"
            aria-label="Notifications"
          >
            <span className="notif-dot" />
            <span className="notif-bell" />
          </button>

          <button
            type="button"
            className="topbar-userchip"
            onClick={() => navigate('/gov/profile')}
          >
            <div className="userchip-avatar">G</div>
            <div className="userchip-text">
              <span className="userchip-name">Gov. Officer</span>
              <span className="userchip-meta">Clearance: Level III</span>
            </div>
          </button>
        </div>
      </header>

      {/* main bento grid */}
      <main className="gov-dash-main">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={320}
          particleCount={14}
          glowColor="0, 163, 255"
          onTileClick={handleTileClick}
          // the MagicBento implementation should label tiles with:
          // "Social Listening", "Deepfake Lab", "Watermark Studio",
          // "Narrative Wargame", "Incidents", "Policy & Compliance"
        />
      </main>
    </div>
  );
};

export default GovDashboard;
