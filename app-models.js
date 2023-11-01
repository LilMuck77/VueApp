function Exercise(exerciseName) {
    this.exerciseName = exerciseName;

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

    return this;

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



