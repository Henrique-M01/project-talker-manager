function ageExist(req, res, next) {
  const { age } = req.body;
  if (!age || age === '') {
    return res.status(400).json({
      message: 'O campo "age" é obrigatório',
    });
  }

  next();
}

function verifiAge(req, res, next) {
  const { age } = req.body;
  if (age < 18) {
    return res.status(400).json({
        message: 'A pessoa palestrante deve ser maior de idade',
      });
  }

  next();
}

module.exports = {
  ageExist,
  verifiAge,
};
