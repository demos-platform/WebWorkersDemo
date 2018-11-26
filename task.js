self.onmessage = function(e) {
  console.log('task.js', e.data)
}

self.postMessage('task.js receive the message')