import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FactCheckAgent.css';
import ShinyText from '../Components/ShinyText';

const FactCheckAgent = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [language, setLanguage] = useState('English');
  const [isThinking, setIsThinking] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsThinking(true);
    setResponse(null);

    // Placeholder for backend call; replace with real API later
    setTimeout(() => {
      setIsThinking(false);
      setResponse({
        verdict: 'This claim requires further verification.',
        confidence: 'Medium confidence (demo only)',
        notes:
          'In the real system, this section will summarize cross‑checked sources, highlight inconsistencies, and suggest what the user should do next.',
      });
    }, 2200);
  };

  return (
    <div className="agent-root">
      <header className="agent-topbar">
        <button
          type="button"
          className="agent-back"
          onClick={() => navigate('/user-dashboard')}
        >
          ✕
        </button>
        <div className="agent-topbar-text">
          <span className="agent-topbar-label">Fact-checking agent</span>
          <span className="agent-topbar-sub">
            Submit a claim, add context, and let the agent assess its reliability
          </span>
        </div>
      </header>

      <main className="agent-main">
        {/* TOP: Agent response */}
        <section className="agent-panel agent-panel-right">
          <h2 className="agent-panel-title">Agent response</h2>
          <p className="agent-panel-subtitle">
            The agent explains whether the claim looks reliable, suspicious, or false.
          </p>

          <div className="agent-chat">
            {!isThinking && !response && (
              <div className="agent-chat-placeholder">
                Submit a claim below to start a fact‑check.
              </div>
            )}

            {isThinking && (
              <div className="agent-chat-message agent-chat-message-agent">
                <div className="agent-avatar">
                  <div className="agent-avatar-orbit" />
                  <div className="agent-avatar-core">
                    <div className="agent-face">
                      <span className="agent-eye" />
                      <span className="agent-eye" />
                      <span className="agent-mouth" />
                    </div>
                  </div>
                </div>
                <div className="agent-bubble agent-bubble-thinking">
                  <ShinyText
                    text="Analyzing claim across trusted sources…"
                    speed={3}
                  />
                  <div className="agent-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}

            {response && (
              <div className="agent-chat-message agent-chat-message-agent">
                <div className="agent-avatar">
                  <div className="agent-avatar-orbit agent-avatar-orbit-done" />
                  <div className="agent-avatar-core">
                    <div className="agent-face">
                      <span className="agent-eye" />
                      <span className="agent-eye" />
                      <span className="agent-mouth" />
                    </div>
                  </div>
                </div>
                <div className="agent-bubble">
                  <p className="agent-verdict">{response.verdict}</p>
                  <p className="agent-confidence">{response.confidence}</p>
                  <p className="agent-notes">{response.notes}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* BOTTOM: Claim details */}
        <section className="agent-panel agent-panel-left">
          <h2 className="agent-panel-title">Claim details</h2>
          <p className="agent-panel-subtitle">
            Provide what you saw or received, plus where and in which language.
          </p>

          <form className="agent-form" onSubmit={handleSubmit}>
            <div className="agent-form-row">
              <label htmlFor="agent-query" className="agent-label">
                Claim or message
              </label>
              <textarea
                id="agent-query"
                className="agent-input agent-textarea"
                placeholder="Paste the message, screenshot caption, or summary you want checked..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="agent-form-row agent-form-inline">
              <div className="agent-field">
                <label htmlFor="agent-location" className="agent-label">
                  Location (optional)
                </label>
                <input
                  id="agent-location"
                  className="agent-input"
                  placeholder="City, region, or 'Unknown'"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="agent-field">
                <label htmlFor="agent-language" className="agent-label">
                  Language
                </label>
                <select
                  id="agent-language"
                  className="agent-input"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option>English</option>
                  <option>Hindi</option>
                  <option>French</option>
                  <option>Spanish</option>
                  <option>Arabic</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="agent-actions">
              <button
                type="submit"
                className="agent-btn agent-btn-primary"
                disabled={isThinking}
              >
                {isThinking ? 'Checking…' : 'Check claim'}
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default FactCheckAgent;
