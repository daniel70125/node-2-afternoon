let express = require("express");
let app = express();
let ctrl = require("./controllers/messages_controller");
const SERVER_PORT = 3001;

app.use(express.json());

app.post('/api/messages', ctrl.create)
app.get('/api/messages', ctrl.read);
app.put('/api/messages/:id', ctrl.update)
app.delete(`/api/messages/:id`, ctrl.delete)

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}` ));