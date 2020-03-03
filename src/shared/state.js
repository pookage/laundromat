// SUBSCRIPTION CONFIG
// configure the proxy behaviour to allow for susbcribe / unsubscribe
// ---------------------------------
const subscriptionConfig = {
  subscriptions: [],
  
  subscribe(key, callback){
    this.subscriptions.push({
      key, callback
    });
  },
  
  unsubscribe(targetKey, targetCallback){
    this.subscriptions = this.subscriptions.filter(({ key, callback }) => (
      key !== targetKey && callback !== targetCallback
    ));
  },
  
  set(obj, key, value){
    switch(key){
      // not allowed to change these values     
      case "subscribe":
      case "unsubscribe":
      case "subscriptions":
        // report failure
        return false;
      
      default: {

        // change the key
        obj[key] = value;

        // then fire any callbacks related to the changed key
        for(let { key: target, callback } of this.subscriptions){
          if(key === target) callback(key, value)
        }
        
        // report success
        return true;
      }
    }
  },
  
  get(obj, key){
    switch(key){
      case "subscribe":
        return this.subscribe.bind(this);
      case "unsubscribe":
        return this.unsubscribe.bind(this);
      case "subscriptions":
        return this.subscriptions;
      default:
        return obj[key];
    }
  }
};

const initialState = {
	muted: true
};

const state = new Proxy(initialState, subscriptionConfig);

export default state;