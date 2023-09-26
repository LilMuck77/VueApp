const app = Vue.createApp({

    data: function () {
        return {
            newExercise: {
                exerciseName: '',
                muscleGroup: '',
                training: 'strength',
            },

            editExercise: {
                exerciseName: '',
                muscleGroup: '',
                training: '',
            },

            newMuscle: {
                muscleGroup: '',
                color: '',

            },

            muscleList: [
                {muscleGroup: 'abs', color: '#FFEB00'},
                {muscleGroup: 'back', color: '#32FF19'},
                {muscleGroup: 'biceps', color: '#1028FF'},
                {muscleGroup: 'chest', color: '#FF1713'},
                // {muscleGroup: 'legs', color: '#FF008B'},
                // {muscleGroup: 'shoulders', color: '#fd7e14'},
                // {muscleGroup: 'triceps', color: '#31d2f2'},
            ],
            trainingList: [
                {training: 'strength'},
                {training: 'endurance'},
                {training: 'balance'},
                {training: 'flexibility'},
            ],

            exerciseList: [
                //ABS-STRENGTH
                {exerciseName: 'Machine Crunch', muscleGroup: 'abs', training: 'strength'},
                {exerciseName: 'Cable Crunch', muscleGroup: 'abs', training: 'strength'},
                {exerciseName: 'Sit Ups', muscleGroup: 'abs', training: 'strength'},
                //ABS-ENDURANCE
                {exerciseName: 'Plank', muscleGroup: 'abs', training: 'endurance'},
                {exerciseName: 'Crunch It Out Crunches', muscleGroup: 'abs', training: 'endurance'},
                //ABS-BALANCE
                {exerciseName: 'Roll Out', muscleGroup: 'abs', training: 'balance'},
                {exerciseName: 'Stability Ball Crunch Sit', muscleGroup: 'abs', training: 'balance'},
                //ABS-FLEXIBILITY
                {exerciseName: 'Cat Cow Stretch', muscleGroup: 'abs', training: 'flexibility'},
                {exerciseName: 'Cobra Pose', muscleGroup: 'abs', training: 'flexibility'},
                {exerciseName: 'Prone Abdominal Stretch', muscleGroup: 'abs', training: 'flexibility'},

                //BACK-STRENGTH
                {exerciseName: 'Deadlift', muscleGroup: 'back', training: 'strength'},
                {exerciseName: 'Bent-Over Row', muscleGroup: 'back', training: 'strength'},
                {exerciseName: 'Seated Row', muscleGroup: 'back', training: 'strength'},
                //BACK-ENDURANCE
                {exerciseName: 'Pull-Up', muscleGroup: 'back', training: 'endurance'},
                {exerciseName: 'Superman', muscleGroup: 'back', training: 'endurance'},
                //BACK-BALANCE
                {exerciseName: 'Back Leg Raises', muscleGroup: 'back', training: 'balance'},
                {exerciseName: 'Squats on Bosu Ball', muscleGroup: 'back', training: 'balance'},
                //BACK-FLEXIBILITY
                {exerciseName: 'Childs Pose', muscleGroup: 'back', training: 'flexibility'},
                {exerciseName: 'Knee to Chest', muscleGroup: 'back', training: 'flexibility'},
                {exerciseName: 'Supine Twist', muscleGroup: 'back', training: 'flexibility'},

                //BICEP-STRENGTH
                {exerciseName: 'Incline Dumbbell Curl', muscleGroup: 'biceps', training: 'strength'},
                {exerciseName: 'Concentration Curl', muscleGroup: 'biceps', training: 'strength'},
                {exerciseName: 'Single-Arm Preacher Curl', muscleGroup: 'biceps', training: 'strength'},
                //BICEP-ENDURANCE
                {exerciseName: 'EZ-bar Curls', muscleGroup: 'biceps', training: 'endurance'},
                {exerciseName: 'Zottman Curls', muscleGroup: 'biceps', training: 'endurance'},
                //BICEP-BALANCE
                {exerciseName: 'Rope Twist Curl', muscleGroup: 'biceps', training: 'balance'},
                //BICEP-FLEXIBILITY
                {exerciseName: 'Wall Bicep Stretch', muscleGroup: 'biceps', training: 'flexibility'},
                {exerciseName: 'Doorway Bicep Stretch', muscleGroup: 'biceps', training: 'flexibility'},

                //CHEST-STRENGTH
                {exerciseName: 'Dumbbell Bench Press', muscleGroup: 'chest', training: 'strength'},
                {exerciseName: 'Incline Bench Press', muscleGroup: 'chest', training: 'strength'},
                {exerciseName: 'Chest Fly', muscleGroup: 'chest', training: 'strength'},
                //CHEST-ENDURANCE
                {exerciseName: 'Push Ups', muscleGroup: 'chest', training: 'endurance'},
                {exerciseName: 'DB Standing Flies', muscleGroup: 'chest', training: 'endurance'},
                //CHEST-BALANCE
                {exerciseName: 'Stability Ball Push Ups', muscleGroup: 'chest', training: 'balance'},
                {exerciseName: 'Triangle Push Ups', muscleGroup: 'chest', training: 'balance'},
                //CHEST-FLEXIBILITY
                {exerciseName: 'Seated Shoulder Ext.', muscleGroup: 'chest', training: 'flexibility'},
                {exerciseName: 'Chest Opener Stretch.', muscleGroup: 'chest', training: 'flexibility'},
            ],


        }
    },

    //methods: usually 'events' triggered by v-on:
    methods: {
        addExercise: function () {
            //add item to the list

            this.exerciseList.push(this.newExercise);


            //clear the form
            this.newExercise = {
                exerciseName: '',
                muscleGroup: '',
                training: 'strength'
            };
        },


        deleteExercise(exercise) {

            this.exerciseList.splice(this.exerciseList.indexOf(exercise), 1);

        },

        addMuscle() {
            this.muscleList.push(this.newMuscle);
        },

        edit(exercise) {
            this.editExercise = exercise;
        }


    },

    computed: {
        //ABS LISTS
        absStrengthList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'strength' && exercise.muscleGroup === 'abs';
            })
        },
        absEnduranceList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'endurance' && exercise.muscleGroup === 'abs';
            })
        },
        absBalanceList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'balance' && exercise.muscleGroup === 'abs';
            })
        },
        absFlexibilityList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'flexibility' && exercise.muscleGroup === 'abs';
            })
        },

        //BACK LISTS
        backStrengthList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'strength' && exercise.muscleGroup === 'back';
            })
        },
        backEnduranceList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'endurance' && exercise.muscleGroup === 'back';
            })
        },
        backBalanceList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'balance' && exercise.muscleGroup === 'back';
            })
        },
        backFlexibilityList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'flexibility' && exercise.muscleGroup === 'back';
            })
        },

        //BICEP LISTS
        bicepStrengthList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'strength' && exercise.muscleGroup === 'biceps';
            })
        },
        bicepEnduranceList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'endurance' && exercise.muscleGroup === 'biceps';
            })
        },
        bicepBalanceList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'balance' && exercise.muscleGroup === 'biceps';
            })
        },
        bicepFlexibilityList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'flexibility' && exercise.muscleGroup === 'biceps';
            })
        },

        //CHEST LISTS
        chestStrengthList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'strength' && exercise.muscleGroup === 'chest';
            })
        },
        chestEnduranceList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'endurance' && exercise.muscleGroup === 'chest';
            })
        },
        chestBalanceList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'balance' && exercise.muscleGroup === 'chest';
            })
        },
        chestFlexibilityList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'flexibility' && exercise.muscleGroup === 'chest';
            })
        },

        //-----------
        //MUSCLE LISTS
        absList: function () {
            return this.muscleList.filter(function (muscle) {
                return muscle.muscleGroup === 'abs';
            })
        },
        bicepsList: function () {
            return this.muscleList.filter(function (muscle) {
                return muscle.muscleGroup === 'biceps';
            })
        },

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