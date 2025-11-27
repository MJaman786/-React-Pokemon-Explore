import React from "react";

export default function StatusOverlay({ loading = false, message = "" }) {
  return (
    <>
      {(loading || message) && (
        <div className="overlay">
          <div className="content-box">
            {loading && <div className="spinner"></div>}
            {message && <p className="msg">{message}</p>}
          </div>
        </div>
      )}

      <style>{`
        .overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          backdrop-filter: blur(3px);
        }

        .content-box {
          background: #ffffff;
          padding: 20px 30px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 18px rgba(0,0,0,0.2);
          min-width: 260px;
          animation: fadeIn 0.25s ease;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #eee;
          border-top-color: #4a90e2;
          border-radius: 50%;
          margin: 0 auto;
          animation: spin 1s linear infinite;
        }

        .msg {
          font-size: 18px;
          color: #333;
          margin-top: 15px;
          font-weight: 500;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes fadeIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}
