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

export default TrainingGroup;