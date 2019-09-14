import React from 'react';
import {Motion, spring} from 'react-motion';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ReplayIcon from '@material-ui/icons/Replay';
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';

export default class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      length: 115,
      interval: null,
      flgPlayPause: false,
      bpm: 120
    };
  };
  
  startTimeInterval = (length) => {
    this.setState({interval:  setInterval(() => {
      length += 1*(this.state.bpm/120);
      this.setState({length: length})
    }, 10)})
  }

  play = () => {
    this.setState({open: true})
    this.setState({flgPlayPause: !this.state.flgPlayPause})
    if(this.state.flgPlayPause){
      clearInterval(this.state.interval)
    } else {
      this.startTimeInterval(this.state.length)
    }
  };

  stope = () => {
    clearInterval(this.state.interval)
    this.setState({open: false})
    this.setState({length: 115})
    this.setState({flgPlayPause: false})
  }

  replay = () => {
    clearInterval(this.state.interval)
    this.setState({
      open: true,
      length: 115,
      flgPlayPause: true
    })
    setTimeout(() => {
      this.startTimeInterval(115)
    }, 1000)
  }

  bpmChange = (e) => {
    this.setState({bpm: e.target.value})
  }
  render() {
    return (
      <div>
        <div className="text-center" style={{paddingLeft: '10px', paddingTop: '20px', backgroundColor: '#FFF'}}>
          <form className="form-inline">
            <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <div className="input-group-addon">BPM</div>
              <input type="number" className="form-control" id="inlineFormInputGroup" onChange={this.bpmChange} placeholder="" value={this.state.bpm} style={{marginLeft: '-3px', width: '70px'}}/>
            </div>

            <div className="form-check mb-2 mr-sm-2 mb-sm-0">
              <ButtonGroup size="small" aria-label="small outlined button group">
                <Button onClick={this.play}>{this.state.flgPlayPause ? <PauseIcon/>:<PlayArrowIcon/>}</Button>
                <Button onClick={this.replay}><ReplayIcon/></Button>
                <Button onClick={this.stope}><StopIcon/></Button>
              </ButtonGroup>
            </div>
          </form>
        </div>
        <div style={{height: '0px', overflow: 'visible'}}>
          <Motion style={{x: spring(this.state.open ? this.state.length : 115)}}>
            {({x}) =>
                <div className="demo0-block" style={{position: 'relative', left: `${x}px`, top: '36px', height:'760px', width: '2px'}} />
            }
          </Motion>
        </div>
      </div>
    );
  };
}
