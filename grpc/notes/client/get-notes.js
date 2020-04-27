const client = require('.')

const getNotes = async () => {
  try {
    const notes = await new Promise((resolve, reject) => {
      client.list({}, (error, notes) => {
        if (!error) resolve(notes)
        reject(error)
      })
    })

    return notes
  } catch (error) {
    throw error
  }
}

module.exports = getNotes