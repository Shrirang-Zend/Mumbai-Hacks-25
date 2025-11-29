import { useNavigate } from 'react-router-dom';
import './SocialPost.css';
import { communityPosts } from '../data/communityPosts';

const SocialPost = () => {
  const navigate = useNavigate();

  const getTweetClass = (truthStatus) => {
    if (truthStatus === 'verified') return 'tweet--verified';
    if (truthStatus === 'rumour') return 'tweet--rumour';
    return 'tweet--uncertain';
  };

  const renderBadge = (truthStatus) => {
    if (truthStatus === 'verified') {
      return (
        <span className="tweet-badge tweet-badge--verified">
          <span className="badge-dot" />
          Verified by authorities
        </span>
      );
    }
    if (truthStatus === 'rumour') {
      return (
        <span className="tweet-badge tweet-badge--rumour">
          <span className="badge-dot" />
          Flagged as rumour
        </span>
      );
    }
    return (
      <span className="tweet-badge tweet-badge--uncertain">
        <span className="badge-dot" />
        Not fully verified
      </span>
    );
  };

  const renderStatusChip = (truthStatus) => {
    if (truthStatus === 'verified') {
      return (
        <span className="tweet-status tweet-status--verified">
          ✓ Officially confirmed
        </span>
      );
    }
    if (truthStatus === 'rumour') {
      return (
        <span className="tweet-status tweet-status--rumour">
          ⚠ Rumour / likely false
        </span>
      );
    }
    return (
      <span className="tweet-status tweet-status--uncertain">
        ! Treat with caution
      </span>
    );
  };

  return (
    <div className="social-root">
      <header className="social-topbar">
        <button
          type="button"
          className="social-back"
          onClick={() => navigate('/user-dashboard')}
        >
          ✕
        </button>
        <div className="social-topbar-text">
          <span className="social-topbar-label">Community feed</span>
          <span className="social-topbar-sub">
            Twitter-style view of verified, unverified, and rumour reports
          </span>
        </div>
      </header>

      <main className="social-main">
        <div className="social-column">
          {communityPosts.map((post) => (
            <article
              key={post.id}
              className={`tweet ${getTweetClass(post.truthStatus)}`}
            >
              <header className="tweet-header">
                <div className="tweet-author">
                  <div className="tweet-avatar">
                    <span>{post.avatar}</span>
                  </div>
                  <div className="tweet-author-text">
                    <span className="tweet-name">{post.author}</span>
                    <span className="tweet-handle">
                      {post.handle} · {post.time}
                    </span>
                  </div>
                  {renderBadge(post.truthStatus)}
                </div>
              </header>

              <p className="tweet-text">{post.text}</p>

              {/* summary only here, not in dashboard preview */}
              <p className="tweet-summary">{post.summary}</p>

              <footer className="tweet-footer">
                {renderStatusChip(post.truthStatus)}
              </footer>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SocialPost;
