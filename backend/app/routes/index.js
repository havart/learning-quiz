const questionsRoutes = require('./questions_routes');
const usersRoutes = require('./users_routes');
const quizRoutes = require('./quiz_routes');

module.exports = function(app, db) {
  questionsRoutes(app, db);
  usersRoutes(app, db);
  quizRoutes(app, db);
};
