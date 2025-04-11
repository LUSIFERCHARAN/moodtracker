import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from "chart.js";
import { motion } from "framer-motion";
import "../styles/Stats.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const Stats = () => {
  const moods = [3, 4, 2, 5, 3, 4, 5]; // Example mood data
  const moodLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Calculate average mood
  const averageMood = (moods.reduce((a, b) => a + b, 0) / moods.length).toFixed(1);

  // Count most frequent mood
  const moodFrequency = moods.reduce((acc, mood) => {
    acc[mood] = (acc[mood] || 0) + 1;
    return acc;
  }, {});
  const mostFrequentMood = Object.keys(moodFrequency).reduce((a, b) => (moodFrequency[a] > moodFrequency[b] ? a : b));

  // Find best & worst mood days
  const bestDay = moodLabels[moods.indexOf(Math.max(...moods))];
  const worstDay = moodLabels[moods.indexOf(Math.min(...moods))];

  // Mood streak (Consecutive high moods)
  let streak = 0, maxStreak = 0;
  moods.forEach(mood => {
    if (mood >= 4) {
      streak++;
      maxStreak = Math.max(maxStreak, streak);
    } else {
      streak = 0;
    }
  });

  // Determine mood tag
  let moodTag = "";
  if (averageMood >= 4) {
    moodTag = "Energetic 🔥";
  } else if (averageMood >= 2.5) {
    moodTag = "Balanced 🙂";
  } else {
    moodTag = "Stressed 😞";
  }

  // Mood-based quote
  const moodQuotes = {
    Energetic: "Keep up the great energy! Keep inspiring! 🌟",
    Balanced: "You're doing well! Stay mindful and keep going. 💙",
    Stressed: "Tough days don’t last. Take deep breaths and recharge. 🧘‍♂️",
  };
  const quote = moodQuotes[moodTag.split(" ")[0]];

  // Weekly challenge suggestion
  let challenge = "";
  if (moodTag === "Energetic 🔥") {
    challenge = "Try spreading positivity to someone around you! 💬";
  } else if (moodTag === "Balanced 🙂") {
    challenge = "Write about your best moment of the week. ✍️";
  } else {
    challenge = "Take a break and listen to calming music. 🎵";
  }

  // Line chart for weekly mood
  const lineData = {
    labels: moodLabels,
    datasets: [
      {
        label: "Mood Score (1-5)",
        data: moods,
        borderColor: "#00ffff",
        backgroundColor: "rgba(0, 255, 255, 0.2)",
        tension: 0.4,
      },
    ],
  };

  // Bar chart for mood frequency
  const barData = {
    labels: ["😞 1", "😐 2", "🙂 3", "😀 4", "😆 5"],
    datasets: [
      {
        label: "Mood Frequency",
        data: [moodFrequency[1] || 0, moodFrequency[2] || 0, moodFrequency[3] || 0, moodFrequency[4] || 0, moodFrequency[5] || 0],
        backgroundColor: ["#ff4b4b", "#ff914d", "#ffd700", "#32cd32", "#00ffff"],
      },
    ],
  };

  return (
    <div className="stats-container">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Weekly Mood Analysis
      </motion.h2>

      <motion.div className="mood-summary" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2 }}>
        <div className="mood-card">🔥 Most Frequent Mood: {mostFrequentMood}/5</div>
        <div className="mood-card">🏆 Best Day: {bestDay}</div>
        <div className="mood-card">😞 Worst Day: {worstDay}</div>
        <div className="mood-card">🔹 Avg Mood: {averageMood}</div>
        <div className="mood-card">📈 Longest Streak: {maxStreak} Days</div>
      </motion.div>

      <motion.div className="mood-status" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <h3>Your Mood This Week: <span>{moodTag}</span></h3>
      </motion.div>

      <motion.div className="stats-chart" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }}>
        <h3>📊 Weekly Mood Trend</h3>
        <Line data={lineData} />
      </motion.div>

      <motion.div className="stats-chart" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }}>
        <h3>🔢 Mood Frequency</h3>
        <Bar data={barData} />
      </motion.div>

      <motion.div className="suggestion-box" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <h3>💡 Your Personalized Message</h3>
        <p>{quote}</p>
      </motion.div>

      <motion.div className="weekly-challenge" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <h3>🎯 Weekly Challenge</h3>
        <p>{challenge}</p>
      </motion.div>
    </div>
  );
};

export default Stats;
