const fs = require('fs');

function editTalker(req, res) {
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const data = JSON.parse(fs.readFileSync('talker.json', 'utf-8'));
  const dataIndex = data.findIndex((talker) => talker.id === Number(id));
  data[dataIndex].name = name;
  data[dataIndex].age = age;
  data[dataIndex].talk = talk;
  fs.writeFileSync('talker.json', JSON.stringify(data, null, 2));
  return res.status(200).json({
    name,
    age,
    id: Number(id),
    talk,
  });
}

module.exports = {
  editTalker,
};
