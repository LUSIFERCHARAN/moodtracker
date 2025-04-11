import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate(); // Navigation hook

  return (
    <div className="home-container">
      <motion.h1 
        className="glow-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Daily Mood Tracker
      </motion.h1>

      <motion.p 
        className="sub-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Record & Analyze Your Mood with AI
      </motion.p>

      <motion.button 
        className="glow-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        onClick={() => navigate("/track")} // Navigate to Mood Entry
      >
        Start Tracking
      </motion.button>

      {/* Bottom Navigation Buttons */}
      <div className="nav-buttons">
        <motion.button 
          className="nav-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/")} // Home
        >
          🏠 Home
        </motion.button>

        <motion.button 
          className="nav-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/stats")} // Stats
        >
          📊 Stats
        </motion.button>

        <motion.button 
          className="nav-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/settings")} // Settings
        >
          ⚙️ Settings
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
