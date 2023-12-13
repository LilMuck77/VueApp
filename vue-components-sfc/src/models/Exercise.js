function Exercise(name, equipment, instructions) {
    this.id = '';
    this.name = name ?? '';
    this.equipment = equipment ?? '';
    this.instructions = instructions ?? '';

    this.toFirestore = function () {
        return {
            name: this.name,
            equipment: this.equipment,
            instructions: this.instructions,
        };
    }
}

Exercise.collectionName = 'exercises';

Exercise.fromFirestore = function (snapshot, options) {
    const data = snapshot.data(options);
    const exercise = new Exercise(data.name, data.equipment, data.instructions);

    // set some things for  firebase usage
    exercise.id = snapshot.id;
    exercise._path = snapshot.ref.path;
    return exercise;
}
Exercise.type = 'Exercise'
export default Exercise;
