class Exception {
  errorHandler(server) {
    server.use((err, req, res, next) => {
      res.status(500).json({
        status: 500,
        flag: 'INTERNAL_SERVER_ERROR',
        errors: []
      })
    })
  }
}

module.exports = new Exception()