app.component('EditExerciseModal', {
    data() {
        return {
            editExercise: {
                ...this.modelValue
            }
        }

    },
    props: {
        modelValue: {
            type: Object,
            required: true,
        },

        muscles: {
            type: Array,
        }
    },

    emit: ['update:modelValue'],
    methods: {
        editIt: function () {

            Object.assign(this.modelValue, this.editExercise)

        },
    },
    template: `
            <span class="edit-exercise-modal"> 
              <button class="btn btn-tiny float-sm-end"
                    type="button"
                    :data-bs-target="'#editModal' + editExercise.id"
                    data-bs-toggle="modal">
                    <i class="fa-solid fa-pencil"></i>
                </button>         
                <app-modal :id="'editModal' + editExercise.id" title="Edit Exercise">
                     <div class="mb-3">
                        <label class="form-label" for="exerciseName">Name of Exercise</label>
                        <input v-model="editExercise.exerciseName" class="form-control" id="exerciseName"
                               type="text">
                    </div>
                    <div class="mb-3">
                        <label for="muscleGroup" class="form-label">Muscle Group</label>
                        <select v-model="editExercise.muscleGroup" class="form-select" id="muscleGroup"
                                required>
                            <option disabled hidden selected value>Choose Muscle Group</option>
                            <option v-for="(option, o) in muscles" :value="option.muscleGroup" :key="muscles.muscleGroup">{{option.muscleGroup.toUpperCase()}}</option>
                        </select>
                 
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="training">Training</label>
                        <select v-model="editExercise.training" class="form-select" id="training">
                            <option value="endurance">Endurance</option>
                            <option value="strength">Strength</option>
                            <option value="balance">Balance</option>
                            <option value="flexibility">Flexibility</option>
                        </select>
                    </div>
                    <template #footer>
                    <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Nevermind
                    </button>
                    <button @click.prevent="editIt" 
                        class="btn btn-primary" 
                        id="editExercise" 
                        type="submit"
                        data-bs-dismiss="modal">Save Exercise</button>
                    </template>
                </app-modal>
            </span> 
    `
})