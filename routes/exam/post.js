const examControler = require('../../services/exam')

module.exports = router => {
  //insert new exam
  router.post('/', (req, res) =>{
    const { name, type, status } = req.body
    examControler
      .insertExam(name, type, status)
      .then(result => res.status(200))
      .catch(err => res.status(406).send(err.message))
  })
  //new exam post routes can be added below
}