app.component('ExerciseListExercise', {
    data: function () {
        return {
            uid: 'sli-' + Math.floor(Math.random() * 10e16),
        }
    },

    props: {
        exercise: {
            type: Object,
            required: true,
        }
    },
    emits: ['delete-exercise'],


    template: `
            <li class="exercise-list-exercise list-group-item">
            <div class="form-check">
                <span :class="'form-check-label'" v-bind:id="uid">{{exercise.exerciseName}}</span>
<!--                <button class="btn btn-tiny float-sm-end"-->
<!--                        v-on:click="deleteExercise()"><i-->
<!--                        class="fa-solid fa-trash"></i>-->
<!--                </button>-->
                <delete-exercise-modal v-model="exercise" @delete-exercise="deleteAction => $emit('delete-exercise', deleteAction)"></delete-exercise-modal>
                <edit-exercise-modal v-model="exercise"></edit-exercise-modal>
            </div>
        </li>

    `
});