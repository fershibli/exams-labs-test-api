const examLaboratoryControler = require('../../services/examLaboratory')

module.exports = router => {
  //insert new exam
  router.post('/', (req, res) =>{
    const { exam_id, laboratory_id } = req.body
    examLaboratoryControler
      .insertExamLaboratory(exam_id, laboratory_id)
      .then(result => {
        return res.status(200).send('Successfuly inserted new relation ' + JSON.stringify({ exam_id, laboratory_id }))
      })
      .catch(err => res.status(406).send(err.message))
  })
  //new exam post routes can be added below
}