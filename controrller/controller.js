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

//mengubah data mahasiswa
exports.ubahmahasiswa= function(req,res){
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    connection.query('UPDATE mahasiswa SET nim=?,nama=?,jurusan=? WHERE id_mahasiswa=?',[nim,nama,jurusan,id],
        function(error){
            if (error) {
                console.log(error);
            }else{
                response.ok("Berhasil ubah data",res);
            }
        }
    );
};

//menghapus data mahasiswa berdarkan id
exports.hapusmahasiswa=function(req,res){
    var id = req.body.id_mahasiswa;
    connection.query('DELETE FROM MAHASISWA where id_mahasiswa=?',[id],
        function(error){
            if (error) {
                console.log(error);
            }else{
                response.ok("Berhasil hapus data",res);
            }
        }
    );
};

//menampilkan matakuliah group
exports.tampilgroupmatakuliah=function (req,res) {
    connection.query('SELECT mahasiswa.id_mahasiswa,mahasiswa.nim,mahasiswa.nama,mahasiswa.jurusan,matakuliah.matakuliah,matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa',
    function (error,rows,fields) {
        if (error) {
            console.log(error);
        }else{
            response.oknested(rows,res);
        }
    }
    );
};