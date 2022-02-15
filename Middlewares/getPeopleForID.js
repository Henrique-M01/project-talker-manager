const fs = require('fs/promises');

async function getPeopleForID(req, res) {
  const { id } = req.params;
  const data = await fs.readFile('talker.json', 'utf-8');
  const dataForArray = JSON.parse(data);
  const person = dataForArray.find((file) => file.id === Number(id));
  if (person) return res.status(200).json(person);
  return res.status(404).json({
    message: 'Pessoa palestrante não encontrada',
  });
}

module.exports = getPeopleForID;
