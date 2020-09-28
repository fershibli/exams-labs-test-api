const laboratoryControler = require('../../services/laboratory')

module.exports = router => {
  //update existing laboratory
  router.delete('/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    if (id == null || id == undefined){
      return res.status(406).send('must provide id to delete')
    }
    laboratoryControler
      .removeLaboratory(id)
      .then(result => {
        const id = result.rows[0].id
        return res.status(200).send('Successfuly removed new laboratory with id='+id)
      })
      .catch(err => res.status(406).send(err.message))
  })
  //new laboratory delete routes can be added below
}