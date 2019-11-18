let router = require('express').Router();

router.get('/', function(req, res) {
  res.json({
    Nama : 'Richard Muhammad',
    TanggalLahir : '14 Januari 1994',
    JenisKelamin: 'Laki-laki',
    Hobi: 'Membaca Buku'
  });
});
module.exports = router;
