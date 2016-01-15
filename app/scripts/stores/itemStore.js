import Reflux from 'reflux';
import ItemActions from '../actions/itemActions';
import ApiUrl from '../util/constants';

let ItemStore = Reflux.createStore({
  listenables: ItemActions,
  
  init() {
    this.items = [];
  },

  loadItems(nodeid) {
    this.trigger({ 
      loading: true
    });
    console.log(nodeid);
    if(nodeid){
      this.apiurl = ApiUrl[nodeid];
    }else{
    this.apiurl = ApiUrl['default'];}
  },

  loadItemsCompleted(items) {
    // this.items = items;
    $.ajax({
        url: this.apiurl,
        dataType: 'json',
        cache: true,
        success: function(data) {
            this.items = data;
            this.trigger({ 
              items : this.items,
              loading: false
            });
        }.bind(this),
        error: function(e) {
          /* Act on the event */
           console.log('error');
           //console.log(e);
        } 
    });
  },

  loadItemsFailed(error) {
    this.trigger({ 
      error : error,
      loading: false
    });
  }

});

export default ItemStore;