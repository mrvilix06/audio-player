import AudioPlayer from 'react-modern-audio-player';

import { playList } from './playList';

export default function PlayerAudio() {
    return (
        <div className="App">
        <AudioPlayer
            width="300px"
            height="100px"
            playList={playList}
            activeUI={{
                playButton: true,
                progress: "bar"
            }}
            // other props here
        />
        </div>
    );
    }