import React from 'react';

export default class TimeLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      vectorWidth: 0,
      vectorHeight: 0,
    };
  }

  render() {
    const timeLine= []
    const width = 400*8 + 100
    for (var i = 1; i < 9; i++){
      if(i == 1){
        timeLine.push(<div style={{width: '500px', height: '20px', paddingLeft: '100px', border: '1px solid rgba(0, 0, 0, 0.23)', backgroundColor: '#555', color: 'white', fontSize: '12px'}}>{i}</div>)
        continue
      }
      timeLine.push(<div style={{width: '400px', height: '20px', border: '1px solid rgba(0, 0, 0, 0.23)', backgroundColor: '#555', color: 'white', fontSize: '12px'}}>{i}</div>)
    }
    return (
      <div id="timeline" style={{display: 'flex', width: width, position: '-webkit-sticky', position: 'sticky', top: '50px', zIndex: '1000'}}>
        {timeLine}
      </div>
    );
  }
}