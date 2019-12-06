import React from 'react';
import {Motion, spring} from 'react-motion';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';

export default class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      length: 100,
      interval: null,
      lineStatus: false
    };
  };
  
  handleMouseDown = () => {
    this.setState({open: !this.state.open})
    this.setState({lineStatus: true})
    this.startTimeInterval(100)
  };

  startTimeInterval = (length) => {
    this.setState({interval:  setInterval(() => {
      length += 1;
      this.setState({length: length})
      console.log("state length = ", this.state.length)
      console.log(length)
    }, 10)})
  }

  stope = () => {
    clearInterval(this.state.interval)
    this.setState({open: !this.state.open})
    this.setState({lineStatus: false})
  }

  render() {
    return (
      <div>
        <div className="text-center" style={{paddingLeft: '10px', paddingTop: '20px', backgroundColor: '#FFF'}}>
          <ButtonGroup size="small" aria-label="small outlined button group">
            {/* <Button onClick={props.play}><PlayArrowIcon/>Play</Button> */}
            <Button onClick={this.handleMouseDown} disabled={this.state.lineStatus} ><PlayArrowIcon/>Play</Button>
            <Button disabled={!this.state.lineStatus}><PauseIcon/>Pause</Button>
            <Button onClick={this.stope} disabled={!this.state.lineStatus} ><StopIcon/>Stop</Button>
          </ButtonGroup>
        </div>
        <div style={{height: '0px', overflow: 'visible'}}>
          <Motion style={{x: spring(this.state.open ? this.state.length : 100)}}>
            {({x}) =>
              // children is a callback which should accept the current value of
              // `style`
                <div className="demo0-block" style={{position: 'relative', left: `${x}px`, height:'750px', width: '2px'}} />
            }
          </Motion>
        </div>
      </div>
    );
  };
}
