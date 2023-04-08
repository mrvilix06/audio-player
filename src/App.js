import React from 'react';
import './App.css';
import PlayerAudio from './AudioPlayer/PlayerAudio';
import {createUseStyles} from 'react-jss'

const useStyle = createUseStyles({
  App: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  }
})

function App() {
  const classes = useStyle();
  return (
    <div className={classes.App}>
      <PlayerAudio />
    </div>
  );
}

export default App;
