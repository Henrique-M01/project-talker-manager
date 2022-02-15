const fs = require('fs/promises');

async function registeredPeople(_req, res) {
  const data = await fs.readFile('talker.json', 'utf-8');
  if (data) return res.status(200).json(JSON.parse(data));
  return res.status(200).json([]);
}

module.exports = registeredPeople;
