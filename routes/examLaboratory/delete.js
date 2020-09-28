const examLaboratoryControler = require('../../services/examLaboratory')

module.exports = router => {
  //delete existing relation
  router.delete('/:exam_id/:laboratory_id', (req, res) =>{
    const exam_id = parseInt(req.params.exam_id)
    const laboratory_id = parseInt(req.params.laboratory_id)
    if (exam_id == null || exam_id == undefined ||
      laboratory_id == null || laboratory_id == undefined){
      return res.status(406).send('must provide exam_id andlaboratory_id  to delete')
    }
    examLaboratoryControler
      .deleteExamLaboratory(exam_id, laboratory_id)
      .then(result => {
        return res.status(200).send('Successfuly removed relation '+{ exam_id, laboratory_id })
      })
      .catch(err => res.status(406).send(err.message))
  })
  //new examLaboratory delete routes can be added below
}