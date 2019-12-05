import React, { Component } from 'react';
import './css/App.css';
import Constants from './Constants';
import Player from '../../node_modules/midi-player-js';
import Mario from './midi/mario-midi.js';

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
      // Initialize MIDI parser/player
      this.midiPlayer = new Player.Player();
      this.midiPlayer.on('playing', function(tick) {
        if (tick.tick % 20 == 0) {
          //console.log(tick)
          this.handlePlayTick(tick.tick);
        }
      }.bind(this));

    this.midiPlayer.loadDataUri(Mario);
    //this.midiPlayer.play();

    this.state = {
      error:            null,
      selectedTrack:    0,
      currentTick:      0,
      midiEvents:       this.midiPlayer.events[0],
      tickPixelLength:  this.beat_pixel_length / this.midiPlayer.division,
      note_start: this.props.noteStart,
      note_end: this.props.noteEnd,
      contstants: new Constants(),
    };
    
    this.settingState = false;

    // Bind methods to this
    this.handleTrackChange = this.handleTrackChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handlePlayTick = this.handlePlayTick.bind(this);
  }

  handleTrackChange(event) {
    this.setState({
      selectedTrack:  event.target.value,
      midiEvents:     this.midiPlayer.events[event.target.value]
    });
  }

  handleFileChange(event) {
    var reader  = new FileReader();

    reader.onload = function(e) {
      try {
        this.midiPlayer.loadArrayBuffer(e.target.result);
        this.setState({
          error:            null, 
          midiEvents:       this.midiPlayer.events[0],
          tickPixelLength:  this.beat_pixel_length / this.midiPlayer.division
        });

      } catch(e) {
        this.setState({error: e});
      }
      
    }.bind(this);

    reader.readAsArrayBuffer(event.target.files[0]);
  }

  handlePlayTick(tick) {
    //console.log(tick)
    if (!this.settingState) {
      this.settingState = true;
      this.setState({currentTick: tick}, function() {
        this.settingState = false;
      }.bind(this));
    }
  }

  render() {
    var options = this.midiPlayer.tracks.map((element, index) => <option key={index}>{index}</option>);
    var rows = [];
    this.state.contstants.init(this.state.note_start, this.state.note_end)
    // Constants.NOTES.forEach(function(noteObject) {
    //   rows.push(<Row key={noteObject.midiNumber} midiNumber={noteObject.midiNumber} midiEvents={this.state.midiEvents} appState={this.state} />);
    // }.bind(this));
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
    // const rows = Constants.NOTES.map(noteObject => {
    //   return <PianoRow key={noteObject.midiNumber} midiNumber={noteObject.midiNumber} noteName={noteObject.noteName} />;
    // });
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
  render() {
    return (
      <div className="PianoRow" data-midi-number={this.props.midiNumber}>
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
