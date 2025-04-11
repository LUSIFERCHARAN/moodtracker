import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TrackMood.css";

const moodOptions = [
  { value: 1, emoji: "😞", label: "Very Sad" },
  { value: 2, emoji: "😐", label: "Neutral" },
  { value: 3, emoji: "🙂", label: "Okay" },
  { value: 4, emoji: "😀", label: "Happy" },
  { value: 5, emoji: "😆", label: "Very Happy" },
];

const TrackMood = () => {
  const [mood, setMood] = useState(3);
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Save the mood data (Later can use LocalStorage or Backend)
    console.log("Mood:", mood, "Notes:", notes);

    // Navigate to the dashboard or stats page
    navigate("/stats");
  };

  return (
    <div className="track-container">
      <h2>How are you feeling today?</h2>

      <div className="mood-buttons">
        {moodOptions.map(({ value, emoji, label }) => (
          <button
            key={value}
            className={mood === value ? "active" : ""}
            onClick={() => setMood(value)}
          >
            <span className="emoji">{emoji}</span>
            <span className="mood-label">{label}</span>
          </button>
        ))}
      </div>

      <textarea
        placeholder="Add a note (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>

      <button className="submit-button" onClick={handleSubmit}>
        Save Mood
      </button>
    </div>
  );
};

export default TrackMood;
