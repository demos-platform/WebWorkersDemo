const myWorker = new Worker('task.js')

myWorker.postMessage({
  test: 1,
})

myWorker.onmessage = function(e) {
  console.log('main.js', e)
}
