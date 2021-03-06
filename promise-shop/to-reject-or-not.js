require('es6-promise')

const promise = new Promise((fulfill, reject) => {
  fulfill('I FIRED')
  reject(new Error('I DID NOT FIRE'))
})

const onReject = (error) => {
  console.log(error.message);
}

promise.then(console.log, onReject)
