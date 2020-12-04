import React from 'react';
import { ShapeEditor, ImageLayer, wrapShape } from '../react-shape-editor'
function arrayReplace(arr, index, item) {
  return [
    ...arr.slice(0, index),
    ...(Array.isArray(item) ? item : [item]),
    ...arr.slice(index + 1),
  ];
}

function PianorollContentClass(noteLength) {
  switch (noteLength){
    case 6:
      return "piano-roll-row-16";
    case 12:
      return "piano-roll-row-8";
    case 24:
      return "piano-roll-row-4";
    case 48:
      return "piano-roll-row-2";
    default:
      return "piano-roll-row-4";
  }
}
const RectShape = wrapShape(({ width, height }) => (
  <rect width={width} height={height} fill="rgba(0,0,255,0.5)"/>
));

let idIterator = 1;

export default class PianoContent extends React.Component {
  static getDerivedStateFromProps(props, state) {

    if (props.noteStart !== state.note_start || props.noteEnd !== state.note_end || props.gridSize !== state.noteLength || props.noteItems !== state.items) {
      var vectorHeight = 15*(props.noteEnd - props.noteStart + 1)
      return { vectorHeight: vectorHeight, noteLength: props.gridSize, items: props.noteItems };
    }
    if (props.contentLength !== state.length) {
      return { length: props.contentLength, vectorWidth: props.contentLength*384 };
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      items: this.props.noteItems,
      length: this.props.contentLength,
      vectorWidth: 3072,
      vectorHeight: 15*(this.props.noteEnd - this.props.noteStart + 1),
      note_start: this.props.noteStart,
      note_end: this.props.noteEnd,
      actionType: false,
      noteLength: this.props.gridSize,
    };
  }
  
  render() {
    const { items, vectorWidth, vectorHeight } = this.state;
    const ContentClass = PianorollContentClass(parseInt(this.state.noteLength))
    return (
      <div>
        <div className={ContentClass} onClick={this.props.mouseClick} onContextMenu={this.props.mouseClick} id="pianoroll">
          <ShapeEditor vectorWidth={vectorWidth} vectorHeight={vectorHeight}>
            <ImageLayer data-id='123' src="./assets/whiteback.png" onLoad={({ naturalWidth, naturalHeight }) => {}}/>
            
            {items.map((item, index) => {
              const { id, height, width, x, y } = item;
              return (
                <RectShape key={id} shapeId={id} height={height} width={width} x={x} y={y}
                  onChange={(newRect) => this.props.onChange(newRect, event, x, y, width, height, index, item)}
                  onDelete={() => {
                    this.setState(state => ({
                      items: arrayReplace(state.items, index, []),
                    }));
                  }}
                />
              );
            })}
          </ShapeEditor>
        </div>
      </div>
    );
  }
}