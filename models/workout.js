import mongoose from 'mongoose';
const { Schema } = mongoose; 

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter exercise name"
        },
        duration: {
            type: Number,
            required: "Enter duration of exercise in minutes"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});

const Workout = mongoose.model;("Workout", WorkoutSchema);

module.exports = Workout; 