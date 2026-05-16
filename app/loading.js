import "./page.css";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>

      <h1>Loading Nexcent...</h1>

      <p>Please wait while the page is loading</p>
    </div>
  );
}