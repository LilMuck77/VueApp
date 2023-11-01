app.component('ExerciseListExercise', {
    data: function () {
        return {
            uid: 'sli-' + Math.floor(Math.random() * 10e16),
        }
    },

    props: {
        exercise: {
            type: Function,
            required: true,
        },
        muscles: {
            type: Array,
        }
    },
    emits: ['delete-exercise'],


    template: `
            <li class="exercise-list-exercise list-group-item flex-wrap">
            <div class="form-check">
                <span :class="'form-check-label'" class="exercise-name" v-bind:id="uid">{{exercise.exerciseName}}</span>
                <delete-exercise-modal v-model="exercise" @delete-exercise="deleteAction => $emit('delete-exercise', deleteAction)"></delete-exercise-modal>
                <edit-exercise-modal v-model="exercise" :muscles="muscles"></edit-exercise-modal>
            </div>
        </li>

    `
});