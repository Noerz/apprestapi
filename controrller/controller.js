'use strict';

var response = require('../res');
var connection = require('../koneksi');
const conn = require('../koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi Rest Api Berjalan", res)
};

//menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

exports.tampilberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    );
};

//Menambahkan data mahasiswa
exports.tambahmahasiswa = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)', [nim, nama, jurusan],
        function(error,rows,fields){
            if (error) {
                console.log(error);
            }else{
                response.ok(rows,res);
            }
        }
    );
};