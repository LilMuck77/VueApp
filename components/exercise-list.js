app.component('ExerciseList', {
    props: {
        training: {
            type: String,
            default: 'Training'
        },
        list: {
            type: Array,
            required: true,
        },
    },
    emits: ['delete-exercise'],
    //you can only have one level element
    template: `
            <div class="exercise-list col-xl-3 col-sm-12 col-md-6 pb-4">
            <h4>{{training}}</h4>
            <hr>                                                     
            <ul class="list-group list-group-flush border-bottom">
                <exercise-list-exercise v-for="(exercise, e) in list" 
                :key="exercise.exerciseName"
                :exercise="exercise"
                @delete-exercise="deleteAction => $emit('delete-exercise', deleteAction)"
                ></exercise-list-exercise>
            </ul>
        </div>
    `


});