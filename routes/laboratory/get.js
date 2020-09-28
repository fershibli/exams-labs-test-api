const laboratoryControler = require('../../services/laboratory')

module.exports = router => {
  //list active laboratories
  router.get('/active', (req, res) =>{
    laboratoryControler
      .listActive()
      .then(result => {
        const activeLaboratories = result.rows
        return res.status(200).send(activeLaboratories)
      })
      .catch(err => res.status(406).send(err.message))
  })
  //new laboratory get routes can be added below
}