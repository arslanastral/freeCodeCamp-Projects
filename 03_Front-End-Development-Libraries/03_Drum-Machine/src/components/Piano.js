import React from "react";
import * as Tone from "tone";
import { DrumMachineContext } from "./DrumMachine";

import PianoKey from "./PianoKey";
import SampleLibrary from "./Tonejs-Instruments";
import PianoFlatKey from "./PianoFlatKey";
import styled from "styled-components";

const PianoKeyContainer = styled.div`
  background: #ffffff;
  display: flex;
  /* gap: 2px; */
  width: 966px;
  height: 100%;
`;

var piano = SampleLibrary.load({
  instruments: "piano",
});

// const filter = new Tone.AutoFilter(0).start();
// const distortion = new Tone.Distortion(3);
// const reverb = new Tone.Reverb(20);
let volume = new Tone.Volume();
// const tremolo = new Tone.Tremolo(5, 0.55).start();
// const phaser = new Tone.Phaser({
//   frequency: 15,
//   octaves: 5,
//   baseFrequency: 1000,
// });

// piano.sustain = 100;

// volume.mute = false;
// piano.toDestination();
// eslint-disable-next-line
// const autoPanner = new Tone.AutoPanner("16n").toDestination().start();

// const autoWah = new Tone.AutoWah(50, 6, -30).toDestination();
// const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start();
// const pitchShift = new Tone.PitchShift(10);
// piano.chain(volume, Tone.Destination);

// React.useEffect(() => {
//   Tone.ToneAudioBuffer.loaded().then(() => {

//   });
// });

// Tone.Buffer.on("load", function () {
//   // play instrument sound

//   piano.triggerAttack("A3");
// });

const Piano = () => {
  const { setCurrentNote, soundRelease, masterVolume } = React.useContext(
    DrumMachineContext
  );

  React.useEffect(() => {
    piano.release = soundRelease;
    piano.volume.value = masterVolume;
    piano.chain(volume, Tone.Destination);
  }, [soundRelease, masterVolume]);

  const playNote = (e, note) => {
    if (e.buttons == 1 || e.buttons == 3) {
      // document.querySelector("#current-note").innerHTML = note;
      setCurrentNote(note);
      let keyClass = note.includes("#")
        ? "black-keys_active"
        : "white-keys_active";
      document
        .querySelector(`.${note.replace("#", "sharp")}`)
        .classList.add(keyClass);
      Tone.loaded().then(() => {
        piano.triggerAttack(note);
      });
    }
  };

  const playKeyboardNote = (e) => {
    if (e.keys == "Enter") {
      console.log("Enter is pressed");
    }
  };

  const release = (note) => {
    piano.triggerRelease(note);
    let keyClass = note.includes("#")
      ? "black-keys_active"
      : "white-keys_active";
    document
      .querySelector(`.${note.replace("#", "sharp")}`)
      .classList.remove(keyClass);
  };

  return (
    <PianoKeyContainer>
      <PianoKey
        playKeyboardNote={playKeyboardNote}
        noteName="C3"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoFlatKey
        noteName="C#3"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoKey noteName="D3" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoFlatKey
        noteName="D#3"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoKey noteName="E3" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoKey noteName="F3" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoFlatKey
        noteName="F#3"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoKey noteName="G3" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoFlatKey
        noteName="G#3"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoKey noteName="A3" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoFlatKey
        noteName="A#3"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoKey noteName="B3" onMouseEnter={playNote} onMouseLeave={release} />

      {/* Ocatve 4 */}
      <PianoKey noteName="C4" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoFlatKey
        noteName="C#4"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoKey noteName="D4" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoFlatKey
        noteName="D#4"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoKey noteName="E4" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoKey noteName="F4" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoFlatKey
        noteName="F#4"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoKey noteName="G4" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoFlatKey
        noteName="G#4"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoKey noteName="A4" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoFlatKey
        noteName="A#4"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoKey noteName="B4" onMouseEnter={playNote} onMouseLeave={release} />

      {/* ocatve 5 */}
      <PianoKey noteName="C5" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoFlatKey
        noteName="C#5"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoKey noteName="D5" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoFlatKey
        noteName="D#5"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoKey noteName="E5" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoKey noteName="F5" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoFlatKey
        noteName="F#5"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoKey noteName="G5" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoFlatKey
        noteName="G#5"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoKey noteName="A5" onMouseEnter={playNote} onMouseLeave={release} />
      <PianoFlatKey
        noteName="A#5"
        onMouseEnter={playNote}
        onMouseLeave={release}
      />
      <PianoKey noteName="B5" onMouseEnter={playNote} onMouseLeave={release} />
    </PianoKeyContainer>
  );
};

export default Piano;
