// import React from "react";

// import Pause from "./pause";

// import Play from "./play";

// import useAudioPlayer from "./useAudioPlayer";

// function Audio() {
//   const {
//     curTime,
//     duration,
//     playing,
//     setPlaying,
//     setClickedTime,
//   } = useAudioPlayer();

//   return (
//     <div className="player">
//       <audio id="audio">
//         <source src="imrmix1.mp3" />
//         Your browser does not support the <code>audio</code> element.
//       </audio>
//       <div className="controls">
//         {playing ? (
//           <Pause handleClick={() => setPlaying(false)} />
//         ) : (
//           <Play handleClick={() => setPlaying(true)} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Audio;
