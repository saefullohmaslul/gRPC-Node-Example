const success = (res, result, message) => {
  res.status(200).json({
    status: 200,
    message,
    result
  })
}

const error = (res, code, errors) => {
  res.status(code).json({
    status: code,
    errors
  })
}

module.exports = {
  resSuccess: success,
  resError: error
}