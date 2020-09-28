const laboratoryControler = require('../../services/laboratory')

module.exports = router => {
  //insert new laboratory
  router.post('/', (req, res) =>{
    const { name, address, status } = req.body
    laboratoryControler
      .insertLaboratory(name, address, status)
      .then(result => {
        const id = result.rows[0].id
        return res.status(200).send('Successfuly inserted new laboratory with id='+id)
      })
      .catch(err => res.status(406).send(err.message))
  })
  //new laboratory post routes can be added below
}