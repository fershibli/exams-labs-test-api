const examControler = require('../../services/exam')

module.exports = router => {
  //update existing exam
  router.delete('/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    if (id == null || id == undefined){
      return res.status(406).send('must provide id to delete')
    }
    examControler
      .removeExam(id)
      .then(result => {
        const id = result.rows[0].id
        return res.status(200).send('Successfuly removed new exam with id='+id)
      })
      .catch(err => res.status(406).send(err.message))
  })
  //new exam delete routes can be added below
}