import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';
import Slide from '../components/slide.jsx';


class Home extends React.Component {

  constructor(props){
    super(props);
    this.imgs = {
      img:["http://store.dianrong.com/media/catalog/category/_banner.jpg","http://store.dianrong.com/media/catalog/category/_banner.jpg","http://store.dianrong.com/media/catalog/category/_banner_1.jpg"]
    }
    this.state = {
      items : [],
      loading: false,
      node:this.props.params.nodeId
    };
  }

  componentDidMount() {
    this.unsubscribe = ItemStore.listen(this.onStatusChange.bind(this));
    ItemActions.loadItems(this.props.params.nodeId);
  }

  componentWillReceiveProps(){
    ItemActions.loadItems(this.props.params.nodeId);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className="home-main">
        <h1>今天的<i>2015.12.9</i>{this.props.params.nodeId}</h1>
        <ItemList { ...this.state } />

      </div>
    );
  }
}

export default Home;