// 'use strict';
import mongoose from 'mongoose';
// var mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type:[{
            type: String,
            enum:['pending', 'in progress', 'completed']
        }],
        default: ['pending']
    }
});

export default mongoose.model('Tasks', TaskSchema);