const app = require('./config/express')();
const port = app.get('port')
const routes = require('./routes');

routes(app)

app.listen(port, () => console.log('Server running at port '+port))