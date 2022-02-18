const express = require('express');
const bodyParser = require('body-parser');
const registeredPeople = require('./Middlewares/registeredPeople');
const getPeopleForID = require('./Middlewares/getPeopleForID');
const generateToken = require('./Middlewares/generateToken');
const { passwordExist, passwordLength } = require('./Middlewares/isValidPassword');
const { emailExist, validEmail } = require('./Middlewares/isValidEmail');
const createPerson = require('./Middlewares/createPerson');
const { validToken, tokenExist } = require('./Middlewares/validateToken');
const { nameExist, nameLength } = require('./Middlewares/validateName');
const { ageExist, verifiAge } = require('./Middlewares/validateAge');
const { talkExist, verifiDate, validRate, dateExist } = require('./Middlewares/validateDateAndRate');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/login', emailExist, validEmail, passwordExist, passwordLength, generateToken);

app.post('/talker', tokenExist, validToken, nameExist, nameLength,
  ageExist, verifiAge, talkExist, validRate, dateExist, verifiDate, createPerson);

app.get('/talker/:id', getPeopleForID);

app.get('/talker', registeredPeople);

app.listen(PORT, () => {
  console.log('Online');
});
