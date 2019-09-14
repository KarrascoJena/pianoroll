import React from 'react';
import { ShapeEditor, ImageLayer, DrawLayer, wrapShape } from '../react-shape-editor'
function arrayReplace(arr, index, item) {
  return [
    ...arr.slice(0, index),
    ...(Array.isArray(item) ? item : [item]),
    ...arr.slice(index + 1),
  ];
}

const RectShape = wrapShape(({ width, height }) => (
  <rect width={width} height={height} fill="rgba(0,0,255,0.5)"/>
));

let idIterator = 1;

export default class PianoContent extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.noteStart !== state.note_start || props.noteEnd !== state.note_end) {
      var vectorHeight = 180*(props.noteEnd - props.noteStart + 1)
      return { vectorHeight: vectorHeight };
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      vectorWidth: 3200,
      vectorHeight: 180*(this.props.noteEnd - this.props.noteStart + 1),
      note_start: this.props.noteStart,
      note_end: this.props.noteEnd,
      actionType: false
    };
  }

  mouseClick = (e) => {
    var obj = document.getElementById('pianoroll').getBoundingClientRect();
    if(e.type == 'contextmenu'){
      var key = e.returnValue
      var items = this.state.items
      items = items.filter(function( obj ) {
        return obj.id !== key;
      });
      this.setState({items: items})
      event.preventDefault();

    } else {
      if(!this.state.actionType){
        var x = e.screenX-obj.x
        var y = e.screenY-obj.top-70
        var re = (x%25)
        x = x - re;
        var re = (y%15)
        y = y - re;
        var width = 23
        var height = 15
        this.setState(state => ({
          items: [
            ...state.items,
            { id: `id${idIterator}`, x, y, width, height },
          ],
        }));
        idIterator += 1
      }
      this.setState({actionType: false})
    }
  };
  render() {
    const { items, vectorWidth, vectorHeight } = this.state;

    return (
      <div>
        <div className="piano-roll-row piano-roll-coll" onClick={this.mouseClick.bind(this)} onContextMenu={this.mouseClick.bind(this)} id="pianoroll">
          <ShapeEditor vectorWidth={vectorWidth} vectorHeight={vectorHeight}>
            <ImageLayer
              data-id='123'
              src="./assets/whiteback.png"
              onLoad={({ naturalWidth, naturalHeight }) => {
              }}
            />
            
            {items.map((item, index) => {
              const { id, height, width, x, y } = item;
              return (
                <RectShape
                  key={id}
                  shapeId={id}
                  height={height}
                  width={width}
                  x={x}
                  y={y}
                  onChange={(newRect, event) => {
                    var re = newRect.x%25
                    newRect.x = newRect.x - re
                    var re = newRect.y%15
                    if(re > 7){
                      newRect.y = newRect.y + 15 - re
                    }else {
                      newRect.y = newRect.y - re
                    }
                    this.setState(state => ({
                      items: arrayReplace(state.items, index, {
                        ...item,
                        ...newRect,
                      }),
                    }));
                    this.setState({actionType: true})
                  }}
                  onDelete={() => {
                    this.setState(state => ({
                      items: arrayReplace(state.items, index, []),
                    }));
                  }}
                  onChildToggleSelection={() => {
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