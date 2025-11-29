import { useNavigate } from 'react-router-dom';
import './UserDashboard.css';
import { communityPosts } from '../data/communityPosts';

const UserDashboard = () => {
  const navigate = useNavigate();

  const openSocialPost = () => {
    navigate('/social-post');
  };

  const openFactCheckAgent = () => {
    navigate('/fact-check-agent');
  };

  return (
    <div className="user-dash-root">
      {/* top status strip (unchanged) */}
      <header className="user-dash-topbar">
        <div className="topbar-left">
          <span className="topbar-logo">Crisis Agent</span>
          <span className="topbar-pill">User dashboard</span>
        </div>

        <div className="topbar-center">
          <span className="topbar-status-label">Status</span>
          <span className="topbar-status-chip topbar-status-chip--calm">
            CALM • No active alerts
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
            onClick={() => navigate('/user/profile')}
          >
            <div className="userchip-avatar">U</div>
            <div className="userchip-text">
              <span className="userchip-name">You</span>
              <span className="userchip-meta">Verified</span>
            </div>
          </button>
        </div>
      </header>

      {/* main 2-column layout */}
      <main className="user-dash-main simple-grid">
        {/* LEFT: Community Feed -> social posting overlay */}
        <section className="panel-left" onClick={openSocialPost}>
          <div className="panel-left-header">
            <h2 className="panel-left-title">Community Feed</h2>
            <p className="panel-left-subtitle">
              Official updates and verified citizen reports
            </p>
          </div>
          <div className="panel-left-body">
            <div className="feed-preview">
              {communityPosts.slice(0, 8).map((post) => (
                <article
                  key={post.id}
                  className={`feed-tweet ${
                    post.truthStatus === 'verified'
                      ? 'feed-tweet--verified'
                      : 'feed-tweet--uncertain'
                  }`}
                >
                  <div className="feed-tweet-avatar">
                    <span>{post.avatar}</span>
                  </div>

                  <div className="feed-tweet-main">
                    <header className="feed-tweet-header">
                      <div className="feed-tweet-author">
                        <span className="feed-tweet-name">{post.author}</span>
                        <span className="feed-tweet-handle">
                          {post.handle} · {post.time}
                        </span>
                      </div>

                      {post.truthStatus === 'verified' && (
                        <span className="feed-tweet-pill feed-tweet-pill--verified">
                          ✓ Verified
                        </span>
                      )}
                      {post.truthStatus !== 'verified' && (
                        <span className="feed-tweet-pill feed-tweet-pill--uncertain">
                          ! Needs verification
                        </span>
                      )}
                    </header>

                    <p className="feed-tweet-text">{post.text}</p>
                  </div>
                </article>
              ))}

              <div className="feed-preview-footer">
                Click anywhere to open full community feed
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT column */}
        <section className="panel-right-column">
          {/* Fact-checking agent (top) */}
          <div
            className="panel-right panel-right-top"
            onClick={openFactCheckAgent}
          >
            <div className="panel-right-header">
              <h2 className="panel-right-title">Fact-checking agent</h2>
              <p className="panel-right-subtitle">
                Ask about incidents, safety guidance, or next steps
              </p>
            </div>
            <div className="panel-right-body panel-body-chat">
              <div className="agent-preview">
                <div className="agent-preview-row agent-preview-row-user">
                  <div className="agent-preview-avatar agent-preview-avatar-user">
                    U
                  </div>
                  <div className="agent-preview-bubble agent-preview-bubble-user">
                    <p className="agent-preview-label">You</p>
                    <p className="agent-preview-text">
                      I received a WhatsApp forward claiming there is a bomb
                      threat at the central train station tonight. Is this true?
                    </p>
                  </div>
                </div>

                <div className="agent-preview-row agent-preview-row-bot">
                  <div className="agent-preview-avatar agent-preview-avatar-bot">
                    <span className="agent-preview-face">
                      <span className="agent-preview-eye" />
                      <span className="agent-preview-eye" />
                    </span>
                  </div>
                  <div className="agent-preview-bubble agent-preview-bubble-bot">
                    <p className="agent-preview-label">Fact-checking agent</p>
                    <p className="agent-preview-text">
                      Local police and transport authorities report no active
                      threats or evacuations at the station. The wording of this
                      message matches a widely circulated hoax from earlier
                      years.
                    </p>
                    <p className="agent-preview-meta">
                      Verdict: Likely false – treat as a rumour and avoid
                      forwarding it further.
                    </p>
                  </div>
                </div>

                <div className="agent-preview-footer">
                  Tap to open full fact-checking agent
                </div>
              </div>
            </div>
          </div>

          {/* Report (bottom) */}
          <div className="panel-right panel-right-bottom">
            <div className="panel-right-header">
              <h2 className="panel-right-title">Report What You Saw</h2>
              <p className="panel-right-subtitle">
                Upload screenshots, videos, or forwards to request verification
              </p>
            </div>
            <div className="panel-right-body panel-body-report">
              <form className="report-form">
                <div className="report-row">
                  <label
                    htmlFor="report-description"
                    className="report-label"
                  >
                    Description
                  </label>
                  <textarea
                    id="report-description"
                    className="report-textarea"
                    placeholder="Describe what you saw, where, and when..."
                  />
                </div>

                <div className="report-row report-row-inline">
                  <div className="report-field">
                    <label htmlFor="report-file" className="report-label">
                      Attach media
                    </label>
                    <input
                      id="report-file"
                      type="file"
                      className="report-input"
                    />
                  </div>
                  <div className="report-field">
                    <label htmlFor="report-channel" className="report-label">
                      Platform
                    </label>
                    <select
                      id="report-channel"
                      className="report-input"
                      defaultValue="WhatsApp"
                    >
                      <option>Twitter / X</option>
                      <option>WhatsApp</option>
                      <option>Telegram</option>
                      <option>Instagram</option>
                      <option>Facebook</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="report-actions">
                  <button
                    type="button"
                    className="report-btn report-btn-ghost"
                  >
                    Save draft
                  </button>
                  <button
                    type="submit"
                    className="report-btn report-btn-primary"
                  >
                    Submit for verification
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;
