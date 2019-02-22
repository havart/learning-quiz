const ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
  app.get('/users/:id', (req, res) => {
    db.collection('users').find().toArray(
        (err, result) => {
          if (err) {
            res.send({'error': 'An error has occurred'});
          } else {
            res.send(result);
          }
        });
  });
  app.post('/users', (req, res) => {
    const user = {
      login: req.body.login,
      email: req.body.email,
      password: req.body.password,
      bestResHTML: req.body.bestResHTML,
      bestResCSS: req.body.bestResCSS,
      bestResJS: req.body.bestResJS,
      bestResMix: req.body.bestResMix,
    };
    db.collection('users').insertOne(user, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    db.collection('users').findOneAndDelete(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send({'result': 'User ' + id + ' deleted!'});
      }
    });
  });
  app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    const user = {
      login: req.body.login,
      email: req.body.email,
      password: req.body.password,
      bestResHTML: req.body.bestResHTML,
      bestResCSS: req.body.answer2,
      bestResJS: req.body.bestResJS,
      bestResMix: req.body.bestResMix,
    };
    db.collection('users').updateOne(details, user, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(user);
      }
    });
  });
};
