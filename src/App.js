import React from 'react';
import Header from './sub/roll-header'
import LeftPianoRoll from './sub/LeftPianoRoll'
import PianoContent from './sub/PianoContent'
import TimeLine from './sub/TimeLine'
import Line from './sub/Line'
import Soundfont from 'soundfont-player';
import { duration } from '@material-ui/core/styles';

let idIterator = 1;

function arrayReplace(arr, index, item) {
  return [
    ...arr.slice(0, index),
    ...(Array.isArray(item) ? item : [item]),
    ...arr.slice(index + 1),
  ];
}

export default class Editor extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      note_start: 1,
      note_end: 72,
      contentLength: 8,
      gridSize: 24,
      noteItems: [],
      actionType: false,
      onlyOneNode: false
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
  ChangeGridSize = (e) => {
    this.setState({gridSize: e.target.value})
  }
  SingleSound = (midiNumber) => {
    var ac = new AudioContext()
    Soundfont.instrument(ac, 'acoustic_grand_piano', { soundfont: 'MusyngKite' }).then(function (AcousticGrandPiano) {
      midiNumber = 12*7-midiNumber
      var note = `${midiNumber}`
      AcousticGrandPiano.stop()
      AcousticGrandPiano.play(note, ac.currentTime, { duration: 0.5})
    })
  }
  renderPianoRoll = () => {
    var roll = [];
    this.state.noteItems.map((item, i) => {
      var singleNote = {}
      singleNote.time=(item.x/24)/2
      singleNote.note=12*7-item.y/15
      singleNote.duration=item.width/22
      console.log(item)
      roll.push(singleNote)
    })
    return roll
  }
  PlayBack = () => {
    var notes = this.renderPianoRoll()
    var ac = new AudioContext()
    Soundfont.instrument(ac, 'acoustic_grand_piano', { soundfont: 'MusyngKite' }).then(function (AcousticGrandPiano) {
      AcousticGrandPiano.stop()
      AcousticGrandPiano.schedule(ac.currentTime, notes)
    })
  }
  _checkOnlyOneNode = (x, index = -1, width = this.state.gridSize) => {
    var flg = false
    if(this.state.onlyOneNode){
      for(var i = 0; i < this.state.noteItems.length; i++) {
        var startPoint  = parseInt(this.state.noteItems[i].x)
        var finishPoint = parseInt(this.state.noteItems[i].x) + parseInt(this.state.noteItems[i].width)
        var checkEndPoint = parseInt(x) + parseInt(width)
        if(i === index) continue
        if(startPoint <= x && x < finishPoint || startPoint < checkEndPoint  && checkEndPoint < finishPoint ){
          flg = true;
          break;
        }
      }

      return flg
    }
    return flg
  }
  PianoContentMouseClick = (e) => {
    if(e.type === 'contextmenu'){
      var key = e.returnValue
      var noteItems = this.state.noteItems
      noteItems = noteItems.filter(function( obj ) {
        return obj.id !== key;
      });
      this.setState({noteItems: noteItems})
      event.preventDefault();

    } else {
      if(!this.state.actionType){
        if(e.target.className.animVal === "rse-plane-container"){
          var x = e.nativeEvent.offsetX
          var y = e.nativeEvent.offsetY
          var re = (x%this.state.gridSize)
          x -= re;
          re = (y%15)
          y -= re;
          var width = this.state.gridSize - 2
          var height = 15

          if(this._checkOnlyOneNode(x)){
            alert("bad note")
          }
          else {
            this.setState(state => ({
              noteItems: [
                ...state.noteItems,
                { id: `id${idIterator}`, x, y, width, height },
              ],
            }));
            idIterator += 1
            this.SingleSound(y/15)
          }
        }
      }
      this.setState({actionType: false})
    }
  };
  PianoContentOnChange = (newRect, event, x, y, width, height, index, item) => {
    if (this._checkOnlyOneNode(newRect.x, index, newRect.width)){
      alert("bad point")
      return false
    } else {
      if(width === newRect.width){
        var re = newRect.x%this.state.gridSize
        newRect.x -= re
        re = newRect.y%15
        if(re > 7){
          newRect.y = newRect.y + 15 - re
        }else {
          newRect.y -= re
        }
        this.setState(state => ({
          noteItems: arrayReplace(this.state.noteItems, index, {
            ...item,
            ...newRect,
          }),
        }));
        this.setState({actionType: true})
        this.SingleSound(newRect.y/15)
      }
      else {
        if(newRect.x < x) {
          newRect.x = x;
          newRect.width = this.state.gridSize;
        } else {
          if(newRect.width < this.state.gridSize) newRect.width = parseInt(this.state.gridSize)
          else newRect.width = (parseInt(newRect.width/this.state.gridSize) + 1)*this.state.gridSize
        }
        this.setState(state => ({
          noteItems: arrayReplace(this.state.noteItems, index, {
            ...item,
            ...newRect,
          }),
        }));
        this.setState({actionType: true})
      }
    }
  }
  OnlyOneNode = (e) => {
    this.setState({onlyOneNode: !this.state.onlyOneNode})
  }
  render() {
    return (
      <div>
        <Header ChangeStartNote={this.ChangeStartNote} ChangeEndNote={this.ChangeEndNote}/>
        <div style={{ position: 'sticky', top: '0px', zIndex: '1001'}}>
          <Line 
            playBack={this.PlayBack}
            contentLength={this.state.contentLength}
            changeContentLength={this.ChangeContentLength}
            gridSize={this.state.gridSize}
            changeGridSize={this.ChangeGridSize}
            onlyOneNode={this.OnlyOneNode}
          />
        </div>
        <div style={{margin: '15px', overflow: 'scroll', height: '800px', border: '1px solid rgba(0, 0, 0, 0.23)'}}>
          <TimeLine contentLength={this.state.contentLength}/>
          <div style={{display: 'flex'}}>
            <div style={{position: 'sticky', left: '0px', zIndex: '999'}}>
              <LeftPianoRoll noteStart={this.state.note_start} noteEnd={this.state.note_end}/>
            </div>
            <div style={{margin: '0px', zIndex: '998'}}>
              <PianoContent
                mouseClick={this.PianoContentMouseClick}
                onChange={this.PianoContentOnChange}
                noteItems={this.state.noteItems}
                noteStart={this.state.note_start}
                noteEnd={this.state.note_end}
                contentLength={this.state.contentLength}
                gridSize={this.state.gridSize}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}