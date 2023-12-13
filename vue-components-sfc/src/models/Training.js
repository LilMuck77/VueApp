function Training(type) {
    this.id = '';
    this.type = type ?? '';

    this.toFirestore = function () {
        return {
            type: this.type,
        };
    }
}

Training.collectionName = 'trainings';

Training.fromFirestore = function (snapshot, options) {
    const data = snapshot.data(options);
    const training = new Training(data.type);
    // set some things for firebase usage
    training.id = snapshot.id;
    training._path = snapshot.ref.path;
    return training;
}
Training.type = 'Training'

export default Training;