const express = require('express');
const protobuf = require('protobufjs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const personData = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
};

let PersonMessage;
protobuf.load("person.proto", (err, root) => {
  if (err) throw err;
  PersonMessage = root.lookupType("Person");

  // Start the server after protobuf is loaded
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});

// JSON endpoint
app.get('/json', (req, res) => {
  res.json(personData);
});
app.post('/json', (req, res) => {
  const body = req.body || {};
  if (!PersonMessage) return res.status(500).json({ error: "Proto not loaded" });

  const errMsg = PersonMessage.verify(body);
  if (errMsg) return res.status(400).json({ error: errMsg });

  personData.name = body.name ?? personData.name;
  personData.age = body.age ?? personData.age;
  personData.email = body.email ?? personData.email;

  res.status(201).json(personData);
});

// Protobuf endpoint
app.get('/protobuf', (req, res) => {
  if (!PersonMessage) return res.status(500).send("Proto not loaded");

  const errMsg = PersonMessage.verify(personData);
  if (errMsg) return res.status(400).send(errMsg);

  const message = PersonMessage.create(personData);
  const buffer = PersonMessage.encode(message).finish();

  res.set('Content-Type', 'application/x-protobuf');
  res.send(buffer);
});

app.post('/protobuf', (req, res) => {
  const body = req.body || {};
  if (!PersonMessage) return res.status(500).json({ error: "Proto not loaded" });

  const errMsg = PersonMessage.verify(body);
  if (errMsg) return res.status(400).json({ error: errMsg });

  const message = PersonMessage.create(body);
  const buffer = PersonMessage.encode(message).finish();
  
  res.set('Content-Type', 'application/x-protobuf');
  res.send(buffer);
});