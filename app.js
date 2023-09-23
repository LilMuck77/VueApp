const app = Vue.createApp({

    data: function () {
        return {
            newExercise: {
                exerciseName: '',
                muscleGroup: '',
                training: '',
            },

            newMuscleGroup: {
                muscleName: '',
                color: '',

            },

            // muscleList: [
            //     {muscleName: 'abs', color: '#FFEB00'},
            //     {muscleName: 'back', color: '#32FF19'},
            //     {muscleName: 'biceps', color: '#1028FF'},
            //     {muscleName: 'chest', color: '#FF1713'},
            //     {muscleName: 'legs', color: '#FF008B'},
            //     {muscleName: 'shoulders', color: '#fd7e14'},
            //     {muscleName: 'triceps', color: '#31d2f2'},
            // ],
            trainingList: [
                {training: 'strength'},
                {training: 'endurance'},
                {training: 'balance'},
                {training: 'flexibility'},
            ],


            exerciseList: [
                {
                    abbs: [
                        {
                            strength: [
                                {exerciseName: 'Machine Crunch'},
                                {exerciseName: 'Cable Crunch'},
                                {exerciseName: 'Sit Ups'},
                            ],

                            endurance: [
                                {exerciseName: 'Plank'},
                                {exerciseName: 'Crunch It Out Crunches'},
                            ],

                            balance: [
                                {exerciseName: 'Roll Out'},
                                {exerciseName: 'Stability Ball Crunch Sit'},
                            ],

                            flexibility: [
                                {exerciseName: 'Cat Cow Stretch'},
                                {exerciseName: 'Cobra Pose'},
                                {exerciseName: 'Prone Abdominal Stretch'},
                            ],

                        },
                    ]
                }
            ],


        }
    },

    //methods: usually 'events' triggered by v-on:
    methods: {
        addExercise: function () {
            //add item to the list
            console.log("hi");

            this.exerciseList.push(this.newExercise);

            //clear the form
            this.newExercise = {
                exerciseName: '',
                muscleGroup: '',
                training: ''
            };
        },

        deleteExercise(exercise) {
            ``
            this.exerciseList.splice(this.exerciseList.indexOf(exercise), 1);

        },

        addMuscleGroup() {

            this.exerciseList.muscleGroup.training.push(this.newExercise);

        }


    },

    computed: {
        strengthList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'strength' && exercise.muscleGroup === 'abs';
            })
        },
        enduranceList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'endurance' && exercise.muscleGroup === 'abs';
            })
        },
        balanceList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'balance' && exercise.muscleGroup === 'abs';
            })
        },
        flexibilityList: function () {
            return this.exerciseList.filter(function (exercise) {
                return exercise.training === 'flexibility' && exercise.muscleGroup === 'abs';
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