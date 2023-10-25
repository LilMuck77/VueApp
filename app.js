const app = Vue.createApp({

    data: function () {
        return {

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


            exerciseList: [
                //ABS-STRENGTH
                {id: 1, exerciseName: 'Machine Crunch', muscleGroup: 'abs', training: 'strength'},
                {id: 2, exerciseName: 'Cable Crunch', muscleGroup: 'abs', training: 'strength'},
                {id: 3, exerciseName: 'Sit Ups', muscleGroup: 'abs', training: 'strength'},
                //ABS-ENDURANCE
                {id: 4, exerciseName: 'Plank', muscleGroup: 'abs', training: 'endurance'},
                {id: 5, exerciseName: 'Crunch It Out Crunches', muscleGroup: 'abs', training: 'endurance'},
                //ABS-BALANCE
                {id: 6, exerciseName: 'Roll Out', muscleGroup: 'abs', training: 'balance'},
                {id: 7, exerciseName: 'Stability Ball Crunch Sit', muscleGroup: 'abs', training: 'balance'},
                //ABS-FLEXIBILITY
                {id: 8, exerciseName: 'Cat Cow Stretch', muscleGroup: 'abs', training: 'flexibility'},
                {id: 9, exerciseName: 'Cobra Pose', muscleGroup: 'abs', training: 'flexibility'},
                {id: 10, exerciseName: 'Prone Abdominal Stretch', muscleGroup: 'abs', training: 'flexibility'},

                //BACK-STRENGTH
                {id: 11, exerciseName: 'Deadlift', muscleGroup: 'back', training: 'strength'},
                {id: 12, exerciseName: 'Bent-Over Row', muscleGroup: 'back', training: 'strength'},
                {id: 13, exerciseName: 'Seated Row', muscleGroup: 'back', training: 'strength'},
                //BACK-ENDURANCE
                {id: 14, exerciseName: 'Pull-Up', muscleGroup: 'back', training: 'endurance'},
                {id: 15, exerciseName: 'Superman', muscleGroup: 'back', training: 'endurance'},
                //BACK-BALANCE
                {id: 16, exerciseName: 'Back Leg Raises', muscleGroup: 'back', training: 'balance'},
                {id: 17, exerciseName: 'Squats on Bosu Ball', muscleGroup: 'back', training: 'balance'},
                //BACK-FLEXIBILITY
                {id: 18, exerciseName: 'Childs Pose', muscleGroup: 'back', training: 'flexibility'},
                {id: 19, exerciseName: 'Knee to Chest', muscleGroup: 'back', training: 'flexibility'},
                {id: 20, exerciseName: 'Supine Twist', muscleGroup: 'back', training: 'flexibility'},

                //BICEP-STRENGTH
                {id: 21, exerciseName: 'Incline Dumbbell Curl', muscleGroup: 'biceps', training: 'strength'},
                {id: 22, exerciseName: 'Concentration Curl', muscleGroup: 'biceps', training: 'strength'},
                {id: 23, exerciseName: 'Single-Arm Preacher Curl', muscleGroup: 'biceps', training: 'strength'},
                //BICEP-ENDURANCE
                {id: 24, exerciseName: 'EZ-bar Curls', muscleGroup: 'biceps', training: 'endurance'},
                {id: 25, exerciseName: 'Zottman Curls', muscleGroup: 'biceps', training: 'endurance'},
                //BICEP-BALANCE
                {id: 26, exerciseName: 'Rope Twist Curl', muscleGroup: 'biceps', training: 'balance'},
                //BICEP-FLEXIBILITY
                {id: 27, exerciseName: 'Wall Bicep Stretch', muscleGroup: 'biceps', training: 'flexibility'},
                {id: 28, exerciseName: 'Doorway Bicep Stretch', muscleGroup: 'biceps', training: 'flexibility'},

                //CHEST-STRENGTH
                {id: 29, exerciseName: 'Dumbbell Bench Press', muscleGroup: 'chest', training: 'strength'},
                {id: 30, exerciseName: 'Incline Bench Press', muscleGroup: 'chest', training: 'strength'},
                {id: 31, exerciseName: 'Chest Fly', muscleGroup: 'chest', training: 'strength'},
                //CHEST-ENDURANCE
                {id: 32, exerciseName: 'Push Ups', muscleGroup: 'chest', training: 'endurance'},
                {id: 33, exerciseName: 'DB Standing Flies', muscleGroup: 'chest', training: 'endurance'},
                //CHEST-BALANCE
                {id: 34, exerciseName: 'Stability Ball Push Ups', muscleGroup: 'chest', training: 'balance'},
                {id: 35, exerciseName: 'Triangle Push Ups', muscleGroup: 'chest', training: 'balance'},
                //CHEST-FLEXIBILITY
                {id: 35, exerciseName: 'Seated Shoulder Ext.', muscleGroup: 'chest', training: 'flexibility'},
                {id: 36, exerciseName: 'Chest Opener Stretch.', muscleGroup: 'chest', training: 'flexibility'},
            ],

        }
    },

    //methods: usually 'events' triggered by v-on:
    methods: {
        addExercise: function (newExerciseFromModal) {
            //add item to the list
            this.exerciseList.push(newExerciseFromModal);

        },
        deleteIt(exercise) {
            this.exerciseList.splice(this.exerciseList.indexOf(exercise), 1);
        },

        addMuscle: function (newMuscleFromModal) {
            this.muscleList.push(newMuscleFromModal);
        },


    },

    computed: {


    },

    //mounted:  called after the instance has been mounted,
    mounted: function () {

        if (localStorage.getItem('exerciseList')) {
            this.exerciseList = JSON.parse(localStorage.getItem('exerciseList'))
        }
        //if list exists in storage, replace current list

        //if you want to delete local storage =  < inspector < application < localstorage <http... < press X

    },

    watch: {
        exerciseList: {
            //call this function when an item changes
            handler: function (newList) {
                localStorage.setItem('exerciseList', JSON.stringify(this.exerciseList));
            },
            deep: true, //tells vue to watch nested properties
        }
    }


});