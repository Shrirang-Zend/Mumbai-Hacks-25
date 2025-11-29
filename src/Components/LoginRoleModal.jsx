import './LoginRoleModal.css';

const LoginRoleModal = ({ open, onClose, onSelectRole }) => {
  if (!open) return null;

  return (
    <div className="role-modal-backdrop" onClick={onClose}>
      <div
        className="role-modal-card"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button className="role-modal-close" type="button" onClick={onClose}>
          ×
        </button>

        <p className="role-modal-tag">Sign in to Crisis Agent</p>
        <h2 className="role-modal-title">Who&apos;s logging in?</h2>
        <p className="role-modal-sub">
          Choose your role so the right tools and dashboards load for you.
        </p>

        <div className="role-modal-buttons">
          <button
            type="button"
            className="role-pill role-pill-user"
            onClick={() => onSelectRole('user')}
          >
            <span className="role-pill-label">I&apos;m a citizen</span>
            <span className="role-pill-sub">User app · safety feed · crisis helper</span>
          </button>

          <button
            type="button"
            className="role-pill role-pill-gov"
            onClick={() => onSelectRole('gov')}
          >
            <span className="role-pill-label">I&apos;m a government official</span>
            <span className="role-pill-sub">Authority console · mapping · comms hub</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRoleModal;
