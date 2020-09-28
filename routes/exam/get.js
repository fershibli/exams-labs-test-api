const examControler = require('../../services/exam')

module.exports = router => {
  //list active exams
  router.get('/active', (req, res) =>{
    examControler
      .listActive()
      .then(result => {
        const activeExams = result.rows
        return res.status(200).send(activeExams)
      })
      .catch(err => res.status(406).send(err.message))
  })
  //new exam get routes can be added below
}