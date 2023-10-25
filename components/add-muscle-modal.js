app.component('AddMuscleModal', {
    data() {
        return {
            newMuscle: {
                muscleGroup: '',
                // color: '',

            },
        }
    },
    props: {
        id: {
            type: String,
            required: true
        },
        muscles: {
            type: Array,
        }
    },
    emit: ['add-muscle'],
    methods: {
        addMuscle: function () {
            this.$emit('add-muscle', this.newMuscle)

            //grab option of muscles from muscles list and make it equal the muscleGroup for newExercise

            this.newMuscle = {
                muscleGroup: '',
            };
        },
    },
    computed: {},
    template: `           
    <app-modal :id="id" title="Add Muscle">
         <div class="mb-3">
            <label class="form-label" for="muscleName">Name of Muscle</label>
            <input v-model="newMuscle.muscleGroup" class="form-control" id="muscleName"
                   type="text">
        </div>
        <template #footer>
        <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Nevermind
        </button>
        <button class="btn btn-primary" 
                id="addMuscle" type="submit"
                @click.prevent="addMuscle">Add Muscle
        </button>
        </template>
    </app-modal>

    `
})