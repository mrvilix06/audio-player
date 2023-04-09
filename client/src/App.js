import React, { useState } from "react";
import axios from "axios";

function App() {
  const [videoId, setVideoId] = useState("");
  const [videoTitle, setVideoTitle] = useState("");

  const downloadMp3 = async () => {
    try {
      const response = await axios.get(
        `/yt/${encodeURIComponent(videoId)}/${encodeURIComponent(videoTitle)}`
      );
      console.log("Téléchargement terminé");
    } catch (error) {
      console.error("Erreur lors du téléchargement du fichier MP3 :", error);
    }
  };

  return (
    <div className="App">
      <h1>Mon application React avec Express</h1>
      <input
        type="text"
        placeholder="Video ID"
        value={videoId}
        onChange={(e) => setVideoId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Video Title"
        value={videoTitle}
        onChange={(e) => setVideoTitle(e.target.value)}
      />
      <button onClick={downloadMp3}>Télécharger MP3</button>
    </div>
  );
}

export default App;
