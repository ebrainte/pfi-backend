var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var feelingSchema = new Schema({
    matchId: String,
    gameEnding: Boolean,
    randomGameId: String,
    deviceId: String,
    date: Date,
    bored: Boolean,
    tense: Boolean,
    quiet: Boolean,
    angry: Boolean,
    anxious: Boolean,
    happy: Boolean,
    sad: Boolean,
    tired: Boolean
});

var Feelings = mongoose.model('Feeling', feelingSchema);

console.log("Feeling model created");
module.exports = Feelings;
