const app = Vue.createApp({

    data: function () {


        //DATA FOR ABS
        let strengthForAbs = new TrainingGroup('Strength')
            .addExercise(new Exercise('Machine Crunch'))
            .addExercise(new Exercise('Cable Crunch'))
            .addExercise(new Exercise('Sit Ups'));

        let enduranceForAbs = new TrainingGroup('endurance')
            .addExercise(new Exercise('Plank'))
            .addExercise(new Exercise('Crunch It Out Crunches'));

        let balanceForAbs = new TrainingGroup('balance')
            .addExercise(new Exercise('Roll Out'))
            .addExercise(new Exercise('Stability Ball Crunch Sit'));

        let flexibilityForAbs = new TrainingGroup('flexibility')
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

        let enduranceForBack = new TrainingGroup('endurance')
            .addExercise(new Exercise('Pull-Up'))
            .addExercise(new Exercise('Superman'));

        let balanceForBack = new TrainingGroup('balance')
            .addExercise(new Exercise('Back Leg Raises'))
            .addExercise(new Exercise('Squats on Bosu Ball'));

        let flexibilityForBack = new TrainingGroup('flexibility')
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

        let enduranceForBicep = new TrainingGroup('endurance')
            .addExercise(new Exercise('EZ-bar Curls'))
            .addExercise(new Exercise('Zottman Curls'));

        let balanceForBicep = new TrainingGroup('balance')
            .addExercise(new Exercise('Rope Twist Curl'));

        let flexibilityForBicep = new TrainingGroup('flexibility')
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

        let enduranceForChest = new TrainingGroup('endurance')
            .addExercise(new Exercise('Push Ups'))
            .addExercise(new Exercise('DB Standing Flies'));

        let balanceForChest = new TrainingGroup('balance')
            .addExercise(new Exercise('Stability Ball Push Ups'))
            .addExercise(new Exercise('Triangle Push Ups'));

        let flexibilityForChest = new TrainingGroup('flexibility')
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







            editExercise: {
                exerciseName: '',
                muscleGroup: '',
                training: '',
            },

            newMuscle: {
                muscleGroup: '',


            },

            muscleList: [
                {muscleGroup: 'abs'},
                {muscleGroup: 'back'},
                {muscleGroup: 'biceps'},
                {muscleGroup: 'chest'},
                // {muscleGroup: 'legs'},
                // {muscleGroup: 'shoulders'},
                // {muscleGroup: 'triceps'},
            ],
            trainingList: [
                {training: 'strength'},
                {training: 'endurance'},
                {training: 'balance'},
                {training: 'flexibility'},
            ],

        }
    },

    //methods: usually 'events' triggered by v-on:
    methods: {
        addExercise: function (newExerciseFromModal) {
            //add item to the list
            this.exerciseList.push(newExerciseFromModal);
            // this.list.findMuscle('abs').findTraining('strength').addExercise(...)
            // this.list.muscles['abs']
        },
        deleteIt(exercise) {
            this.exerciseList.splice(this.exerciseList.indexOf(exercise), 1);
        },

        addMuscle: function (newMuscleFromModal) {
            this.muscleList.push(newMuscleFromModal);
        },


    },

    computed: {
        filteredMuscles() {
            return this.allexercises.filter((muscleGroup) => muscleGroup.muscleGroup === this.muscleGroup);
        }


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