function nameExist(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') {
    return res.status(400).json({
      message: 'O campo "name" é obrigatório',
    });
  }

  next();
}

function nameLength(req, res, next) {
  const { name } = req.body;
  if (name.length < 3) {
    return res.status(400).json({
      message: 'O "name" deve ter pelo menos 3 caracteres',
    });
  }

  next();
}

module.exports = {
  nameExist,
  nameLength,
};
