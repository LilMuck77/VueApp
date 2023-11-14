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

export default MuscleGroup;