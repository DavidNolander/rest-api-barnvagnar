const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    description: {
        type: String
    },
    link: {
        type: String
    }
    // add in geo location
});

const Brand = mongoose.model('brand', BrandSchema);

module.exports = Brand;
