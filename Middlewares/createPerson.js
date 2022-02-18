const fs = require('fs');

function createPerson(req, res) {
  const { name, age, talk } = req.body;
  const data = fs.readFileSync('talker.json', 'utf-8');
  const dataJson = JSON.parse(data);
  const id = dataJson[dataJson.length - 1].id + 1;
  const person = {
    id,
    name,
    age,
    talk,
  };
  const saveData = [...dataJson, person];
  fs.writeFileSync('talker.json', JSON.stringify(saveData));
  return res.status(201).json(person);
}

module.exports = createPerson;
