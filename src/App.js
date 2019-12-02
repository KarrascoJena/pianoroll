import React from 'react';
import { ShapeEditor, ImageLayer, DrawLayer, wrapShape } from './react-shape-editor'
import Header from './roll-header'
import LeftPianoRoll from './sub/LeftPianoRoll'
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

export default class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      vectorWidth: 0,
      vectorHeight: 0,
    };
  }

  mouseClick = (e) => {
    var obj = document.getElementById('pianoroll').getBoundingClientRect();
    console.log(obj)
    if(e.type == 'contextmenu'){
      var key = e.returnValue
      var items = this.state.items
      items = items.filter(function( obj ) {
        return obj.id !== key;
      });
      this.setState({items: items})
      event.preventDefault();

    } else {
      var x = e.screenX-obj.x
      var y = e.screenY-obj.top-70
      console.log(e.screenY + " " + obj.y)
      var width = 20
      var height = 15
      this.setState(state => ({
        items: [
          ...state.items,
          { id: `id${idIterator}`, x, y, width, height },
        ],
      }));
      idIterator += 1;
    }
  };
  render() {
    const { items, vectorWidth, vectorHeight } = this.state;

    return (
      <div>
        <Header/>
        <LeftPianoRoll/>
        <div onClick={this.mouseClick.bind(this)} onContextMenu={this.mouseClick.bind(this)} id="pianoroll">
          <ShapeEditor vectorWidth={vectorWidth} vectorHeight={vectorHeight}>
              <ImageLayer
                data-id='123'
                src="./assets/whiteback.png"
                onLoad={({ naturalWidth, naturalHeight }) => {
                  this.setState({
                    vectorWidth: naturalWidth,
                    vectorHeight: naturalHeight,
                  });
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
                    onChange={newRect => {
                      this.setState(state => ({
                        items: arrayReplace(state.items, index, {
                          ...item,
                          ...newRect,
                        }),
                      }));
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