const app = Vue.createApp({

    data: function () {


        //DATA FOR ABS
        let strengthForAbs = new TrainingGroup('Strength')
            .addExercise(new Exercise('Machine Crunch'))
            .addExercise(new Exercise('Cable Crunch'))
            .addExercise(new Exercise('Sit Ups'));

        let enduranceForAbs = new TrainingGroup('Endurance')
            .addExercise(new Exercise('Plank'))
            .addExercise(new Exercise('Crunch It Out Crunches'));

        let balanceForAbs = new TrainingGroup('Balance')
            .addExercise(new Exercise('Roll Out'))
            .addExercise(new Exercise('Stability Ball Crunch Sit'));

        let flexibilityForAbs = new TrainingGroup('Flexibility')
            .addExercise(new Exercise('Cobra Pose'))
            .addExercise(new Exercise('Prone Abdominal Stretch'));

        let abs = new MuscleGroup('Abs')
            .addTrainingGroup(enduranceForAbs)
            .addTrainingGroup(strengthForAbs)
            .addTrainingGroup(balanceForAbs)
            .addTrainingGroup(flexibilityForAbs);

        //DATA FOR BACK
        let strengthForBack = new TrainingGroup('Strength')
            .addExercise(new Exercise('Deadlift'))
            .addExercise(new Exercise('Bent-Over Row'))
            .addExercise(new Exercise('Seated Row'));

        let enduranceForBack = new TrainingGroup('Endurance')
            .addExercise(new Exercise('Pull-Up'))
            .addExercise(new Exercise('Superman'));

        let balanceForBack = new TrainingGroup('Balance')
            .addExercise(new Exercise('Back Leg Raises'))
            .addExercise(new Exercise('Squats on Bosu Ball'));

        let flexibilityForBack = new TrainingGroup('Flexibility')
            .addExercise(new Exercise('Childs Pose'))
            .addExercise(new Exercise('Knee to Chest'))
            .addExercise(new Exercise('Supine Twist'));

        let back = new MuscleGroup('Back')
            .addTrainingGroup(enduranceForBack)
            .addTrainingGroup(strengthForBack)
            .addTrainingGroup(balanceForBack)
            .addTrainingGroup(flexibilityForBack);

        //DATA FOR BICEPS
        let strengthForBicep = new TrainingGroup('Strength')
            .addExercise(new Exercise('Incline Dumbbell Curl'))
            .addExercise(new Exercise('Concentration Curl'))
            .addExercise(new Exercise('Single-Arm Preacher Curl'));

        let enduranceForBicep = new TrainingGroup('Endurance')
            .addExercise(new Exercise('EZ-bar Curls'))
            .addExercise(new Exercise('Zottman Curls'));

        let balanceForBicep = new TrainingGroup('Balance')
            .addExercise(new Exercise('Rope Twist Curl'));

        let flexibilityForBicep = new TrainingGroup('Flexibility')
            .addExercise(new Exercise('Wall Bicep Stretch'))
            .addExercise(new Exercise('Doorway Bicep Stretch'));

        let bicep = new MuscleGroup('Bicep')
            .addTrainingGroup(enduranceForBicep)
            .addTrainingGroup(strengthForBicep)
            .addTrainingGroup(balanceForBicep)
            .addTrainingGroup(flexibilityForBicep);


        //DATA FOR CHEST
        let strengthForChest = new TrainingGroup('Strength')
            .addExercise(new Exercise('Dumbbell Bench Press'))
            .addExercise(new Exercise('Incline Bench Press'))
            .addExercise(new Exercise('Chest Fly'));

        let enduranceForChest = new TrainingGroup('Endurance')
            .addExercise(new Exercise('Push Ups'))
            .addExercise(new Exercise('DB Standing Flies'));

        let balanceForChest = new TrainingGroup('Balance')
            .addExercise(new Exercise('Stability Ball Push Ups'))
            .addExercise(new Exercise('Triangle Push Ups'));

        let flexibilityForChest = new TrainingGroup('Flexibility')
            .addExercise(new Exercise('Seated Shoulder Ext.'))
            .addExercise(new Exercise('Chest Opener Stretch.'));

        let chest = new MuscleGroup('Chest')
            .addTrainingGroup(enduranceForChest)
            .addTrainingGroup(strengthForChest)
            .addTrainingGroup(balanceForChest)
            .addTrainingGroup(flexibilityForChest);

        return {
            //ADD all  muscleGroups to muscleCollection
            musclesCollection: new MusclesCollection()
                .addMuscleGroup(abs)
                .addMuscleGroup(back)
                .addMuscleGroup(bicep)
                .addMuscleGroup(chest),

        }
    },

    //a lot to switch over. need to switch all data to use muscle collections
    //need to figure out delete and edit
    //working on add. need to add to the modelvalue of the strength and maybe the muscle too.
    //got to figure it out. good luck muck


    //methods: usually 'events' triggered by v-on:
    methods: {
        addExercise: function (newExerciseFromModal) {
            // this.musclesCollection.push(newExerciseFromModal);
            // this.list.findMuscle('abs').findTraining('strength').addExercise(...)
            // this.list.muscles['abs']

            for (let muscleGroup of this.musclesCollection.listOfMuscles) {
                for (let training of muscleGroup.listOfTrainings) {
                    training.listOfExercises.push(newExerciseFromModal);
                }
            }

        },
        deleteIt(exercise) {

            for (let muscleGroup of this.musclesCollection.listOfMuscles) {
                for (let training of muscleGroup.listOfTrainings) {
                    let exerciseIndex = training.listOfExercises.indexOf(exercise);
                    if (exerciseIndex !== -1) {
                        training.listOfExercises.splice(exerciseIndex, 1);
                        return;
                    }
                }
            }

        },

        addMuscle: function (newMuscleFromModal) {
            this.musclesCollection.listOfMuscles.push(newMuscleFromModal);

            newMuscleFromModal.addTrainingGroup(new TrainingGroup('Strength'))
                .addTrainingGroup(new TrainingGroup('Endurance'))
                .addTrainingGroup(new TrainingGroup('Balance'))
                .addTrainingGroup(new TrainingGroup('Flexibility'));


        },
    },

    computed: {
    },

    //mounted:  called after the instance has been mounted,
    mounted: function () {

        if (localStorage.getItem('exerciseList')) {
            // this.exerciseList = JSON.parse(localStorage.getItem('exerciseList'))
        }
        //if list exists in storage, replace current list

        //if you want to delete local storage =  < inspector < application < localstorage <http... < press X

    },

    watch: {
        exerciseList: {
            //call this function when an item changes
            handler: function (newList) {
                // localStorage.setItem('exerciseList', JSON.stringify(this.exerciseList));
            },
            deep: true, //tells vue to watch nested properties
        }
    }


});