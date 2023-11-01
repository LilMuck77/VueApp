app.component('ExerciseList', {
    data() {
        return {}
    },
    props: {
        training: {
            type: String,
        },
        allexercises: {
            type: Object,
            required: true,
        },
        muscle: {
            type: String,
        },
        muscles: {
            type: Array,
        }
    },

    computed: {

        // filteredExercises() {
        //     return this.allexercises.filter((exercise) => exercise.training === this.training && exercise.muscleGroup === this.muscle);
        // }

    },
    emits: ['delete-exercise'],
    template: `
            <div class="exercise-list col-xl-3 col-sm-12 col-md-6 pb-4">
            <h5>{{training.training}}</h5>
            <hr>                                                     
            <ul class="list-group list-group-flush border-bottom">
                <exercise-list-exercise v-for="exercise in training.listOfExercises" 
                :key="exercise.exerciseName"
                :exercise="exercise"
                :muscles="muscles"
                @delete-exercise="deleteAction => $emit('delete-exercise', deleteAction)"
                >{{exercise.exerciseName}}</exercise-list-exercise>
            </ul>
        </div>
    `


});