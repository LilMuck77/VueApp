app.component('ExerciseList', {
    data() {
        return {
            uid: 'tra-' + Math.floor(Math.random() * 10e16),
        }
    },
    props: {
        training: {
            type: Object,
        },

    },

    computed: {

    },
    emits: ['delete-exercise'],
    template: `
            <div class="exercise-list col-xl-3 col-sm-12 col-md-6 pb-4">
            <h5>{{training.training}}
                <add-exercise-modal :training="training" :id="uid" v-model="training" @add-exercise="addExercise => $emit('add-exercise', addExercise)">
                </add-exercise-modal>
            </h5>
            <hr>                                                     
            <ul class="list-group list-group-flush border-bottom">
                <exercise-list-exercise v-for="exercise in training.listOfExercises" 
                :key="exercise.exerciseName"
                :exercise="exercise"
         
                @delete-exercise="deleteAction => $emit('delete-exercise', deleteAction)"
                ></exercise-list-exercise>
            </ul>
        </div>
    `


});