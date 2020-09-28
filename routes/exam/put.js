const examControler = require('../../services/exam')

module.exports = router => {
  //update existing exam
  router.put('/:id', (req, res) =>{
    const { name, type, status } = req.body
    const id = parseInt(req.params.id)
    if (id == null || id == undefined){
      return res.status(406).send('must provide id to update')
    }
    examControler
      .updateExam(id, name, type, status)
      .then(result => {
        return res.status(200).send(result.rows[0])
      })
      .catch(err => res.status(406).send(err.message))
  })
  //new exam put routes can be added below
}