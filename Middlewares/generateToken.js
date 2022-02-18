const crypto = require('crypto');
const fs = require('fs/promises');

async function generateToken(_req, res) {
  const token = crypto.randomBytes(8).toString('hex');
  await fs.writeFile('token.txt', token);
  return res.status(200).json({ token });
}

module.exports = generateToken;
