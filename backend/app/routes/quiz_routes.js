const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.get('/quizzes', (req, res) => {
    db.collection('quizzes').find().toArray(
        (err, result) => {
          if (err) {
            res.send({'error': 'An error has occurred'});
          } else {
            res.send(result);
          }
        });
  });
  app.get('/quizzes/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    db.collection('quizzes').findOne(details, (err, result) => {
      if (err) {
        res.send({
          error: 'Invalid id',
        });
      } else {
        res.send(result);
      }
    });
  });
  app.post('/quizzes', (req, res) => {
    const quiz = {
      title: req.body.title,
      description: req.body.description,
      questionsArray: req.body.questionsArray,
    };
    db.collection('quizzes').insertOne(quiz, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  app.delete('/quizzes/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    db.collection('quizzes').findOneAndDelete(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send({'result': 'quiz ' + id + ' deleted!'});
      }
    });
  });
  app.put('/quizzes/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    const quiz = {
      title: req.body.title,
      description: req.body.description,
      questionsArray: req.body.questionsArray,
    };
    db.collection('quizzes').updateOne(details, quiz, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(quiz);
      }
    });
  });
};
