import { useEffect } from "react";

const ResumeModal = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="resume-modal" onClick={onClose}>
      <div className="modal-content" onClick={onClose}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={imageUrl} alt="resume" onClick={(e) => e.stopPropagation()} />
      </div>
    </div>
  );
};

export default ResumeModal;
