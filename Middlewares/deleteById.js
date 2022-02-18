const fs = require('fs');

function deleteById(req, res) {
  const { id } = req.params;
  const talkers = JSON.parse(fs.readFileSync('talker.json', 'utf-8'));
  const talkerById = talkers.filter((talker) => talker.id !== Number(id));
  fs.writeFileSync('talker.json', JSON.stringify(talkerById));
  return res.status(204).end();
}

module.exports = deleteById;
