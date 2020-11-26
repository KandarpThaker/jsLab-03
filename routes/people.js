const { byId , index ,person } = require('../controllers/people');


module.exports = router => {
  router.get('/people', person);
  router.get('/people/id', byId);
  return router;
};