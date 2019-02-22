const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.get('/answers', (req, res) => {
    db.collection('answers').find().toArray(
        (err, result) => {
          if (err) {
            res.send({'error': 'An error has occurred'});
          } else {
            res.send(result);
          }
        });
  });
  app.get('/answers/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    db.collection('answers').findOne(details, (err, result) => {
      if (err) {
        res.send({
          error: 'Invalid id',
        });
      } else {
        res.send(result);
      }
    });
  });
  app.post('/answers', (req, res) => {
    const quiz = {
      title: req.body.title,
      description: req.body.description,
      questionsArray: req.body.questionsArray,
    };
    db.collection('answers').insertOne(quiz, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  app.delete('/answers/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    db.collection('answers').findOneAndDelete(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send({'result': 'answer ' + id + ' deleted!'});
      }
    });
  });
  app.put('/answers/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    const quiz = {
      title: req.body.title,
      description: req.body.description,
      questionsArray: req.body.questionsArray,
    };
    db.collection('answers').updateOne(details, quiz, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(quiz);
      }
    });
  });
};
