const ObjectID = require('mongodb').ObjectID;
const QUESTION_AMOUNT = 10;

module.exports = function(app, db) {
  app.get('/questions', (req, res) => {
    db.collection('questions').find().toArray(
        (err, result) => {
          if (err) {
            res.send({
              'error': 'An error has occurred',
            });
          } else {
            res.send(result);
          }
        });
  });
  app.get('/questions/:param', (req, res) => {
    const param = req.params.param;
    const category = +param;
    if (isNaN(category)) {
      const details = {
        _id: new ObjectID(param),
      };
      db.collection('questions').findOne(details, (err, result) => {
        if (err) {
          res.send({
            error: 'Invalid id',
          });
        } else {
          res.send(result);
        }
      });
    } else {
      const details = {
        category,
      };
      db.collection('questions').find(details).limit(QUESTION_AMOUNT).toArray(
          (err, result) => {
            if (err) {
              res.send({
                error: 'Invalid category',
              });
            } else {
              res.send(result);
            }
          },
      );
    }
  });
  app.post('/questions', (req, res) => {
    const quest = {
      question: req.body.question,
      category: req.body.category,
      answer1: req.body.answer1,
      answer2: req.body.answer2,
      answer3: req.body.answer3,
      answer4: req.body.answer4,
    };
    db.collection('questions').insertOne(quest, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });
  app.delete(`/questions/:id`, (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    db.collection('questions').findOneAndDelete(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send({'result': 'Question ' + id + ' deleted!'});
      }
    });
  });
  app.put(`/questions/:id`, (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    const quest = {
      question: req.body.question,
      category: req.body.category,
      answer1: req.body.answer1,
      answer2: req.body.answer2,
      answer3: req.body.answer3,
      answer4: req.body.answer4,
    };
    db.collection('questions').updateOne(details, quest, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(quest);
      }
    });
  });
};
