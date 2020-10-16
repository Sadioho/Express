// lowdb bai6
var low = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')
    // luu data vao file
var adapter = new FileSync('db.json')
    //tra ve 1 object db tu day co the truy xuat du lieu
var db = low(adapter)
    // Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
    .write();

module.exports = db;