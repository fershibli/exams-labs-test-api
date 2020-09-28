const examControler = require('../../services/exam')

module.exports = router => {
  //insert new exam
  router.post('/', (req, res) =>{
    const { name, type, status } = req.body
    examControler
      .insertExam(name, type, status)
      .then(result => {
        const id = result.rows[0].id
        return res.status(200).send('Successfuly inserted new exam with id='+id)
      })
      .catch(err => res.status(406).send(err.message))
  })
  //new exam post routes can be added below
}