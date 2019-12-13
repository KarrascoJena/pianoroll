import React from 'react';

export default class TimeLine extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.contentLength !== state.length ) {
      return { length: props.contentLength };
    }
    return null;
  }
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      vectorWidth: 0,
      vectorHeight: 0,
      length: this.props.contentLength
    };
  }

  render() {
    const timeLine= []
    const width = 400*this.state.length + 100
    for (var i = 0; i < this.state.length; i++){
      if(i === 0){
        timeLine.push(<div key={i} style={{width: '500px', height: '20px', paddingLeft: '100px', border: '1px solid rgba(0, 0, 0, 0.23)', backgroundColor: '#555', color: 'white', fontSize: '12px'}}>{i+1}</div>)
        continue
      }
      timeLine.push(<div key={i} style={{width: '400px', height: '20px', border: '1px solid rgba(0, 0, 0, 0.23)', backgroundColor: '#555', color: 'white', fontSize: '12px'}}>{i+1}</div>)
    }
    return (
      <div id="timeline" style={{display: 'flex', width: width, position: 'sticky', top: '0px', zIndex: '1000'}}>
        {timeLine}
      </div>
    );
  }
}