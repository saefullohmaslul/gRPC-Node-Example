const grpc = require('grpc')
const { notesPackageDefinition } = require('../..')

const client = new notesPackageDefinition.NoteService(
  '0.0.0.0:50051', grpc.credentials.createInsecure()
)

module.exports = client