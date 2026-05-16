"use client";

import "./page.css";

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="error-container">
      <div className="error-box">
        <h1>Ôi!</h1>

        <h2>Lỗi rồi huhu</h2>

        <p>{error.message}</p>

        <button onClick={() => reset()}>
          Tải lại trang
        </button>
      </div>
    </div>
  );
}