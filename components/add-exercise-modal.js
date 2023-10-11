app.component('AddExerciseModal', {
    data() {
        return {
            newExercise: {
                id: Math.floor(Math.random() * 10e16),
                exerciseName: '',
                muscleGroup: '',
                training: 'strength',
            },
        }

    },
    props: {
        id: {
            type: String,
            required: true
        }

    },
    emit: ['add-exercise'],
    methods: {
        addExercise: function () {
            //add item to the list

            // this.exerciseList.push(this.newExercise);
            this.$emit('add-exercise', this.newExercise)


            //clear the form
            this.newExercise = {
                exerciseName: '',
                muscleGroup: '',
                training: 'strength'
            };
        },
    },
    template: `           
    <app-modal :id="id" title="Add Exercise">
         <div class="mb-3">
            <label class="form-label" for="exerciseName">Name of Exercise</label>
            <input v-model="newExercise.exerciseName" class="form-control" id="exerciseName"
                   type="text">
        </div>
        <div class="mb-3">
            <label for="muscleGroup" class="form-label">Muscle Group</label>
            <select v-model="newExercise.muscleGroup" class="form-select" id="muscleGroup"
                    required>
                <option disabled hidden selected value>Choose Muscle Group</option>
                <option value="abs">ABS</option>
                <option value="back">BACK</option>
                <option value="biceps">BICEPS</option>
                <option value="chest">CHEST</option>
                <!--<option value="legs">LEGS</option>-->
                <!--<option value="shoulders">SHOULDERS</option>-->
                <!--<option value="triceps">TRICEPS</option>-->
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label" for="training">Training</label>
            <select v-model="newExercise.training" class="form-select" id="training">
                <option value="endurance">Endurance</option>
                <option value="strength">Strength</option>
                <option value="balance">Balance</option>
                <option value="flexibility">Flexibility</option>
            </select>
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

    `
})