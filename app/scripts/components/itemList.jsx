import React from 'react';
import Loading from './loading.jsx';
import Itemdetail from './itemdetail.jsx';


class ItemList extends React.Component{

  constructor(props, context) {
   super(props);
  }
  showtest(){
    $('#animatedModal').css("display","flex");
    $("#animatedModal").attr("class", "animated animatedModal-on zoomIn");
    $('.thumb.a1').addClass('ac');
    setTimeout(function() {
       $('.thumb.a2').addClass('ac');
    }, 300);
    setTimeout(function() {
       $('.thumb.a3').addClass('ac');
    }, 600);
  }

  render() {
    let items = this.props.items.map(item =>
      <li key={ item.id } onClick={this.showtest.bind(this)}>
        <a className="item-left">
          <i className="fa fa-sort-asc"></i>
          <span className="num">{item.votes}</span>
        </a>
        <div className="item-middle">
        </div>
        <div className="item-midddlecontent">
          <h2>{ item.title }</h2>
          <h3>{ item.description }</h3>
          <div className="banners">
             {item.keywords.map(key => <span>{key}</span>)}
          </div>
        </div>
        <div className="item-right">
          <i className="fa fa-columns hide"></i>
          <i className="fa fa-indent hide"></i>
          <div className="img">
            <img className="img" src={item.avatar} />
          </div>
          <i className="fa fa-commenting-o"></i>
          <span className="pl">{item.comments}</span>
        </div>
      </li>
      ),
      loading = this.props.loading ? <Loading /> : '';

    return (
      <div className="items">
        {loading}
        <ul className="home-items">
          {items}
        </ul>
        <Itemdetail />
      </div>
    );
  }

}

ItemList.propTypes = {
  loading : React.PropTypes.bool,
  items : React.PropTypes.array
}

export default ItemList;