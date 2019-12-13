import React from 'react';
import Header from './sub/roll-header'
import LeftPianoRoll from './sub/LeftPianoRoll'
import PianoContent from './sub/PianoContent'
import TimeLine from './sub/TimeLine'
import Line from './sub/Line'

export default class Editor extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      note_start: 1,
      note_end: 7,
      contentLength: 8
    };
  }
  ChangeStartNote = (e) => {
    this.setState({note_start: e.target.value})
  }
  ChangeEndNote = (e) => {
    this.setState({note_end: e.target.value})
  }
  ChangeContentLength = (e) => {
    this.setState({contentLength: e.target.value})
  }
  render() {
    return (
      <div>
        <Header ChangeStartNote={this.ChangeStartNote} ChangeEndNote={this.ChangeEndNote}/>
        <div style={{ position: 'sticky', top: '0px', zIndex: '1001'}}>
          <Line contentLength={this.state.contentLength} ChangeContentLength={this.ChangeContentLength}/>
        </div>
        <div className="" style={{margin: '15px', overflow: 'scroll', height: '800px', border: '1px solid rgba(0, 0, 0, 0.23)'}}>
          <TimeLine contentLength={this.state.contentLength}/>
          <div style={{display: 'flex'}}>
            <div className="" style={{position: 'sticky', left: '0px', zIndex: '999'}}>
              <LeftPianoRoll noteStart={this.state.note_start} noteEnd={this.state.note_end}/>
            </div>
            <div className="" style={{margin: '0px', zIndex: '998'}}>
              <PianoContent noteStart={this.state.note_start} noteEnd={this.state.note_end} contentLength={this.state.contentLength}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}