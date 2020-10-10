const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
    title: String,
})

module.exports = mongoose.model('Menu', MenuSchema);