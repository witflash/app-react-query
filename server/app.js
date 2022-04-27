const express = require('express');
const data = require('./data');
const validator = require('./validator');

const app = express();
const port = process.env.PORT || 8080;
const endpoints = ['pages', 'content-blocks'];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is alive!')
});

endpoints.forEach(endpoint => {
  const pluralUrl = `/api/${endpoint}`;
  const singleUrl = `/api/${endpoint}/:id`;
  const type = endpoint.replace(/-[a-z]/g,substring => substring[1].toUpperCase());
  const entities = data[type];

  app.get(pluralUrl, (req, res) => {
    res.send(entities)
  });

  app.get(singleUrl, (req, res) => {
    const entity = entities.find(({ id }) => `${id}` === `${req.params.id}`);

    if (!entity) {
      res.status(404).send(`<h2>Entity not found!</h2>`);
    }

    res.send(entity);
  })

  app.post(singleUrl, (req, res) => {
    const { error } = validator[type].validate(req.body);

    if (!error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    const entity = {
      ...req.body,
      id: entities.length,
      type: endpoint.slice(0, -1),
    }

    entities.push(entity);
    res.send(entity);
  })

  app.put(singleUrl, (req, res) => {
    const entity = entities.find(({ id }) => `${id}` === `${req.params.id}`);

    if (!entity) {
      res.status(404).send(`<h2>Entity not found!</h2>`);
      return;
    }

    const { error } = validator[type].validate(req.body);

    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    Object.entries(req.body).forEach(([key, value]) => {
      entity[key] = value;
    })
    res.send(entity);
  })

  app.delete(singleUrl, (req, res) => {
    const entity = entities.find(({ id }) => `${id}` === `${req.params.id}`);

    if (!entity) {
      res.status(404).send(`<h2>Entity not found!</h2>`);
      return;
    }

    const index = entities.indexOf(entity);
    entities.splice(index, 1);
    res.send(true);
  })
})


app.listen(port, () => console.log(`Listening on port ${port}..`));
