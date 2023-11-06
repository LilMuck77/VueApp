app.component('DeleteExerciseModal', {
    data() {
        return {
            deleteExercise: {
                ...this.modelValue
            },

        }

    },
    props: {
        modelValue: {
            type: Object,
            required: true,
        },
        id: {
            type: String,

        }
    },

    emits: ['delete-exercise'],
    methods: {
        deleteAction() {
            this.$emit('delete-exercise', this.modelValue)

        },

    },

    template: `
            <span class="delete-exercise-modal">
              <button class="btn btn-tiny float-sm-end"
                    type="button"
                    :data-bs-target="'#deleteModal' + id"
                    data-bs-toggle="modal">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <app-modal :id="'deleteModal' + id" title="Delete Exercise">
                     <div class="mb-3">
                        <label class="form-label" for="approveDelete">Are you sure you want to DELETE - <b>"{{modelValue.exerciseName}}"</b>?</label>
                    </div>
                    <template #footer>
                    <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Nevermind
                    </button>
                    <button @click.prevent="deleteAction"
                        class="btn btn-danger"
                        type="submit"
                        data-bs-dismiss="modal">Delete Exercise</button>
                    </template>
                </app-modal>
            </span>
    `
})