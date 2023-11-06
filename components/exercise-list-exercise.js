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
        },

    },
    emits: ['delete-exercise'],

    method: {
        //eventually want to move it to here
        // this.exerciseName.deleteIt();
    },


    template: `
            <li class="exercise-list-exercise list-group-item flex-wrap">
            <div class="form-check">
                <span :class="'form-check-label'" class="exercise-name" :id="uid">{{exercise.exerciseName}}</span>
                <delete-exercise-modal :id="uid" v-model="exercise" @delete-exercise="deleteAction => $emit('delete-exercise', deleteAction)"></delete-exercise-modal>
                <edit-exercise-modal v-model="exercise"></edit-exercise-modal>
            </div>
        </li>

    `
});