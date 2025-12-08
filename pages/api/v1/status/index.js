function status(request, response) {
  response.status(200).json({ chave: 'Você me achou!' })
}

export default status
