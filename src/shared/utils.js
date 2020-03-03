export function debounce (callback){
  clearTimeout(this.timeout__debounce);
  this.timeout__debounce = setTimeout(callback, 150);
};