function jsonp(url, onsuccess, onerror) {
  const hash = Math.random().toString(16).slice(2)
  const callbackName = `cb_${hash}`
  window[callbackName] = function(data) {
      onsuccess(data)
  }

  const script = document.createElement('script')

  script.onerror = function() {
      onerror()
  }

  script.src = `${url}?callback=${callbackName}`
  document.body.appendChild(script)
}
