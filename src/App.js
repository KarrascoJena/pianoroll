import React from 'react';
import { ShapeEditor, ImageLayer, DrawLayer, wrapShape } from 'react-shape-editor';

function arrayReplace(arr, index, item) {
  return [
    ...arr.slice(0, index),
    ...(Array.isArray(item) ? item : [item]),
    ...arr.slice(index + 1),
  ];
}

const RectShape = wrapShape(({ width, height }) => (
  <rect width={width} height={height} fill="rgba(0,0,255,0.5)" />
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

  onClick = (e) => {
    // alert('clicked');
    console.log(e.screenX)
    var x = e.screenX-69
    var y = e.screenY-105
    var width = 15
    var height = 15
    this.setState(state => ({
      items: [
        ...state.items,
        { id: `id${idIterator}`, x, y, width, height },
      ],
    }));
    idIterator += 1;
  };
  render() {
    const { items, vectorWidth, vectorHeight } = this.state;

    return (
      <div style={{ height: 400 }}>
        <div onClick={this.onClick.bind(this)}>
          <ShapeEditor vectorWidth={vectorWidth} vectorHeight={vectorHeight}>
              <ImageLayer
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
                  />
                );
              })}
          </ShapeEditor>
        </div>
      </div>
    );
  }
}