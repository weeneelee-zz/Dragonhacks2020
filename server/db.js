const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ groceries: []})
  .write()

// Add a post
db.get('groceries')
  .push({ id: data, value : {
    Shelf_Life: 72,
    Calorie_Count_Per_Serving: 17

  }})
  .write()

let dbexport = module.exports = { db };