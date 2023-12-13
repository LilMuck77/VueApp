function Muscle(muscle) {
    this.id = '';
    this.muscle = muscle ?? '';

    this.toFirestore = function () {
        return {
            muscle: this.muscle,
        };
    }
}

Muscle.collectionName = 'muscles';

Muscle.fromFirestore = function (snapshot, options) {
    const data = snapshot.data(options);
    const muscle = new Muscle(data.type);
    // set some things for firebase usage
    muscle.id = snapshot.id;
    muscle._path = snapshot.ref.path;
    return muscle;
}
Muscle.type = 'MuscleGroup'

export default Muscle;
