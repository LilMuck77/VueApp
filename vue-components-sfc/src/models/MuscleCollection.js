function MuscleCollection() {


    this.listOfMuscles = [];
    this.addMuscleGroup = function (muscleGroup) {

        this.listOfMuscles.push(muscleGroup);
        return this;

    }
    return this;
}

export default MuscleCollection;