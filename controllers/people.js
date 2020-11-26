const peopleArr = require('../ppl.json');

exports.person = async(req, res, next) => {
     try{
         res.status(200).json(peopleArr);
     }
     catch(error){
         next(error);
     }
};

 exports.byId = async(req, res, next) => {
     try{
         const ppl = await peopleArr.find(req.params.Id);
         res.status(200).json(ppl);
     }
     catch(error){
         next(error)
     }
 };