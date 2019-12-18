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
              <option value="1">B7</option>
              <option value="2">A#7</option>
              <option value="3">A7</option>
              <option value="4">G#7</option>
              <option value="5">G7</option>
              <option value="6">F#7</option>
              <option value="7">F7</option>
              <option value="8">E7</option>
              <option value="9">D#7</option>
              <option value="10">D7</option>
              <option value="11">C#7</option>
              <option value="12">C7</option>
              <option value="13">B6</option>
              <option value="14">A#6</option>
              <option value="15">A6</option>
              <option value="16">G#6</option>
              <option value="17">G6</option>
              <option value="18">F#6</option>
              <option value="19">F6</option>
              <option value="20">E6</option>
              <option value="21">D#6</option>
              <option value="22">D6</option>
              <option value="23">C#6</option>
              <option value="24">C6</option>
              <option value="25">B5</option>
              <option value="26">A#5</option>
              <option value="27">A5</option>
              <option value="28">G#5</option>
              <option value="29">G5</option>
              <option value="30">F#5</option>
              <option value="31">F5</option>
              <option value="32">E5</option>
              <option value="33">D#5</option>
              <option value="34">D5</option>
              <option value="35">C#5</option>
              <option value="36">C5</option>
              <option value="37">B4</option>
              <option value="38">A#4</option>
              <option value="39">A4</option>
              <option value="40">G#4</option>
              <option value="41">G4</option>
              <option value="42">F#4</option>
              <option value="43">F4</option>
              <option value="44">E4</option>
              <option value="45">D#4</option>
              <option value="46">D4</option>
              <option value="47">C#4</option>
              <option value="48">C4</option>
              <option value="49">B3</option>
              <option value="50">A#3</option>
              <option value="51">A3</option>
              <option value="52">G#3</option>
              <option value="53">G3</option>
              <option value="54">F#3</option>
              <option value="55">F3</option>
              <option value="56">E3</option>
              <option value="57">D#3</option>
              <option value="58">D3</option>
              <option value="59">C#3</option>
              <option value="60">C3</option>
              <option value="61">B2</option>
              <option value="62">A#2</option>
              <option value="63">A2</option>
              <option value="64">G#2</option>
              <option value="65">G2</option>
              <option value="66">F#2</option>
              <option value="67">F2</option>
              <option value="68">E2</option>
              <option value="69">D#2</option>
              <option value="70">D2</option>
              <option value="71">C#2</option>
              <option value="72">C2</option>
            </select>
          </div>
          <div>
            <label>~NoteEnd</label>
            <select className="custom-file mt-3 mb-3" defaultValue={72} onChange={this.props.ChangeEndNote} style={{width: '100px'}}>
              <option value="1">B7</option>
              <option value="2">A#7</option>
              <option value="3">A7</option>
              <option value="4">G#7</option>
              <option value="5">G7</option>
              <option value="6">F#7</option>
              <option value="7">F7</option>
              <option value="8">E7</option>
              <option value="9">D#7</option>
              <option value="10">D7</option>
              <option value="11">C#7</option>
              <option value="12">C7</option>
              <option value="13">B6</option>
              <option value="14">A#6</option>
              <option value="15">A6</option>
              <option value="16">G#6</option>
              <option value="17">G6</option>
              <option value="18">F#6</option>
              <option value="19">F6</option>
              <option value="20">E6</option>
              <option value="21">D#6</option>
              <option value="22">D6</option>
              <option value="23">C#6</option>
              <option value="24">C6</option>
              <option value="25">B5</option>
              <option value="26">A#5</option>
              <option value="27">A5</option>
              <option value="28">G#5</option>
              <option value="29">G5</option>
              <option value="30">F#5</option>
              <option value="31">F5</option>
              <option value="32">E5</option>
              <option value="33">D#5</option>
              <option value="34">D5</option>
              <option value="35">C#5</option>
              <option value="36">C5</option>
              <option value="37">B4</option>
              <option value="38">A#4</option>
              <option value="39">A4</option>
              <option value="40">G#4</option>
              <option value="41">G4</option>
              <option value="42">F#4</option>
              <option value="43">F4</option>
              <option value="44">E4</option>
              <option value="45">D#4</option>
              <option value="46">D4</option>
              <option value="47">C#4</option>
              <option value="48">C4</option>
              <option value="49">B3</option>
              <option value="50">A#3</option>
              <option value="51">A3</option>
              <option value="52">G#3</option>
              <option value="53">G3</option>
              <option value="54">F#3</option>
              <option value="55">F3</option>
              <option value="56">E3</option>
              <option value="57">D#3</option>
              <option value="58">D3</option>
              <option value="59">C#3</option>
              <option value="60">C3</option>
              <option value="61">B2</option>
              <option value="62">A#2</option>
              <option value="63">A2</option>
              <option value="64">G#2</option>
              <option value="65">G2</option>
              <option value="66">F#2</option>
              <option value="67">F2</option>
              <option value="68">E2</option>
              <option value="69">D#2</option>
              <option value="70">D2</option>
              <option value="71">C#2</option>
              <option value="72">C2</option>
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