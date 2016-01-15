import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ImageSwiper from '../util/fio-swipe';

class Slide extends React.Component{

  constructor(props, context) {
   super(props);
   this.state = {
    items: ['hello', 'world', 'click', 'me']
   }
  }
  componentDidMount() {
    var imgs = new ImageSwiper(document.getElementById('imgs'), 150,true);
  }
  handleAdd() {
     var newItems =
       this.state.items.concat([prompt('Enter some text')]);
     this.setState({items: newItems});
   }

   handleRemove(i) {
     var newItems = this.state.items;
     newItems.splice(i, 1);
     this.setState({items: newItems});
   }


  render() {
    let style = {display: 'block',width:'100vw',overflow:'hidden'},
        imgstyle = {width:'100vw',float:'left'},
        imgs = this.props.img.map(img => <li><img src={img} style={imgstyle} /></li>),
        items = this.state.items.map(function(item, i) {
          return (
            <div key={item} onClick={this.handleRemove.bind(this, i)}>
              {item}
            </div>
          );
        }.bind(this));
    return (
      <div style={style}>
        <ul style={{width:'300%'}}>{imgs}</ul>
        <button onClick={this.handleAdd.bind(this)}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example" id="test">
          {items}
        </ReactCSSTransitionGroup>
        <div className="fio-slide">
          <div id="imgs">
            <div id="bg1" className="bg"></div>
            <div id="bg2" className="bg"></div>
            <div id="bg3" className="bg"></div>
            <div id="bg4" className="bg"></div>
            <div id="bg5" className="bg"> </div>
          </div>

          <div className="pagination-panel">
            <ul className="pagination">
              <li id="dot_0" className="page-dot"></li>
              <li id="dot_1" className="page-dot"></li>
              <li id="dot_2" className="page-dot"></li>
              <li id="dot_3" className="page-dot"></li>
              <li id="dot_4" className="page-dot"></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}


export default Slide;