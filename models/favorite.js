const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


var  favoriteSchema = new Schema({

    user: { 
        type: Schema.Types.ObjectId, 
        ref: "User" },

    dishes: [
        { 
            type: Schema.Types.ObjectId,
         ref: "Dish" }
        ],
   
},
 {
    timestamps: true
});
var Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;