function Exercise(exerciseName, id) {
    this.exerciseName = exerciseName ?? '';


    //NOTE: these functions for making a record high or favorite
    //get stored in here. Then on the component that uses them
    //in the methods do a .recordHigh or .favorite on the exercise
    //such as this.exercise.recordHigh

    //FUTURE USE
    // this.recordHigh = 0;
    //
    // this.newRecord = function(){
    //     //something like this
    //     this.recordHigh = record;
    // }
    //
    // this.Favorite = false;


//want to have the logic in here eventually
    // this.deleteIt = function() {
    //     // this.musclesCollection.splice(this.musclesCollection.indexOf(exercise), 1);
    //
    //
    //     // Iterate through each muscle object in the musclesCollection
    //     for (let i = 0; i < this.musclesCollection.listOfMuscles.length; i++) {
    //         const muscleGroup = this.musclesCollection.listOfMuscles[i];
    //
    //         // Iterate through each training object in the muscle
    //         for (let j = 0; j < muscleGroup.listOfTrainings.length; j++) {
    //             const training = muscleGroup.listOfTrainings[j];
    //
    //             // Find the index of the exercise within the training object
    //             const exerciseIndex = training.listOfExercises.findIndex(
    //                 (ex) => ex.name === exercise.name
    //             );
    //
    //             // If exerciseIndex is found (greater than -1), remove the exercise from the array
    //             if (exerciseIndex > -1) {
    //                 training.listOfExercises.splice(exerciseIndex, 1);
    //                 return; // Exit the function once the exercise is deleted
    //             }
    //         }
    //     }
    //
    // }

}

Exercise.type = 'Exercise'


function TrainingGroup(training) {
    this.training = training ?? '';

    //an array to hold the exercises for the training group
    this.listOfExercises = [];
    this.addExercise = function (exercise) {
        this.listOfExercises.push(exercise);

        return this;
    }

    this.removeExercise = function (exercise) {
        this.listOfExercises.splice(this.listOfExercises.indexOf(exercise), 1)
    }
    return this;
}

TrainingGroup.type = 'Training'


function MuscleGroup(muscleGroup) {
    this.muscleGroup = muscleGroup ?? '';

    //an array to hold the training groups for the muscle group it belongs too.
    this.listOfTrainings = [];
    this.addTrainingGroup = function (TrainingGroup) {
        //one way to do it
        this.listOfTrainings.push(TrainingGroup);

        //another way to do it, does the same thing I believe
        //this.trainings[training] = new TrainingGroup(training);
        return this;
    }
    return this;
}

MuscleGroup.type = 'MuscleGroup'

function MusclesCollection() {


    this.listOfMuscles = [];
    this.addMuscleGroup = function (MuscleGroup) {

        this.listOfMuscles.push(MuscleGroup);
        return this;

    }
    return this;
}



