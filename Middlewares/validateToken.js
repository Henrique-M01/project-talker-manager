const fs = require('fs');

function tokenExist(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: 'Token não encontrado',
    });
  }

  next();
}

function validToken(req, res, next) {
  const { authorization } = req.headers;
  const data = fs.readFileSync('token.txt', 'utf-8');
  if (authorization !== data) {
    return res.status(401).json({
      message: 'Token inválido',
    });
  }

  next();
}

module.exports = {
  tokenExist,
  validToken,
};
