let express = require('express');

let apiSiswa = require("./DataSiswa");

let app = express();

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send("Selamat Datang Di Data Center Siswa Indonesia."));

app.use('/DataSiswa', apiSiswa);
app.listen(port, function() {
  console.log("Running Resthub on port" + port);
})
