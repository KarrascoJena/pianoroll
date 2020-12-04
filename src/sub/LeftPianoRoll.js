import React, { Component } from 'react';
import './css/App.css';
import Constants from './Constants';
import Soundfont from 'soundfont-player';


class App extends Component {
  static getDerivedStateFromProps(props, state) {
    if (props.noteStart !== state.note_start || props.noteEnd !== state.note_end) {
      state.contstants.init(props.noteStart, props.noteEnd)
      return { note_start: props.noteStart, note_end: props.noteEnd };
    }
    return null;
  }
  constructor(props) {
    super(props);
    // How wide in pixels a single beat should be.
      this.beat_pixel_length = 40;
      // Initialize Constants
      this.contstants = new Constants();
      this.contstants.init(this.props.noteStart, this.props.noteEnd);

    this.state = {
      note_start: this.props.noteStart,
      note_end: this.props.noteEnd,
      contstants: new Constants(),
    };
    
    this.settingState = false;

  }

  render() {
    var rows = [];
    this.state.contstants.init(this.state.note_start, this.state.note_end)
    this.state.contstants.getNotes().forEach(function(noteObject) {
      rows.push(<Row key={noteObject.midiNumber} midiNumber={noteObject.midiNumber} midiEvents={this.state.midiEvents} appState={this.state} />);
    }.bind(this));
    return (
        <Piano noteStart={this.state.note_start} noteEnd={this.state.note_end} contstants={this.state.contstants}/>
    );
  }
}

class Piano extends Component {
  render() {
    const rows = this.props.contstants.getNotes().map(noteObject => {
      return <PianoRow key={noteObject.midiNumber} midiNumber={noteObject.midiNumber} noteName={noteObject.noteName} />;
    });

    return (
      <div className="Piano">
        {rows}
      </div>
    );
  }
}

class PianoRow extends Component {

  clickNode = (midiNumber) => {
    // console.log(midiNumber)
    var ac = new AudioContext()
    Soundfont.instrument(ac, 'acoustic_grand_piano', { soundfont: 'MusyngKite' }).then(function (AcousticGrandPiano) {
      midiNumber = 12*7-midiNumber
      var note = `${midiNumber}`
      AcousticGrandPiano.play(note, ac.currentTime, { duration: 0.5})
    })
  }

  render() {
    return (
      <div className="PianoRow" data-midi-number={this.props.midiNumber} onClick={() => this.clickNode(this.props.midiNumber)}>
        {this.props.noteName}
      </div>
    );
  }
}

class Row extends Component {

  render() {
    // Grab MIDI events for this particular row
    var midiEvents = this.props.midiEvents.filter(function(event) {
      if (event.noteNumber === this.props.midiNumber) return true;
      return false;
    }.bind(this));

    var squares = midiEvents.map(function(event, index) {
      if (event.name === 'Note on') {
        // The next event should either be a "Note on" with 0 velocity (running status), or a "Note off".
        if (event.velocity > 0 && midiEvents[index + 1]) {
            let width = midiEvents[index + 1].delta;
            return <Square key={index} width={width * this.props.appState.tickPixelLength} left={event.tick * this.props.appState.tickPixelLength} />
        }

        return null;
      }
    }.bind(this));

    return (
      <div className="Row">
        {squares}
      </div>
    );
  }
}

// Each Square represents a note on and note off event.
class Square extends Component {
  render() {
    return (
      <div className="Square" style={{"width": this.props.width   + "px", "left": this.props.left   + "px"}}></div>
    );
  }
}

export default App;
