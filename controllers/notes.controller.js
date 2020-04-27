const getNotes = require('../grpc/notes/client/get-notes')
const { resError, resSuccess } = require('../utils/response')

class NotesController {
  async get(req, res) {
    try {
      const { notes } = await getNotes()

      return resSuccess(res, notes, 'Success get all note')
    } catch (error) {
      return resError(res, 500, [{
        flag: 'INTERNAL_SERVER_ERROR',
        message: 'Failed get all note'
      }])
    }
  }
}

module.exports = new NotesController()