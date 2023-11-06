app.component('AddExerciseModal', {
    data() {
        return {
            // newExercise: {
            //     id: Math.floor(Math.random() * 10e16),
            //     exerciseName: '',
            //     muscleGroup: '',
            //     training: 'strength',
            // },
            newExercise: new Exercise(),
        }
    },
    props: {
        modelValue: {
            type: Object,

        },
        id: {
            type: String,

        },
        training: {
            type: Object,
        },
    },
    emit: ['add-exercise'],
    methods: {
        addExercise: function () {
            this.$emit('add-exercise', this.newExercise)


            this.training.addExercise(this.newExercise);


            this.newExercise = new Exercise();
        },
    },
    computed: {

    },
    template: ` 
     <span>
     <!--         + trainingList     try to add to bs target the target should be the training of the muscle-->
         <button class="btn btn-tiny w-30"
            :data-bs-target="'#addExerciseModal' + id"
            data-bs-toggle="modal"
            title="Add Exercise" type="button">
            <i class="fa-solid fa-circle-plus"></i>
        </button>
        <!--         + trainingList-->
        <app-modal :id="'addExerciseModal' + id" title="Add Exercise">
             <div class="mb-3">
                <label class="form-label" for="exerciseName">Name of Exercise</label>
                <input v-model="newExercise.exerciseName" class="form-control" id="exerciseName"
                       type="text">
            </div>
           
            <template #footer>
            <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Nevermind
            </button>
            <button class="btn btn-primary" 
                    id="addExercise" type="submit"
                    @click.prevent="addExercise">Add Exercise
            </button>
            </template>
        </app-modal>
    </span>

    `
})