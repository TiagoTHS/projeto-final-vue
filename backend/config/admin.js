module.exports = middleware => {
  return (req, res, next) => {
    // é possível acessar req.user pois foi alocado no strategy do passport a partir do token
    // então pode-se pegar infos do user na própria requisição
    if(req.user.admin) {
      middleware(req, res, next)
    } else {
      res.status(401).send('Usuário não é administrador.')
    }
  }
}