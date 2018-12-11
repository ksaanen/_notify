(function(window){
  window._notify = ($message, $duration, $type) => {
    let el = document.createElement('div');
    el.setAttribute('role', 'alert');
  
    el.classList.add('notify', 'alert', `alert-${$type}`);
    el.innerText = $message;
    
    document.body.append(el);
  
    // Make notify enter screen
    setTimeout(()=>{
      el.classList.add('notify--enter');
    }, 0);
  
    // Make notify leave screen after duration end
    setTimeout(()=>{
      el.classList.add('notify--leave');
  
      // Wait for transition end befor removing element
      el.addEventListener("transitionend", function(event) {
        el.remove();
      }, false);
    }, $duration);
  };
})(window);