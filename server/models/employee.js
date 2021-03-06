const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema ({
    name: { type: String, required: true},
    position:{ type: String, required: true},
    office: {type: String},
    salary: {type: Number}
});

module.exports = mongoose.model('Employee' , EmployeeSchema);