import React from 'react';

class Loading extends React.Component{

  constructor(props, context) {
   super(props);
  }


  render() {
    return (
      <div className="loading">
        <div className="lod-spinn">
          <div className="lod-double-bounce1"></div>
          <div className="lod-double-bounce2"></div>
          <div className="lod-text">加载中...</div>
        </div>
      </div>
    );
  }

}


export default Loading;