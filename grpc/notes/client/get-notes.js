const client = require('.')

client.list({}, (error, notes) => {
  if (!error) {
    return console.log(notes)
  }
  return console.log(error)
})