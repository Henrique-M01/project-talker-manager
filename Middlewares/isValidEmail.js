function emailExist(req, res, next) {
  const { email } = req.body;
  if (!email || email === '') {
    return res.status(400).json({
      message: 'O campo "email" é obrigatório',
    });
  }

  next();
}

function validEmail(req, res, next) {
  const { email } = req.body;
  const regexValidation = /\S+@\S+\.\S+/;
  const validationEmail = regexValidation.test(email);
  if (!validationEmail) {
    return res.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }

  next();
}

module.exports = {
  emailExist,
  validEmail,
}; 
