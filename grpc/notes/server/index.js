const grpc = require('grpc')
const { notesPackageDefinition } = require('../..')

const list = (call, callback) => {
  try {
    const notes = [
      { id: '1', title: 'Note 1', content: 'Content 1' },
      { id: '2', title: 'Note 2', content: 'Content 2' }
    ]
    return callback(null, { notes })
  } catch (error) {
    return callback(error, null)
  }
}


const server = new grpc.Server()
server.addService(notesPackageDefinition.NoteService.service, {
  list
})

server.bind(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure()
)
server.start()
console.log('Server running at http://localhost:50051')