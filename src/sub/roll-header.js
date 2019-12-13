import React, {Component} from 'react';

export default class GroupedSelect extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div style={{zIndex: '100001'}}>
        <div style={{backgroundColor: '#95c3f5', display: 'flex'}}>
          <div>
            <label>NoteStart</label>
            <select className="custom-file mt-3 mb-3" onChange={this.props.ChangeStartNote} style={{width: '100px'}}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div>
            <label>~NoteEnd</label>
            <select className="custom-file mt-3 mb-3" defaultValue={7} onChange={this.props.ChangeEndNote} style={{width: '100px'}}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>
          <div>
            <label>instruments</label>
            <select className="custom-file mt-3 mb-3" style={{width: '100px'}}>
              <option value="1">piano</option>
              <option value="2">guiter</option>
              <option value="3">kit</option>
            </select>
          </div>
          <div className="custom-file mt-3 mb-3" style={{width: '400px'}}>
            <input type="file" className="custom-file-input" id="customFile"/>
            <label className="custom-file-label selected" htmlFor="customFile">Import MIDI file</label>
          </div>
        </div>
      </div>
    );
  }
}