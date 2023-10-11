app.component('MuscleListMuscle', {
    data: function () {
        return {
            uid: 'sli-' + Math.floor(Math.random() * 10e16),
        }
    },

    props: {
        muscle: {
            type: Object,
            required: true,
        }
    },

    template: `
            <li class="muscle-list-muscle list-group-item">
            <div class="form-check">
                <span :class="'form-check-label'" v-bind:id="uid">{{muscle.muscleGroup}}</span>
            </div>
        </li>

    `
});