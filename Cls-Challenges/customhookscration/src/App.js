import { useState } from "react";
import { useGeoLoacation } from "./useGeoLoacation";

export default function App() {
  const [countClicks, setCountClicks] = useState(0);

  const {
    error,
    isLoading,
    position: { lat, lng },
    getPosition,
  } = useGeoLoacation();

  function handleClick() {
    setCountClicks((count) => count + 1);
    getPosition();
  }

  return (
    <div className="container">
      <button
        className="get-position-button"
        onClick={handleClick}
        disabled={isLoading}
      >
        Get my position
      </button>

      {isLoading && <p className="message loading">Loading position...</p>}
      {error && <p className="message error">{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p className="message position">
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p className="click-count">You requested position {countClicks} times</p>
    </div>
  );
}
