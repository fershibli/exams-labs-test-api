const laboratoryControler = require('../../services/laboratory')

module.exports = router => {
  //update existing laboratory
  router.put('/:id', (req, res) =>{
    const { name, address, status } = req.body
    const id = parseInt(req.params.id)
    if (id == null || id == undefined){
      return res.status(406).send('must provide id to update')
    }
    laboratoryControler
      .updateLaboratory(id, name, address, status)
      .then(result => {
        return res.status(200).send(result.rows[0])
      })
      .catch(err => res.status(406).send(err.message))
  })
  //new laboratory put routes can be added below
}