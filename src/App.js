import React from 'react';
import Header from './roll-header'
import LeftPianoRoll from './sub/LeftPianoRoll'
import PianoContent from './sub/PianoContent'
import TimeLine from './sub/TimeLine'
import Line from './sub/Line'

export default class Editor extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      note_start: 1,
      note_end: 7
    };
  }
  ChangeStartNote = (e) => {
    this.setState({note_start: e.target.value})
  }
  ChangeEndNote = (e) => {
    this.setState({note_end: e.target.value})
  }
  render() {
    return (
      <div>
        <Header ChangeStartNote={this.ChangeStartNote} ChangeEndNote={this.ChangeEndNote}/>
        <div className="" style={{margin: '15px', overflow: 'scroll', height: '800px', border: '1px solid rgba(0, 0, 0, 0.23)'}}>
          <div  style={{position: '-webkit-sticky', position: 'sticky', top: '0px', zIndex: '1001'}}>
            <Line/>
          </div>
          <TimeLine/>
          <div style={{display: 'flex'}}>
            <div className="" style={{position: '-webkit-sticky', position: 'sticky', left: '0px', zIndex: '999'}}>
              <LeftPianoRoll noteStart={this.state.note_start} noteEnd={this.state.note_end}/>
            </div>
            <div className="" style={{margin: '0px', zIndex: '998'}}>
              <PianoContent noteStart={this.state.note_start} noteEnd={this.state.note_end}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}