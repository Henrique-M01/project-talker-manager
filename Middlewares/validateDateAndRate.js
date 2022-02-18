function talkExist(req, res, next) {
  const { talk } = req.body;
  if (!talk) {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
     });
  }

  next();
}

function dateExist(req, res, next) {
  const { watchedAt } = req.body.talk;
  if (!watchedAt) {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  next();
}

function verifiDate(req, res, next) {
  const { talk } = req.body;
  const validation = /([0-9]{2})\/([0-9]{2})\/([0-9]{4})/; // Regex pego com Paulo Flóra.
  if (!validation.test(talk.watchedAt)) {
    return res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }

  next();
}

const validRate = (req, res, next) => {
  const { rate } = req.body.talk;
  if (!rate) {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  if (Number(rate) < 1 || Number(rate) > 5) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }
  next();
};

module.exports = {
  talkExist,
  dateExist,
  verifiDate,
  validRate,
};
