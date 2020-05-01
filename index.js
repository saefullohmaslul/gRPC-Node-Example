const app = require('./app')
const notesServer = require('./grpc/notes/server')

app.listen(5000, () => {
  console.log(`App running on port: 5000`)
})

notesServer.start()
console.log('Server running at http://localhost:50051')